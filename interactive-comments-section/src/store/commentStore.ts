import { create } from "zustand"
import { Comment, User } from "../types"
import dummy from "../data/data.json"
interface CommentState {
  comments: Comment[]
  new: (user: User, content: string) => void
  reply: (
    user: User,
    content: string,
    replyingTo: string,
    parent?: number
  ) => void
  delete: (id: number, parent?: number) => void
  edit: (id: number, content: string, parent?: number) => void
  // vote: (id: number, score: -1 | 0 | 1) => void,
}

const generateId = () => {
  return Math.floor(Math.random() * (999999 - 5 - 1)) + 5
}

export const useCommentStore = create<CommentState>((set) => ({
  comments: dummy.comments,
  new: (user, content) =>
    set((state) => ({
      comments: [
        ...state.comments,
        {
          id: generateId(),
          content: content,
          user: user,
          createdAt: "just now",
          score: 0,
          replies: [],
        },
      ],
    })),
  delete: (id, parent) => {
    if (parent) {
      const parentIndex = useCommentStore
        .getState()
        .comments.findIndex((comment) => comment.id === parent)
      set((state) => {
        const comments = [...state.comments]
        comments[parentIndex] = {
          ...comments[parentIndex],
          replies: comments[parentIndex].replies?.filter(
            (comment) => comment.id !== id
          ),
        }
        return { comments }
      })
    } else {
      set((state) => ({
        comments: state.comments.filter((comment) => comment.id !== id),
      }))
    }
  },
  reply: (user, content, replyingTo, parent) => {
    const parentIndex = useCommentStore
      .getState()
      .comments.findIndex((comment) => comment.id === parent)
    set((state) => {
      const comments = [...state.comments]
      if (!comments[parentIndex].replies) {
        comments[parentIndex].replies = []
      }
      comments[parentIndex].replies?.push({
        id: generateId(),
        content: content,
        replyingTo: replyingTo,
        createdAt: "just now",
        score: 0,
        user: user,
      })

      return { comments }
    })
  },
  edit: (id, content, parent) => {
    if (parent) {
      const parentIndex = useCommentStore
        .getState()
        .comments.findIndex((comment) => comment.id === parent)
      set((state) => {
        const comments = [...state.comments]
        const toEditIndex = comments[parentIndex].replies!.findIndex(
          (comment) => comment.id === id
        )

        comments[parentIndex].replies![toEditIndex] = {
          ...comments[parentIndex].replies![toEditIndex],
          content: content,
        }

        return { comments }
      })
    } else {
      set((state) => {
        const comments = [...state.comments]
        const toEditIndex = comments.findIndex((comment) => comment.id === id)
        comments[toEditIndex] = { ...comments[toEditIndex], content: content }

        return { comments }
      })
    }
  },
}))
