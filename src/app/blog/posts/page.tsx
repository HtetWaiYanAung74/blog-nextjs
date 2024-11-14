import { connectToDB, getPosts } from '@/app/lib/data';
import Post from '@/app/ui/components/posts/Post';

export default async function Page() {
  const client = await connectToDB();
  const posts = await getPosts();
  return (
    <>
      { client && <p className='text-green-500'>Connected to database</p> }
      <h1>Posts</h1>
      { posts?.map(post => <Post key={post.id} {...post} />)}
    </>
  );
}