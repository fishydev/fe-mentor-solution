import Button from "./Button"

type DeleteCommentModalProps = {
  onCancel: () => void
  onDelete: () => void
}

const DeleteCommentModal = (props: DeleteCommentModalProps) => {
  const { onCancel, onDelete } = props
  return (
    <div className="rounded-lg bg-white max-w-sm p-8">
      <h1 className="text-3xl text-dark-blue mb-4">Delete Comment</h1>
      <p className="text-grayish-blue mb-4">
        Are you sure you want to delete this comment? This will remove the
        comment and can't be undone
      </p>
      <div className="flex justify-between grow gap-4">
        <Button
          className="bg-grayish-blue text-white uppercase p-4 rounded-lg flex-1"
          onClick={onCancel}
        >
          No, Cancel
        </Button>
        <Button
          className="bg-soft-red text-white uppercase p-4 rounded-lg flex-1"
          onClick={onDelete}
        >
          yes, delete
        </Button>
      </div>
    </div>
  )
}

export default DeleteCommentModal
