import { useContext } from "react"
import { CommentContext } from "../context/CommentContext"
import { UserContext } from "../context/UserContext"
import Button from "./Button"
import UserTag from "./UserTag"

import DeleteIcon from "../assets/icon-delete.svg"
import EditIcon from "../assets/icon-edit.svg"
import ReplyIcon from "../assets/icon-reply.svg"
import VoteButton from "./VoteButton"

type CommentFootProps = {
  onClickDelete: () => void
  onClickReply: () => void
  onClickEdit: () => void
}

const CommentFoot = (props: CommentFootProps) => {
  const { onClickDelete, onClickReply, onClickEdit } = props

  const currentUser = useContext(UserContext)
  const comment = useContext(CommentContext)

  const isByCurrentUser = () => {
    return currentUser?.username === comment?.user.username
  }

  return (
    <div className="flex justify-between items-center md:hidden mt-4">
      <VoteButton className="flex min-w-[80px]" />
      <div className="flex gap-8">
        {isByCurrentUser() && (
          <Button
            icon={DeleteIcon}
            className="text-soft-red hover:text-pale-red transition-colors hover:fill-pale-red"
            onClick={onClickDelete}
          >
            Delete
          </Button>
        )}
        {isByCurrentUser() ? (
          <Button
            icon={EditIcon}
            className="text-moderate-blue hover:text-light-grayish-blue transition-colors hover:fill-light-grayish-blue"
            onClick={onClickEdit}
          >
            Edit
          </Button>
        ) : (
          <Button
            icon={ReplyIcon}
            className="text-moderate-blue hover:text-light-grayish-blue transition-colors hover:fill-light-grayish-blue"
            onClick={onClickReply}
          >
            Reply
          </Button>
        )}
      </div>
    </div>
  )
}

export default CommentFoot
