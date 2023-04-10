import { Comment, CommentType } from "../types"
import VoteButton from "./VoteButton"
import CommentHead from "./CommentHead"
import CommentBody from "./CommentBody"
import { useContext, useState } from "react"
import { CommentContext } from "../context/CommentContext"
import CommentInput from "./CommentInput"
import { useCommentStore } from "../store/commentStore"
import { UserContext } from "../context/UserContext"
import { ParentContext } from "../context/ParentContext"

type CommentBoxProps = Comment

const CommentBox = (props: CommentBoxProps) => {
  const [inputType, setInputType] = useState<CommentType>()

  const currentUser = useContext(UserContext)
  const parent = useContext(ParentContext)

  const deleteComment = useCommentStore((state) => state.delete)
  const reply = useCommentStore((state) => state.reply)
  const edit = useCommentStore((state) => state.edit)

  const handleClickDelete = () => {
    deleteComment(props.id, parent?.id)
  }

  const handleClickReply = () => {
    setInputType("reply")
  }

  const handleClickEdit = () => {
    setInputType("edit")
  }

  const handleSubmit = (text: string, action: CommentType) => {
    switch (action) {
      case "reply":
        reply(currentUser!, text, props.user.username, parent!.id)
        setInputType(undefined)
        break
      case "edit":
        edit(props.id, text, parent?.id)
        setInputType(undefined)
        break
    }
  }

  return (
    <CommentContext.Provider value={props}>
      <div className="CommentBox">
        <div className="flex p-4 bg-white gap-4 rounded-xl">
          <VoteButton />
          <div className="flex flex-col gap-2 flex-grow">
            <CommentHead
              onClickDelete={handleClickDelete}
              onClickReply={handleClickReply}
              onClickEdit={handleClickEdit}
            />
            <CommentBody />
          </div>
        </div>
        {inputType && (
          <CommentInput
            className="mt-2"
            type={inputType}
            onSubmit={handleSubmit}
          />
        )}
      </div>
    </CommentContext.Provider>
  )
}

export default CommentBox
