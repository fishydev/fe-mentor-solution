import IconDelete from "../assets/icon-delete.svg"

const DeleteButton = () => {
  return (
    <button className="flex min-w-fit gap-2">
      <img className="object-contain" src={IconDelete} alt="reply" />
      <span className="font-medium text-soft-red">Delete</span>
    </button>
  )
}

export default DeleteButton
