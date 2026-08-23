import { useState, useMemo, useEffect } from "react";
import { useProgress } from "./core/hooks/useProgress";
import { Login } from "./features/auth/Login";
import { Sidebar } from "./features/layout/Sidebar";
import { Topbar } from "./features/layout/Topbar";
import { TopicContent } from "./features/topics/TopicContent";
import { CATEGORIES } from "./data/categories";

const TOTAL_TOPICS = CATEGORIES.reduce((sum, c) => sum + c.topics.length, 0);

export default function App() {
  const [profile, setProfile] = useState(null);
  const [nameInput, setNameInput] = useState("");
  const { progress, setProgress, loading, error, toggleComplete } = useProgress(profile);

  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]?.id || "");
  const [activeTopicId, setActiveTopicId] = useState(
    CATEGORIES[0]?.topics[0]?.id || ""
  );
  const [activeTab, setActiveTab] = useState("overview");
  const [query, setQuery] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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

    if (typeof activeTopicMeta.content === 'function') {
      let cancelled = false;
      setActiveTopic({ ...activeTopicMeta, content: null }); // Show skeleton or keep old UI structure while loading
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

  const filteredCategories = useMemo(() => {
    if (!query.trim()) return CATEGORIES;
    const q = query.toLowerCase();
    return CATEGORIES.map((c) => ({
      ...c,
      topics: c.topics.filter(
        (t) => t.title.toLowerCase().includes(q) || c.name.toLowerCase().includes(q)
      ),
    })).filter((c) => c.topics.length > 0);
  }, [query]);

  const completedCount = Object.values(progress).filter(Boolean).length;
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
    setProfile(name);
  }

  function switchProfile() {
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
          setActiveTopicId(id);
          setIsSidebarOpen(false); // Close on selection on mobile
        }}
        setActiveTab={setActiveTab}
        progress={progress}
        profile={profile}
        overallPct={overallPct}
        switchProfile={switchProfile}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
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
        />
      </main>
    </div>
  );
}
