import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export function ProfileAvatar() {
  return (
    <div className="flex flex-row flex-wrap items-center gap-12">
      <Avatar className="rounded-lg">
        <AvatarImage
          src="https://github.com/evilrabbit.png"
          alt="@evilrabbit"
        />
        <AvatarFallback>ER</AvatarFallback>
      </Avatar>
    </div>
  )
}
