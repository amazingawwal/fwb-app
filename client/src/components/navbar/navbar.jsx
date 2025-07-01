import UserMenu from "../userProfile/userProfile"

export default function Navbar() {
  return (
    <nav>
        <div className="flex justify-between p-4 bg-gray-500 text-white">
            <img src="FWB.png" 
            className="rounded"
             alt="logo"
             width={50}
              />
              <h1><strong>Friends <span>with</span> Benefits</strong></h1> 
            <UserMenu />
        </div>
    </nav>
  )
}
