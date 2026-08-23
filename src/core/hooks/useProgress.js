import { useState, useEffect } from "react";

export function useProgress(profile) {
  const [progress, setProgress] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!profile) {
      setProgress({});
      return;
    }

    let cancelled = false;
    setLoading(true);
    setError(false);

    (async () => {
      try {
        const key = `progress:${profile.toLowerCase()}`;
        let raw = null;
        
        if (window.storage && window.storage.get) {
          const res = await window.storage.get(key, true);
          if (res && res.value) raw = res.value;
        } else {
          raw = localStorage.getItem(key);
        }

        if (!cancelled && raw) {
          setProgress(JSON.parse(raw));
        }
      } catch (err) {
        if (!cancelled) setError(true);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [profile]);

  async function toggleComplete(topicId) {
    const next = { ...progress, [topicId]: !progress[topicId] };
    setProgress(next);
    
    try {
      const key = `progress:${profile.toLowerCase()}`;
      const val = JSON.stringify(next);
      if (window.storage && window.storage.set) {
        await window.storage.set(key, val, true);
      } else {
        localStorage.setItem(key, val);
      }
    } catch (err) {
      setError(true);
    }
  }

  return { progress, setProgress, loading, error, toggleComplete };
}
