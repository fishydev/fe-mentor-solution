export type Comment = {
  id: number
  content: string
  createdAt: string
  score: number
  user: User
  replyingTo?: string
  replies?: Comment[]
}

export type User = {
  image: Image
  username: string
}

export type Image = {
  png: string
  webp: string
}

export type CommentType = "reply" | "update" | "new"

export type CommentData = {
  content: string
  id?: number
  replyingTo?: number
}
