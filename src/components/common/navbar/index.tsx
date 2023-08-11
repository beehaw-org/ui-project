import { apiClient } from '@app/apiClient';
import Image from 'next/image';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import SidebarToggle from './SidebarToggle';

const Navbar = async () => {
  const { site_view: siteView } = await apiClient.getSite();

  return (
    <nav className='bg-secondary-dark text-[#e4e4e4] px-4 py-2 border-b border-primary-dark'>
      <div className='max-w-screen-xl mx-auto grid grid-cols-3'>
        <section>
          <a href='/' className='flex items-center w-fit'>
            {siteView.site.icon && (
              <span className='inline-block h-10 w-10 overflow-hidden rounded-full mr-2'>
                <Image
                  src={siteView.site.icon}
                  alt={`${siteView.site.name} logo`}
                  width={100}
                  height={100}
                />
              </span>
            )}
            <h1 className='hidden md:block ml-2 text-3xl'>
              {siteView.site.name}
            </h1>
          </a>
        </section>
        <section className='place-self-center w-full flex items-center bg-zinc-700 rounded-lg'>
          <input
            type='text'
            placeholder='Search'
            className='bg-zinc-700 p-2 w-full border-r-2 border-r-zinc-500 rounded-l-lg'
          />
          <button className='dark:hover:bg-zinc-600 place-self-stretch rounded-r-lg px-2'>
            <MagnifyingGlassIcon className='w-6 h-6' />
          </button>
        </section>
        <section className='place-self-end'>
          {/* User and notification icons */}
          <SidebarToggle />
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
