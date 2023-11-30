async function getBlogPost({ id }: { id: number }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
    // { cache: "no-store" } // this makes sure that the request is not cached and server side renders at runtime
  );

  if (!res.ok) {
    throw new Error("Failed to load post");
  }

  return await res.json();
}

export default async function BlogPost({ params }: { params: { id: number } }) {
  const post = await getBlogPost({ id: params.id });

  return <h1>{post.title}</h1>;
}
