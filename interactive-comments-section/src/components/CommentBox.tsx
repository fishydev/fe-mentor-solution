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
import Overlay from "./Overlay"
import DeleteCommentModal from "./DeleteCommentModal"
import CommentFoot from "./CommentFoot"
import { Transition } from "@headlessui/react"

type CommentBoxProps = Comment

const CommentBox = (props: CommentBoxProps) => {
  const [inputType, setInputType] = useState<CommentType>()
  const [showDelete, setShowDelete] = useState(false)

  const currentUser = useContext(UserContext)
  const parent = useContext(ParentContext)

  const deleteComment = useCommentStore((state) => state.delete)
  const reply = useCommentStore((state) => state.reply)
  const edit = useCommentStore((state) => state.edit)

  const handleClickDelete = () => {
    setShowDelete(true)
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
        reply(
          currentUser!,
          text,
          props.user.username,
          parent?.id ? parent.id : props.id
        )
        setInputType(undefined)
        break
      case "edit":
        edit(props.id, text, parent?.id)
        setInputType(undefined)
        break
    }
  }

  const handleSubmitDelete = () => {
    deleteComment(props.id, parent?.id)
  }

  const inputPlaceholder = inputType === "edit" ? props.content : ""

  return (
    <CommentContext.Provider value={props}>
      <Transition
        appear={true}
        show={true}
        enter="transition-all ease-in-out duration-500 delay-[200ms]"
        enterFrom="opacity-0 translate-y-6"
        enterTo="opacity-100 translate-y-0"
        leave="transition-all ease-in-out duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="CommentBox">
          <div className="flex p-4 bg-white gap-4 rounded-xl">
            <VoteButton className="hidden md:flex py-2" />
            <div className="flex flex-col gap-2 flex-grow">
              <CommentHead
                onClickDelete={handleClickDelete}
                onClickReply={handleClickReply}
                onClickEdit={handleClickEdit}
              />
              <CommentBody />
              <CommentFoot
                onClickDelete={handleClickDelete}
                onClickReply={handleClickReply}
                onClickEdit={handleClickEdit}
              />
            </div>
          </div>
          {inputType && (
            <CommentInput
              className="mt-2"
              type={inputType}
              onSubmit={handleSubmit}
              placeholder={inputPlaceholder}
            />
          )}
        </div>
      </Transition>
      {showDelete && (
        <Overlay>
          <DeleteCommentModal
            onDelete={handleSubmitDelete}
            onCancel={() => setShowDelete(false)}
          />
        </Overlay>
      )}
    </CommentContext.Provider>
  )
}

export default CommentBox
