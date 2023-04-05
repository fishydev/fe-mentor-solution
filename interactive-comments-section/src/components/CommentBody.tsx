import { useContext } from "react"
import { CommentContext } from "../context/CommentContext"

const CommentBody = () => {
  const comment = useContext(CommentContext)
  return (
    <div>
      <p className="text-slate-700 font-medium">
        {comment?.replyingTo && (
          <span className="font-bold">@{comment.replyingTo} </span>
        )}
        {comment?.content}
      </p>
    </div>
  )
}

export default CommentBody
