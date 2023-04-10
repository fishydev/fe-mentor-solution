import { useContext } from "react"
import { CommentContext } from "../context/CommentContext"
import { UserContext } from "../context/UserContext"
import Button from "./Button"
import UserTag from "./UserTag"

import DeleteIcon from "../assets/icon-delete.svg"
import EditIcon from "../assets/icon-edit.svg"
import ReplyIcon from "../assets/icon-reply.svg"

type CommentHeadProps = {
  onClickDelete: () => void
  onClickReply: () => void
  onClickEdit: () => void
}

const CommentHead = (props: CommentHeadProps) => {
  const { onClickDelete, onClickReply, onClickEdit } = props
  const currentUser = useContext(UserContext)
  const comment = useContext(CommentContext)

  const isByCurrentUser = () => {
    return currentUser?.username === comment?.user.username
  }

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        <img
          src={`${process.env.PUBLIC_URL}/${comment?.user.image.png}`}
          alt={comment?.user.username}
          className="h-10"
        />
        <span className="text-slate-700 font-medium">
          {comment?.user.username}
        </span>
        {isByCurrentUser() && <UserTag />}
        <span className="text-slate-700">{comment?.createdAt}</span>
      </div>
      <div className="flex gap-8">
        {isByCurrentUser() && (
          <Button
            icon={DeleteIcon}
            className="text-soft-red hover:text-pale-red transition-colors"
            onClick={onClickDelete}
          >
            Delete
          </Button>
        )}
        {isByCurrentUser() ? (
          <Button
            icon={EditIcon}
            className="text-moderate-blue hover:text-light-grayish-blue transition-colors"
            onClick={onClickEdit}
          >
            Edit
          </Button>
        ) : (
          <Button
            icon={ReplyIcon}
            className="text-moderate-blue hover:text-light-grayish-blue transition-colors"
            onClick={onClickReply}
          >
            Reply
          </Button>
        )}
      </div>
    </div>
  )
}

export default CommentHead
