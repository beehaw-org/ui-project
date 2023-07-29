import Sidebar from '@components/desktop-exclusive/Sidebar/MainSidebar';
import PostCard from '@components/common/PostCard';

const Page = () => {
  return (
    <div>
      <div className='lg:grid grid-cols-6'>
        <div className='col-start-3 col-span-2'>
          {
            [...Array(10)].map(i => <PostCard key={i} />)
            // posts.map((post: PostView) => <PostCard key={post.post.id} postObj={post} />)
          }
        </div>
        <Sidebar className='col-start-5 col-span-2' />
      </div>
    </div>
  );
};

export default Page;
