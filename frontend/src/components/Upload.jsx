import { useState } from "react";

const API = import.meta.env.VITE_API_URL || "http://localhost:8000";

export default function Upload({ onUpload }) {
  const [file, setFile] = useState(null);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState("");

  const handleUpload = async () => {
    if (!file) return;
    setBusy(true);
    setMsg("Uploading…");
    const fd = new FormData();
    fd.append("video", file);
    const res = await fetch(`${API}/upload`, { method: "POST", body: fd });
    if (!res.ok) {
      setMsg("Upload failed");
      setBusy(false);
      return;
    }
    const data = await res.json();
    setMsg(`Video enqueued (id=${data.id})`);
    onUpload(data.id);
    setBusy(false);
  };

  return (
    <section style={{ marginBottom: 24 }}>
      <h3>1) Upload a video</h3>
      <input
        type="file"
        accept="video/*"
        onChange={(e) => setFile(e.target.files?.[0] ?? null)}
      />
      <button
        onClick={handleUpload}
        disabled={!file || busy}
        style={{ marginLeft: 8 }}
      >
        {busy ? "Please wait…" : "Upload & Index"}
      </button>
      <div style={{ marginTop: 8 }}>{msg}</div>
    </section>
  );
}
