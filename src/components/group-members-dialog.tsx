import { users } from "@/dummy-data/db"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Crown } from "lucide-react"

const GroupMembersDialog = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <p className="text-xs text-muted-foreground text-left">See members</p>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="my-2">Current Members</DialogTitle>
          <DialogDescription>
            <div className="flex flex-col gap-3 ">
              {users?.map((user) => (
                <div
                  key={user._id}
                  className={`flex gap-3 items-center p-2 rounded`}
                >
                  <Avatar className="overflow-visible">
                    {user.isOnline && (
                      <div className="absolute top-0 right-0 w-2 h-2 bg-green-500 rounded-full border-2 border-foreground" />
                    )}
                    <AvatarImage
                      src={user.image}
                      className="rounded-full object-cover"
                    />
                    <AvatarFallback>
                      <div className="animate-pulse bg-gray-tertiary w-full h-full rounded-full"></div>
                    </AvatarFallback>
                  </Avatar>

                  <div className="w-full ">
                    <div className="flex items-center gap-2">
                      <h3 className="text-md font-medium">
                        {user.name || user.email.split("@")[0]}
                      </h3>
                      {user.admin && (
                        <Crown size={16} className="text-yellow-400" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
export default GroupMembersDialog
