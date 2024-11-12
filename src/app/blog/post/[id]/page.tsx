import { posts } from '@/app/libs/placeholder-data';
import Post from '@/app/ui/components/posts/Post';

// export default async function Page({ params }: { params: { id: string } }) {
export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {

  const post_id: string = (await params).id!;
  const post = posts.find(post => post.id === post_id);

  return (
    <>
      <h1>Post</h1>
      <Post {...post} />
    </>
  );
}