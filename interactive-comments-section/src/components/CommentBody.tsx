import { useContext } from "react"
import { CommentContext } from "../context/CommentContext"

const CommentBody = () => {
  const comment = useContext(CommentContext)
  return (
    <div>
      <p className="text-grayish-blue">
        {comment?.replyingTo && (
          <span className="text-moderate-blue font-medium">
            @{comment.replyingTo}{" "}
          </span>
        )}
        {comment?.content}
      </p>
    </div>
  )
}

export default CommentBody
