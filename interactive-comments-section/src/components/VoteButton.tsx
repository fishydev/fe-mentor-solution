import IconPlus from "../assets/icon-plus.svg"
import IconMinus from "../assets/icon-minus.svg"
import { CommentContext } from "../context/CommentContext"
import { useContext } from "react"

const VoteButton = () => {
  const comment = useContext(CommentContext)
  return (
    <div className="flex flex-col items-center bg-slate-100 h-fit rounded-lg min-w-[36px] min-h-[80px]">
      <button className="flex-grow">
        <img src={IconPlus} alt="upvote" />
      </button>
      <span className="font-bold text-slate-500">{comment?.score}</span>
      <button className="flex-grow">
        <img src={IconMinus} alt="downvote" />
      </button>
    </div>
  )
}

export default VoteButton
