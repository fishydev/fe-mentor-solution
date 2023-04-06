import { useContext } from "react"
import { CommentContext } from "../context/CommentContext"

const CommentBody = () => {
  const comment = useContext(CommentContext)
  return (
    <div>
      <p className="text-slate-700 font-light">
        {comment?.replyingTo && (
          <span className="font-medium">@{comment.replyingTo} </span>
        )}
        {comment?.content}
      </p>
    </div>
  )
}

export default CommentBody
