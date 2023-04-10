import { CommentContext } from "../context/CommentContext"
import { ParentContext } from "../context/ParentContext"
import { Comment } from "../types"
import CommentBox from "./CommentBox"

type CommentThreadProps = Comment

const CommentThread = (props: CommentThreadProps) => {
  return (
    <div>
      <CommentBox {...props} />
      {props.replies && props.replies.length > 0 && (
        <div className="ml-8 pl-8 flex flex-col gap-2 mt-4 border-l-4">
          <ParentContext.Provider value={props}>
            {props.replies.map((reply) => (
              <CommentBox {...reply} key={reply.id} />
            ))}
          </ParentContext.Provider>
        </div>
      )}
    </div>
  )
}

export default CommentThread
