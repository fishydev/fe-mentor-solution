import { useContext } from "react"
import { CommentContext } from "../context/CommentContext"
import { UserContext } from "../context/UserContext"
import { Comment, User } from "../types"
import DeleteButton from "./DeleteButton"
import EditButton from "./EditButton"
import ReplyButton from "./ReplyButton"
import UserTag from "./UserTag"

const CommentHead = () => {
  const currentUser = useContext(UserContext)
  const comment = useContext(CommentContext)

  const isByCurrentUser = () => {
    return currentUser?.username === comment?.user.username
  }

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        <img
          src={require("../assets/avatars/image-amyrobson.png")}
          alt={comment?.user.username}
          className="h-10"
        />
        <span className="text-slate-700 font-bold">
          {comment?.user.username}
        </span>
        {isByCurrentUser() && <UserTag />}
        <span className="text-slate-700">{comment?.createdAt}</span>
      </div>
      <div className="flex gap-8">
        {isByCurrentUser() && <DeleteButton />}
        {isByCurrentUser() ? <EditButton /> : <ReplyButton />}
      </div>
    </div>
  )
}

export default CommentHead
