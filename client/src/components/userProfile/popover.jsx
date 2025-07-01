import { Popover, Transition, PopoverPanel, PopoverButton, MenuItem } from '@headlessui/react'
import { Fragment } from 'react'
import { Squares2X2Icon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'

export default function ProjectPopover() {
  const options = [
    { name: 'myPool', icon: '/' },
    { name: 'newPool', icon: '/' },
    { name: 'newProject', icon: '/' },
    { name: 'Invite', icon: '/' },
    { name: 'myFriends', icon: '/' },
  ]

  return (
    <Popover className="relative">
      <PopoverButton className="p-2 rounded-full hover:bg-gray-700">
        <Squares2X2Icon className="h-6 w-6 text-white" />
      </PopoverButton>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <PopoverPanel className="absolute right-0 z-10 mt-2 w-72 rounded-lg bg-gray-800 p-4 shadow-lg">
          <h3 className="text-white font-semibold mb-4">Apps</h3>
          <div className="grid grid-cols-3 gap-4">
            {options.map((app) => (
            //   <button
            //     key={app.name}
            //     onClick={() => {
            //     // navigation logic 
            //         console.log(`Clicked ${app.name}`)
            //         close() 
            //     }}
            //     className="flex flex-col items-center rounded-lg p-1 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white/70"
            //     // className="flex flex-col items-center"
            //   >
            <Link
                href={app.ref}
                onClick={close}
                className="flex flex-col items-center rounded-lg p-1 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white/70"
            >
                <img
                  src={app.icon}
                  alt={app.name}
                  className="h-12 w-12 rounded-lg"
                />
                
                <span className="text-sm text-white mt-2">{app.name}</span>
                </Link>
//</button>
            ))}
          </div>
        </PopoverPanel>
      </Transition>
    </Popover>
  )
}
