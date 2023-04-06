import { Comment, CommentType } from "../types"
import VoteButton from "./VoteButton"
import CommentHead from "./CommentHead"
import CommentBody from "./CommentBody"
import { useContext, useState } from "react"
import { CommentContext } from "../context/CommentContext"
import CommentInput from "./CommentInput"

type CommentBoxProps = Comment

const CommentBox = (props: CommentBoxProps) => {
  const [action, setAction] = useState<CommentType | null>(null)
  return (
    <CommentContext.Provider value={props}>
      <div className="CommentBox">
        <div className="flex p-4 bg-white gap-4 rounded-xl">
          <VoteButton />
          <div className="flex flex-col gap-2 flex-grow">
            <CommentHead />
            <CommentBody />
          </div>
        </div>
        {/* <CommentInput className="mt-2" type="reply" /> */}
      </div>
    </CommentContext.Provider>
  )
}

export default CommentBox
