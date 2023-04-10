import IconPlus from "../assets/icon-plus.svg"
import IconMinus from "../assets/icon-minus.svg"
import { CommentContext } from "../context/CommentContext"
import { useContext, useState } from "react"
import { CommentScore } from "../types"

const VoteButton = () => {
  const [vote, setVote] = useState<CommentScore>(0)

  const comment = useContext(CommentContext)

  return (
    <div className="flex flex-col items-center bg-slate-100 h-fit rounded-lg min-w-[36px] min-h-[80px]">
      <button className="flex-grow" onClick={() => setVote(1)}>
        <img src={IconPlus} alt="upvote" />
      </button>
      <span className="font-bold text-slate-500">{comment!.score + vote}</span>
      <button className="flex-grow" onClick={() => setVote(-1)}>
        <img src={IconMinus} alt="downvote" />
      </button>
    </div>
  )
}

export default VoteButton
