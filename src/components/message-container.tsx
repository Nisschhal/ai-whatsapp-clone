'use client"'
import { messages } from "@/dummy-data/db"
import ChatBubble from "./chat-bubble"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

const MessageContainer = () => {
  const { theme } = useTheme()
  console.log("Current theme:", theme)
  return (
    <div
      className={cn(
        "relative p-3 flex-1 overflow-auto h-full",
        theme === "light" ? "bg-chat-tile-light" : "bg-chat-tile-dark"
      )}
    >
      <div className="mx-12 flex flex-col gap-3 h-full">
        {messages?.map((msg, idx) => (
          <div key={msg._id}>
            <ChatBubble />
          </div>
        ))}
      </div>
    </div>
  )
}
export default MessageContainer
