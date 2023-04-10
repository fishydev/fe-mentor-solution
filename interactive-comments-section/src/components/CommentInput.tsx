import { useContext, useState } from "react"
import { UserContext } from "../context/UserContext"
import Button from "./Button"
import clsx from "clsx"
import { CommentType } from "../types"

type CommentInputProps = {
  type: CommentType
  className?: string
  onSubmit: (text: string, action: CommentType) => void
}

const CommentInput = (props: CommentInputProps) => {
  const { type, className, onSubmit } = props
  const [text, setText] = useState("")

  const user = useContext(UserContext)

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value)
  }

  const handleSubmit = () => {
    onSubmit(text, type)
    setText("")
  }

  return (
    <div
      className={clsx(
        "flex gap-4 w-full p-2 bg-white rounded-xl p-4",
        className
      )}
    >
      {type !== "edit" && (
        <img
          className="h-10"
          src={`${process.env.PUBLIC_URL}/${user?.image.png}`}
          alt=""
        />
      )}
      <textarea
        className="min-h-[5em] flex-grow rounded-lg align-text-top border-2 resize-none p-2"
        value={text}
        onChange={handleTextChange}
      />
      <Button
        className="bg-moderate-blue uppercase py-2 px-6 text-white rounded-lg font-medium h-fit hover:bg-light-grayish-blue transition-colors"
        onClick={handleSubmit}
      >
        {type}
      </Button>
    </div>
  )
}

export default CommentInput
