'use client'
import { Fragment } from 'react';
import Link from 'next/link';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Avatar from '@components/common/avatar';



const UserDropdown = () => {

  // Will update this list if there's a user in scope
  const links = [
    {href: '', label: 'Sign Up'},
    {href: '', label: 'Log In'},
  ]

  return (
    <Menu as='div' className='relative'>
      <Menu.Button className='bg-zinc-700 dark:hover:bg-zinc-600 flex items-center gap-1 rounded-lg p-2'>
        <Avatar dimension={8} />
        <ChevronDownIcon className='h-4 w-4' />
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
        <Menu.Items className='absolute right-0 z-[1] mt-2 origin-top-right rounded-lg bg-zinc-700 ring-1'>
          { links.map(({ href, label }) => (
            <Menu.Item key={href}>
              { ({ active }) => (
                <Link
                  href={href}
                  className={`${
                    active ? 'bg-zinc-600 text-white' : ''
                  } block whitespace-nowrap w-full px-3 py-2`}
                >
                  { label }
                </Link>
              ) }
            </Menu.Item>
          )) }
        </Menu.Items>
      </Transition>
    </Menu>
  )

}

export default UserDropdown;
