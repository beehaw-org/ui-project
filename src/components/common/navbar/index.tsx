import { apiClient } from '@app/apiClient';
import Link from 'next/link';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import SidebarToggle from './SidebarToggle';
import UserDropdown from './UserDropdown';
import Avatar from '../avatar';

const Navbar = async () => {
  const { site_view: siteView } = await apiClient.getSite();

  return (
    <nav className='bg-zinc-900 text-[#e4e4e4] px-4 py-2 border-b border-primary-dark'>
      <div className='max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-3'>
        <section>
          <a href='/' className='flex items-center w-fit'>
            { siteView.site.icon && <Avatar src={siteView.site.icon} alt={`${siteView.site.name} logo`} dimension={10} /> }
            <h1 className='ml-2 text-3xl'>
              {siteView.site.name}
            </h1>
          </a>
        </section>
        <section className='hidden place-self-center w-full md:flex items-center bg-zinc-700 rounded-lg'>
          <input
            type='text'
            placeholder='Search'
            className='bg-zinc-700 p-2 w-full border-r-2 border-r-zinc-500 rounded-l-lg'
          />
          <button className='dark:hover:bg-zinc-600 place-self-stretch rounded-r-lg px-2'>
            <MagnifyingGlassIcon className='w-6 h-6' />
          </button>
        </section>
        <section className='place-self-end flex gap-2'>
          {/* User and notification icons */}
          <Link href='' className='bg-zinc-700 dark:hover:bg-zinc-600 flex items-center md:hidden rounded-lg px-2'>
            <MagnifyingGlassIcon className='w-6 h-6' />
          </Link>
          <UserDropdown />
          <SidebarToggle />
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
