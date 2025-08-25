import { useState } from "react";
import Upload from "./components/Upload.jsx";
import Search from "./components/Search.jsx";

export default function App() {
  const [videoId, setVideoId] = useState(null);

  return (
    <div
      style={{
        maxWidth: 900,
        margin: "2rem auto",
        fontFamily: "Inter, system-ui",
      }}
    >
      <h1>🎥 Video Query AI (JS frontend)</h1>
      <Upload onUpload={setVideoId} />
      {videoId && <Search videoId={videoId} />}
    </div>
  );
}

// 3
