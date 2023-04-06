import IconEdit from "../assets/icon-edit.svg"

const EditButton = () => {
  return (
    <button className="flex min-w-fit gap-2">
      <img className="object-contain" src={IconEdit} alt="reply" />
      <span className="font-medium text-grayish-blue">Edit</span>
    </button>
  )
}

export default EditButton
