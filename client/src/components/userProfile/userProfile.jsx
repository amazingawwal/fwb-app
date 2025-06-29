import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function UserMenu() {
  return (
    <div className="relative inline-block text-left">
      <Menu as="div" className="relative">
        <Menu.Button className="inline-flex justify-center w-full rounded-full bg-gray-700 text-white h-10 w-10 items-center">
          SA
          <ChevronDownIcon className="ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-64 origin-top-right rounded-md bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
            {/* User Info */}
            <div className="flex items-center p-4 border-b border-gray-700">
              <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center mr-3">
                SA
              </div>
              <div>
                <div className="font-semibold text-white">Your Name</div>
                <div className="text-sm text-gray-400">youremail@example.com</div>
              </div>
            </div>

            {/* Menu Items */}
            <div className="p-2">
              <MenuItem label="Help" />
              <MenuItem label="Settings" />
              <MenuItem label="About us" />
              <MenuItem label="Log out" />
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

function MenuItem({ label, onClick }) {
  return (
    <Menu.Item>
      {({ active }) => (
        <button
          onClick={onClick}
          className={`${
            active ? 'bg-gray-700' : ''
          } group flex w-full items-center rounded-md px-2 py-2 text-sm text-white`}
        >
          {label}
        </button>
      )}
    </Menu.Item>
  )
}
