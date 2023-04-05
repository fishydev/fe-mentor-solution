import { Comment } from "../types"
import VoteButton from "./VoteButton"
import CommentHead from "./CommentHead"
import CommentBody from "./CommentBody"
import { useContext } from "react"
import { CommentContext } from "../context/CommentContext"

type CommentBoxProps = Comment

const CommentBox = (props: CommentBoxProps) => {
  return (
    <CommentContext.Provider value={props}>
      <div className="flex p-4 bg-white gap-4 rounded-xl">
        <VoteButton />
        <div className="flex flex-col gap-2">
          <CommentHead />
          <CommentBody />
        </div>
      </div>
    </CommentContext.Provider>
  )
}

export default CommentBox
