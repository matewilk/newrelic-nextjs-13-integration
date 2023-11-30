import React from "react";
import Card from "../components/Card";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

async function getBlogPosts() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
    // { cache: "no-store" } // this makes sure that the request is not cached and server side renders at runtime
  );

  if (!res.ok) {
    throw new Error("Failed to load posts");
  }

  return await res.json();
}

export default async function Blog() {
  const posts = await getBlogPosts();

  return (
    <div className="max-w-5xl w-full font-mono text-sm">
      <h1
        className="text-3xl font-bold text-center dark:drop-shadow-[0_0_0.5rem_#ffffff70] p-5 before:absolute before:h-[70px] before:w-[120px] before:bg-gradient-conic before:blur-2xl before:dark:from-sky-900 before:dark:via-[#f201ff] before:dark:opacity-50 
      "
      >
        Blog
      </h1>
      <ul>
        {posts.map((post: Post) => (
          <li key={post.id} className="py-4">
            <Card
              href={`/blog/${post.id}`}
              header={post.title}
              body={post.body}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
