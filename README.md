# 🎥 RecallAI — Search Videos Like Text

## 🚀 What is RecallAI?

RecallAI or ( Video Query AI ) is a privacy-first, local application that lets you search through your video collection using natural language. Instead of scrubbing through timelines manually, just type what you’re looking for, and the app instantly finds the matching scenes.

- 🔒 100% local – no cloud uploads, your data stays on your machine
- ⚡ Fast semantic search powered by vector embeddings
- 🖼️ Search results include timestamps + thumbnails for quick navigation
- 📡 Live progress tracking with resumable updates

---

## ✨ Key Features

- **Natural Language Search** – Find scenes by asking in plain English (e.g., _“man walking across bridge”_)
- **Video Upload** – Drop in a video file to start processing
- **Scene Indexing** – Frames are extracted, captioned, and embedded for search
- **Realtime Processing Updates** – Track progress as videos are analyzed
- **Offline & Private** – No third-party servers involved

---

## 🛠 How It Works

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1752862278277/faa90937-b973-4ebd-9da4-1961d47714c4.png)

### 🔄 Video Processing Pipeline

1. **Upload** – Store video file + metadata locally
2. **Queueing** – Job added to background worker via Redis
3. **Frame Extraction** – Frames pulled using `ffmpeg`
4. **Captioning** – AI model (LLaVA via Ollama) describes frames
5. **Embedding** – Descriptions converted into vector embeddings
6. **Storage** – Embeddings + metadata saved in ChromaDB
7. **Updates** – Live progress sent frontend via WebSockets

### 🔍 Search Flow

1. User enters a query
2. Query is embedded using the same model
3. ChromaDB performs vector similarity search
4. Results are returned with matching timestamps and thumbnail previews

---

## 🏗️ Tech Stack

- **Frontend**: React + Javascript (Vite, React Router)
- **Backend**: FastAPI (REST + WebSockets)
- **Job Queue**: Redis + RQ
- **Database**: ChromaDB (vector storage)
- **Video Processing**: ffmpeg
- **AI Models**: LLaVA (for captions) + Sentence Transformers (for embeddings)

---

## 📂 Project Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/video-query-ai.git
cd video-query-ai
```

### 2. Backend setup

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

### 3. Frontend setup

```bash
cd frontend
npm install
npm run dev
```

### 4. Redis & Workers

```bash
redis-server
python -m rq worker -u redis://localhost:6379/0 video-jobs
```

## ✅ Current Status

- Currently in beta — the core upload, indexing, and search flows are fully functional.
- Next up: improving UX, optimizing performance, and adding advanced filtering options.

## 💡 Vision

Video Query AI ( RecallAI ) aims to make your personal video archive searchable, private, and intelligent — just like text.
It’s an experiment in bridging human language and visual memory, locally and securely.
