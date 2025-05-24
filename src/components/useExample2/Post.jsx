import { use, Suspense } from 'react';

const fetchPosts = async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!res.ok) {
        throw new Error('Failed to fetch posts');
      }
      return await res.json();
    } catch (error) {
      return { error: error.message };
    }
  };
  
  const postPromise = fetchPosts();
const PostItems = () => {
    const posts = use(postPromise);
    return (
        <ul>
          {posts.map((post) => (
            <div key={post.id} className='bg-blue-50 shadow-md p-4 my-6 rounded-lg'>
              <h2 className='text-xl font-bold'>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))}
        </ul>
      );
}
const Posts = () => {
    return (
      <Suspense
        fallback={
          <h1 className='text-2xl text-center font-bold mt-5'>Loading...</h1>
        }
      >
        <PostItems />
      </Suspense>
    );
  };
  
  export { Posts as UseExample2 };