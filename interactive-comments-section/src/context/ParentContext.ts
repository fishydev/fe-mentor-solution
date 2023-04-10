import { createContext } from "react"
import { Comment } from "../types"

export const ParentContext = createContext<Comment | null>(null)
