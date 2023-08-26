import Sidebar from '@components/desktop-exclusive/Sidebar/MainSidebar';
import { PostCard } from '@components/common/PostCard';
import { apiClient } from '@app/apiClient';

const PostPage = async ({ params }: { params: { id: Number } }) => {
  const { post_view } = await apiClient.getPost({
    id: Number(params.id),
  });

  return (
        <div className='lg:flex max-w-screen-lg mx-auto space-x-4'>
          <article className='w-2/3 space-y-2'>
            <PostCard key={post_view.post.id} postView={post_view} />
          </article>
          <Sidebar className='w-1/3' />
      	</div>
    );
};

export default PostPage;