import Sidebar from '@components/desktop-exclusive/Sidebar/MainSidebar';
import { PostCard } from '@components/common/PostCard';
import { PostView } from 'lemmy-js-client';
import { apiClient } from '@app/apiClient';

const Page = async () => {
  const { posts } = await apiClient.getPosts({});

  return (
    <div className='lg:flex max-w-screen-xl mx-auto space-x-4'>
      <article className='w-3/4 space-y-2'>
        {posts.map((postView: PostView) => (
          <PostCard key={postView.post.id} postView={postView} />
        ))}
      </article>
      <Sidebar className='w-1/4' />
    </div>
  );
};

export default Page;
