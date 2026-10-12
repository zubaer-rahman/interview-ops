import { useState, useMemo, useEffect, useRef } from "react";

const PROFILE_KEY = "io:profile";
import { useProgress } from "./core/hooks/useProgress";
import { Login } from "./features/auth/Login";
import { Sidebar } from "./features/layout/Sidebar";
import { Topbar } from "./features/layout/Topbar";
import { TopicContent } from "./features/topics/TopicContent";
import { PreferencesModal } from "./features/preferences/PreferencesModal";
import { usePreferences } from "./core/hooks/usePreferences";
import { CATEGORIES } from "./data/categories";

const TOTAL_TOPICS = CATEGORIES.reduce((sum, c) => sum + c.topics.length, 0);

export default function App() {
  const [profile, setProfile] = useState(() => localStorage.getItem(PROFILE_KEY) || null);
  const [nameInput, setNameInput] = useState("");
  const { progress, setProgress, loading, error, toggleComplete } = useProgress(profile);

  const allTopics = useMemo(() => {
    return CATEGORIES.flatMap((c) =>
      c.topics.map((t) => ({ ...t, categoryId: c.id, categoryName: c.name }))
    );
  }, []);

  const [activeTopicId, setActiveTopicId] = useState(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.replace(/^#/, "").trim();
      if (hash) {
        const found = allTopics.find((t) => t.id === hash);
        if (found) return found.id;
      }
      try {
        const saved = localStorage.getItem("io:lastTopic");
        if (saved) {
          const found = allTopics.find((t) => t.id === saved);
          if (found) return found.id;
        }
      } catch (e) {}
    }
    return CATEGORIES[0]?.topics[0]?.id || "";
  });

  const [activeCategory, setActiveCategory] = useState(() => {
    const found = allTopics.find((t) => t.id === activeTopicId);
    return found ? found.categoryId : CATEGORIES[0]?.id || "";
  });

  const [activeTab, setActiveTab] = useState("overview");
  const [query, setQuery] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isPrefsOpen, setIsPrefsOpen] = useState(false);
  const { prefs, updatePrefs, resetPrefs } = usePreferences();
  const searchInputRef = useRef(null);

  // Sync activeTopicId with URL hash and localStorage
  useEffect(() => {
    if (!activeTopicId) return;
    const currentHash = window.location.hash.replace(/^#/, "");
    if (currentHash !== activeTopicId) {
      window.location.hash = activeTopicId;
    }
    try {
      localStorage.setItem("io:lastTopic", activeTopicId);
    } catch (e) {}
  }, [activeTopicId]);

  // Listen to browser back/forward buttons
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#/, "").trim();
      if (hash && hash !== activeTopicId) {
        const match = allTopics.find((t) => t.id === hash);
        if (match) {
          setActiveTopicId(match.id);
          setActiveCategory(match.categoryId);
        }
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [activeTopicId, allTopics]);

  const activeTopicMeta = useMemo(() => {
    for (const cat of CATEGORIES) {
      const t = cat.topics.find((t) => t.id === activeTopicId);
      if (t) return { ...t, categoryId: cat.id, categoryName: cat.name };
    }
    return null;
  }, [activeTopicId]);

  const [activeTopic, setActiveTopic] = useState(null);

  useEffect(() => {
    if (!activeTopicMeta) {
      setActiveTopic(null);
      return;
    }

    if (typeof activeTopicMeta.content === "function") {
      let cancelled = false;
      setActiveTopic({ ...activeTopicMeta, content: null });
      activeTopicMeta.content().then((res) => {
        if (!cancelled) {
          setActiveTopic({ ...activeTopicMeta, content: res });
        }
      });
      return () => { cancelled = true; };
    } else {
      setActiveTopic(activeTopicMeta);
    }
  }, [activeTopicMeta]);

  function goToTopic(topicId) {
    const found = allTopics.find((t) => t.id === topicId);
    if (found) {
      setActiveTopicId(found.id);
      setActiveCategory(found.categoryId);
      setActiveTab("overview");
      setIsSidebarOpen(false);
    }
  }

  // Adjacent topic calculation
  const currentTopicIndex = useMemo(() => {
    return allTopics.findIndex((t) => t.id === activeTopicId);
  }, [allTopics, activeTopicId]);

  const prevTopic = currentTopicIndex > 0 ? allTopics[currentTopicIndex - 1] : null;
  const nextTopic = currentTopicIndex >= 0 && currentTopicIndex < allTopics.length - 1 ? allTopics[currentTopicIndex + 1] : null;

  // Keyboard navigation shortcuts
  useEffect(() => {
    const onKeyDown = (e) => {
      const isEditing = ["INPUT", "TEXTAREA"].includes(e.target?.tagName) || e.target?.isContentEditable;

      if (e.key === "/" && !isEditing) {
        e.preventDefault();
        searchInputRef.current?.focus();
        return;
      }

      if (isEditing) return;

      if (e.key === "[" || (e.altKey && e.key === "ArrowLeft")) {
        if (prevTopic) {
          e.preventDefault();
          goToTopic(prevTopic.id);
        }
      } else if (e.key === "]" || (e.altKey && e.key === "ArrowRight")) {
        if (nextTopic) {
          e.preventDefault();
          goToTopic(nextTopic.id);
        }
      } else if (e.key >= "1" && e.key <= "7") {
        const tabMap = ["overview", "plain", "deepdive", "qa", "blueprint", "code", "mcq"];
        const targetTab = tabMap[parseInt(e.key, 10) - 1];
        if (targetTab) {
          e.preventDefault();
          setActiveTab(targetTab);
        }
      } else if (e.key.toLowerCase() === "c" && activeTopicId) {
        e.preventDefault();
        toggleComplete(activeTopicId);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [prevTopic, nextTopic, activeTopicId, toggleComplete]);

  // Filtering by search
  const filteredCategories = useMemo(() => {
    if (!query.trim()) return CATEGORIES;
    const q = query.toLowerCase().trim();
    return CATEGORIES.map((c) => ({
      ...c,
      topics: c.topics.filter(
        (t) => t.title.toLowerCase().includes(q) || c.name.toLowerCase().includes(q)
      ),
    })).filter((c) => c.topics.length > 0);
  }, [query]);

  const allTopicIds = useMemo(() => new Set(CATEGORIES.flatMap((c) => c.topics.map((t) => t.id))), []);
  const completedCount = Object.keys(progress).filter((id) => allTopicIds.has(id) && progress[id]).length;
  const overallPct = TOTAL_TOPICS 
    ? completedCount === 0 ? 0 : Math.max(1, Math.round((completedCount / TOTAL_TOPICS) * 100)) 
    : 0;

  function categoryProgress(cat) {
    const done = cat.topics.filter((t) => progress[t.id]).length;
    return {
      done,
      total: cat.topics.length,
      pct: done === 0 ? 0 : Math.max(1, Math.round((done / cat.topics.length) * 100)),
    };
  }

  function handleLogin() {
    const name = nameInput.trim();
    if (!name) return;
    localStorage.setItem(PROFILE_KEY, name);
    setProfile(name);
  }

  function switchProfile() {
    localStorage.removeItem(PROFILE_KEY);
    setProfile(null);
    setNameInput("");
    setProgress({});
  }

  if (!profile) {
    return (
      <Login
        nameInput={nameInput}
        setNameInput={setNameInput}
        handleLogin={handleLogin}
      />
    );
  }

  return (
    <div className="io-root">
      <Sidebar
        query={query}
        setQuery={setQuery}
        filteredCategories={filteredCategories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        categoryProgress={categoryProgress}
        activeTopicId={activeTopicId}
        setActiveTopicId={(id) => {
          goToTopic(id);
        }}
        setActiveTab={setActiveTab}
        progress={progress}
        profile={profile}
        overallPct={overallPct}
        switchProfile={switchProfile}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        onOpenPrefs={() => setIsPrefsOpen(true)}
        searchInputRef={searchInputRef}
      />

      <main className="io-main">
        <Topbar
          overallPct={overallPct}
          completedCount={completedCount}
          TOTAL_TOPICS={TOTAL_TOPICS}
          loadingProfile={loading}
          storageError={error}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          activeTopic={activeTopic}
        />

        <TopicContent
          activeTopic={activeTopic}
          progress={progress}
          toggleComplete={toggleComplete}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          prevTopic={prevTopic}
          nextTopic={nextTopic}
          goToTopic={goToTopic}
        />
      </main>

      <PreferencesModal
        isOpen={isPrefsOpen}
        onClose={() => setIsPrefsOpen(false)}
        prefs={prefs}
        updatePrefs={updatePrefs}
        resetPrefs={resetPrefs}
      />
    </div>
  );
}
