import { createContext } from "react"
import { Comment } from "../types"

export const CommentContext = createContext<Comment | null>(null)
