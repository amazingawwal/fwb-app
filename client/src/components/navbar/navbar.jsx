import UserMenu from "../userProfile/userProfile"

export default function Navbar() {
  return (
    <div className="flex justify-end p-4 bg-gray-900 text-white">
      <UserMenu />
    </div>
  )
}
