import { useState } from "react";

const API = import.meta.env.VITE_API_URL || "http://localhost:8000/api";

export default function Search({ videoId }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [busy, setBusy] = useState(false);

  const handleSearch = async () => {
    if (!query) return;
    setBusy(true);
    try {
      const res = await fetch(`${API}/search`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ videoId, query }),
      });
      const data = await res.json();
      setResults(data.items || []);
    } finally {
      setBusy(false);
    }
  };

  return (
    <section>
      <h3>2) Search your video</h3>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="e.g., person wearing red shirt"
        style={{ width: "60%" }}
      />
      <button
        onClick={handleSearch}
        disabled={!videoId || busy}
        style={{ marginLeft: 8 }}
      >
        {busy ? "Searching…" : "Search"}
      </button>

      <div style={{ marginTop: 16 }}>
        {results.map((r) => (
          <div
            key={r.id}
            style={{ border: "1px solid #ccc", padding: 8, marginBottom: 8 }}
          >
            <div>
              <b>t=</b>
              {r.t}s
            </div>
            <div>
              <b>caption:</b> {r.caption}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
