import { Link } from "react-router-dom";
import posts from "./BlogData";

export default function BlogPreview() {
  return (
    <div className="px-4 py-10 md:px-10">
      
      {/* Title */}
      <h1
        id="blog"
        className="mx-auto text-white font-mono text-2xl md:text-3xl mb-5 bg-darkgrey inline-block px-6 py-3 rounded-2xl"
      >
        My Blog
      </h1>

      {/* Intro text */}
      <p className="text-sm md:text-base font-thin mb-6 max-w-2xl">
        I write about my journey as a developer, technology concepts, and things I learn along the way.
      </p>

      {/* Blog cards */}
      <div className="grid gap-6 md:grid-cols-2">
        {posts.slice(0, 2).map((post) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className="p-5 border border-gray-700 rounded-2xl hover:border-primary transition"
          >
            <h2 className="text-xl font-medium mb-2">
              {post.title}
            </h2>
            <p className="text-sm text-gray-400 mb-3">
              {post.date}
            </p>
            <p className="text-sm font-thin text-gray-300">
              Click to read more...
            </p>
          </Link>
        ))}
      </div>

      {/* Button to full blog */}
      <div className="mt-8">
        <Link
          to="/blog"
          className="inline-block bg-primary text-white px-5 py-2 rounded-xl hover:opacity-80 transition"
        >
          View all posts →
        </Link>
      </div>

    </div>
  );
}