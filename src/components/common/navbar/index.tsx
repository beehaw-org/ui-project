import { apiClient } from '@app/apiClient';
import Image from 'next/image';

const Navbar = async () => {
  const { site_view: siteView } = await apiClient.getSite();

  return (
    <nav className='bg-zinc-900 text-[#e4e4e4] py-2 border-b border-primary-dark'>
      <div className='max-w-screen-xl mx-auto flex items-center'>
        {siteView.site.icon && (
          <span className='inline-block h-10 w-10 overflow-hidden rounded-full mr-2'>
            <Image
              src={siteView.site.icon}
              alt='Instance logo'
              width={100}
              height={100}
            />
          </span>
        )}
        {siteView.site.name} --- some links --- search --- more links
      </div>
    </nav>
  );
};

export default Navbar;
