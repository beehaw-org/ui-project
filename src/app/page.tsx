import Sidebar from '@components/desktop-exclusive/Sidebar/MainSidebar';
import { PostCard } from '@components/common/PostCard';
import { PostView } from 'lemmy-js-client';
import { apiClient } from '@app/apiClient';

const Page = async () => {
  const { posts } = await apiClient.getPosts({});

  return (
    <div className='lg:flex max-w-screen-lg mx-auto space-x-4'>
      <article className='w-2/3 space-y-2'>
        {posts.map((postView: PostView) => (
          <PostCard key={postView.post.id} postView={postView} />
        ))}
      </article>
      <Sidebar className='w-1/3' />
    </div>
  );
};

export default Page;
