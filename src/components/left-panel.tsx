"use client"
import React from "react"
import ThemeSwitch from "./theme-switch"
import {
  ListFilter,
  LogOut,
  MessageSquareDiff,
  Search,
  User,
} from "lucide-react"
import { Input } from "./ui/input"
import { conversations } from "@/dummy-data/db"
import Conversation from "./conversation"
import { UserButton } from "@clerk/clerk-react"

const LeftPanel = () => {
  return (
    <div className="w-1/4 border-gray-600 border-r">
      <div className="sticky top-0 bg-left-panel z-10">
        {/* Header */}
        <div className="flex justify-between bg-gray-primary p-3 items-center">
          {/* <User size={24} /> */}
          <UserButton />
          <div className="flex items-center gap-3">
            {/* <UserListDialog /> */}
            <MessageSquareDiff size={20} />{" "}
            {/* TODO: This line will be replaced with <UserListDialog /> */}
            <ThemeSwitch />
            <LogOut size={20} className="cursor-pointer" />
          </div>
        </div>
        {/* Search Bar Container */}
        <div className="p-3 items-center flex">
          {/* Search Bar */}
          <div className="relative h-10 mx-3 flex-1">
            {/* Search Icon */}
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 z-10 "
              size={18}
            />
            {/* Input */}
            <Input
              type="text"
              placeholder="Search or start a new chat"
              className="pl-10 py-2 text-sm w-full rounded shadow-sm bg-gray-primary focus-visible:ring-transparent"
            />
          </div>
          {/* List Filter Button */}
          <ListFilter className="cursor-pointer" />
        </div>
      </div>

      {/* Chat List */}
      <div className="my-3 flex flex-col gap-0 max-h-[80%] overflow-auto  ">
        {/* Conversations will go here */}
        {conversations?.map((conversation) => (
          <Conversation key={conversation._id} conversation={conversation} />
        ))}
      </div>
    </div>
  )
}

export default LeftPanel
