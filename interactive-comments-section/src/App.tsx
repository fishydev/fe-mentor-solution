import React, { useState } from "react"
import CommentBox from "./components/CommentBox"
import "./App.css"
import dummy from "./data/data.json"
import CommentThread from "./components/CommentThread"
import { UserContext } from "./context/UserContext"
import CommentInput from "./components/CommentInput"

function App() {
  const [threads, setThreads] = useState(dummy.comments)
  const [user, setUser] = useState(dummy.currentUser)

  return (
    <UserContext.Provider value={user}>
      <main className="flex justify-center bg-slate-100 min-h-screen">
        <div className="flex flex-col max-w-2xl gap-4 my-12">
          {threads.map((thread) => {
            return <CommentThread {...thread} key={thread.id} />
          })}
          <CommentInput />
        </div>
      </main>
    </UserContext.Provider>
  )
}

export default App
