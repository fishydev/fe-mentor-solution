import { useContext } from "react"
import { UserContext } from "../context/UserContext"

const CommentInput = () => {
  const user = useContext(UserContext)
  return (
    <div className="flex gap-4 w-full p-2">
      <img
        className="h-10"
        src={require("../assets/avatars/image-amyrobson.png")}
        alt=""
      />
      <textarea className="min-h-[5em] flex-grow rounded-lg align-text-top border-2 resize-none p-2" />
      <button className="h-fit py-2 px-6 text-white bg-moderate-blue rounded-lg uppercase font-bold">
        send
      </button>
    </div>
  )
}

export default CommentInput
