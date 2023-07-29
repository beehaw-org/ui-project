import Sidebar from '@components/desktop-exclusive/Sidebar/MainSidebar';
import PostCard from '@components/common/PostCard';

const Page = () => {
  return (
    <div className='lg:flex max-w-screen-lg mx-auto space-x-4'>
      <div className='w-2/3 space-y-2'>
        {
          [...Array(10)].map(i => <PostCard key={i} />)
          // posts.map((post: PostView) => <PostCard key={post.post.id} postObj={post} />)
        }
      </div>
      <Sidebar className='w-1/3' />
    </div>
  );
};

export default Page;
