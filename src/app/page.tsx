import Sidebar from '@components/desktop-exclusive/Sidebar/MainSidebar';

const Page = () => {
  return (
    <div>
      <h1>beehaw</h1>
      <div className='lg:grid grid-cols-6'>
        <div className='col-start-3 col-span-2'>text</div>
        <Sidebar className='col-start-5 col-span-2' />
      </div>
    </div>
  );
};

export default Page;
