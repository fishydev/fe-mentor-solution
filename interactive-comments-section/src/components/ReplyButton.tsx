import IconReply from "../assets/icon-reply.svg"

const ReplyButton = () => {
  return (
    <button className="flex min-w-fit gap-2">
      <img className="object-contain" src={IconReply} alt="reply" />
      <span className="font-bold text-slate-500">Reply</span>
    </button>
  )
}

export default ReplyButton
