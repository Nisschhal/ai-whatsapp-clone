"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Video, X } from "lucide-react"
import GroupMembersDialog from "./group-members-dialog"
import MessageInput from "./message-input"
import ChatPlaceHolder from "./chat-placeholder"
import MessageContainer from "./message-container"
import { conversations } from "@/dummy-data/db"

const RightPanel = () => {
  const selectedConversation = conversations[0] // Assuming the first conversation is selected for demonstration
  if (!selectedConversation) return <ChatPlaceHolder />

  const isGroup = "yes"
  const conversationName = "John Doe"

  return (
    <div className="w-3/4 flex flex-col">
      <div className="w-full sticky top-0 z-50">
        {/* Header */}
        <div className="flex justify-between bg-gray-primary p-3">
          <div className="flex gap-3 items-center">
            <Avatar>
              <AvatarImage src={"/placeholder.png"} className="object-cover" />
              <AvatarFallback>
                <div className="animate-pulse bg-gray-tertiary w-full h-full rounded-full" />
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <p>{conversationName}</p>
              {isGroup && <GroupMembersDialog />}
            </div>
          </div>

          <div className="flex items-center gap-7 mr-5">
            <a href="/video-call" target="_blank">
              <Video size={23} />
            </a>
            <X size={16} className="cursor-pointer" />
          </div>
        </div>
      </div>
      {/* CHAT MESSAGES */}
      <MessageContainer />

      {/* INPUT */}
      <MessageInput />
    </div>
  )
}
export default RightPanel
