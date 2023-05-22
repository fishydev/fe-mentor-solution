import "./globals.css"
import { Inter } from "next/font/google"
import Navbar from "@/components/navbar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>
          <div className="min-w-screen min-h-screen pt-20 pb-12 flex flex-col md:pt-52">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
