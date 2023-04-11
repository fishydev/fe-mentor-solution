import React, { useState } from "react"
import "./App.css"
import dummy from "./data/data.json"
import CommentThread from "./components/CommentThread"
import { UserContext } from "./context/UserContext"
import CommentInput from "./components/CommentInput"
import { CommentType } from "./types"
import { useCommentStore } from "./store/commentStore"

function App() {
  const [user, setUser] = useState(dummy.currentUser)

  const comments = useCommentStore((state) => state.comments)

  const newComment = useCommentStore((state) => state.new)

  const handleSubmit = (text: string, type: CommentType) => {
    if (type === "new") {
      newComment(user, text)
    }
  }

  return (
    <UserContext.Provider value={user}>
      <main className="flex justify-center bg-slate-100 min-h-screen">
        <div className="flex flex-col md:max-w-3xl gap-4 p-4 max-w-full md:p-12">
          {comments.map((thread) => {
            return <CommentThread {...thread} key={thread.id} />
          })}
          <CommentInput type="new" onSubmit={handleSubmit} />
        </div>
      </main>
    </UserContext.Provider>
  )
}

export default App
