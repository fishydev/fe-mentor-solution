import { create } from "zustand"
import { Product } from "../types"

type CartItem = Product & { amount: number }

type CartStore = {
  content: CartItem[]
  addItem: (amount: number) => void
  removeItem: (amount: number) => void
  deleteItem: () => void
}

export const useCartStore = create<CartStore>((set, get) => ({
  content: [
    {
      id: 0,
      brand: "Sneaker Company",
      name: "Fall Limited Edition Sneakers",
      description:
        "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
      price: 125.0,
      discount: 50,
      ogprice: 250.0,
      amount: 0,
    },
  ],
  addItem: (amount: number) => {
    set((state) => ({
      content: [
        { ...state.content[0], amount: (state.content[0].amount += amount) },
      ],
    }))
  },
  removeItem: (amount: number) => {
    if (get().content[0].amount > amount) {
      set((state) => ({
        content: [
          { ...state.content[0], amount: (state.content[0].amount -= amount) },
        ],
      }))
    } else {
      set((state) => ({
        content: [{ ...state.content[0], amount: 0 }],
      }))
    }
  },
  deleteItem: () => {
    set((state) => ({
      content: [{ ...state.content[0], amount: 0 }],
    }))
  },
}))
