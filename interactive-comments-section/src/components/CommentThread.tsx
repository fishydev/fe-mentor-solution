import { CommentContext } from "../context/CommentContext"
import { Comment } from "../types"
import CommentBox from "./CommentBox"

type CommentThreadProps = Comment

const CommentThread = (props: CommentThreadProps) => {
  return (
    <div>
      <CommentBox {...props} />
      {props.replies && props.replies.length > 0 && (
        <div className="ml-8 pl-8 flex flex-col gap-2 mt-4 border-l-4">
          {props.replies.map((reply) => (
            <CommentBox {...reply} key={reply.id} />
          ))}
        </div>
      )}
    </div>
  )
}

export default CommentThread
