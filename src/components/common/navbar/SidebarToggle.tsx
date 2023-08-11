'use client';
import { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const SidebarToggle = () => {

  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const sidebar = document.querySelector('aside#sidebar');
    if (sidebar) {
      sidebar.classList.toggle('w-0', !expanded);
      sidebar.classList.toggle('w-4/5', expanded);

      const mainSection = document.querySelector('main article:first-of-type');
      if (mainSection) {
        mainSection.classList.toggle('dim', expanded);
      }
    }
  })
    
  return (
    <button
      onClick={() => setExpanded(!expanded)}
      aria-controls='sidebar'
      type='button'
      className='sidebar-toggle lg:hidden text-gray-500 hover:text-gray-300 dark:text-gray-400 dark:hover:text-gray-200'
    >
      <span className='sr-only'>Open sidebar</span>
      { expanded
        ? <XMarkIcon className='h-8 w-8' />
        : <Bars3Icon className='h-8 w-8' />
      }
    </button>
  );
};

export default SidebarToggle;
