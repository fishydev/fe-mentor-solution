import React, { useEffect, useState } from "react"
import "./App.css"
import dummy from "./data/data.json"
import CommentThread from "./components/CommentThread"
import { UserContext } from "./context/UserContext"
import CommentInput from "./components/CommentInput"
import { Comment, CommentType } from "./types"

function App() {
  const [threads, setThreads] = useState(dummy.comments)
  const [user, setUser] = useState(dummy.currentUser)

  const handleSubmit = (text: string, type: CommentType) => {
    if (type === "new") {
      setThreads((oldArr) => [
        ...oldArr,
        {
          id: Math.random(),
          content: text,
          createdAt: "just now",
          replies: [],
          score: 0,
          user: user,
        },
      ])
    }
  }

  return (
    <UserContext.Provider value={user}>
      <main className="flex justify-center bg-slate-100 min-h-screen">
        <div className="flex flex-col max-w-2xl gap-4 my-12">
          {threads.map((thread) => {
            return <CommentThread {...thread} key={thread.id} />
          })}
          <CommentInput type="new" onSubmit={handleSubmit} />
        </div>
      </main>
    </UserContext.Provider>
  )
}

export default App
