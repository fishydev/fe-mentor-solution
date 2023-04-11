import IconPlus from "../assets/icon-plus.svg"
import IconMinus from "../assets/icon-minus.svg"
import { CommentContext } from "../context/CommentContext"
import { useContext, useState } from "react"
import { CommentScore } from "../types"
import clsx from "clsx"

type VoteButtonProps = {
  className?: string
}

const VoteButton = (props: VoteButtonProps) => {
  const { className } = props
  const [vote, setVote] = useState<CommentScore>(0)

  const comment = useContext(CommentContext)

  return (
    <div
      className={clsx(
        "md:flex-col items-center bg-slate-100 h-fit rounded-lg md:min-w-[36px] md:min-h-[80px]",
        className
      )}
    >
      <button className="h-full" onClick={() => setVote(1)}>
        <img src={IconPlus} alt="upvote" />
      </button>
      <div className="flex flex-grow justify-center items-center">
        <span className="font-bold text-slate-500 text-center">
          {comment!.score + vote}
        </span>
      </div>
      <button className="h-full" onClick={() => setVote(-1)}>
        <img src={IconMinus} alt="downvote" />
      </button>
    </div>
  )
}

export default VoteButton
