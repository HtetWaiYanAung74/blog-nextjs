import { getPosts } from '@/app/lib/data';
import Post from '@/app/ui/components/posts/Post';
import { notFound } from 'next/navigation';

// export default async function Page({ params }: { params: { id: string } }) {
export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
  
  const posts = await getPosts();

  const post_id: string = (await params).id;
  const post = posts?.find(post => post.id === post_id)!;

  if (!post) {
    notFound();
  }

  return (
    <>
      <h1>Post</h1>
      <Post {...post} />
    </>
  );
}