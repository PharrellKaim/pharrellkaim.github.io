import { Link } from "react-router-dom";
import posts from "./BlogData";

export default function Blog() {
  return (
    <div className="p-10 text-text">
      <h1 className="text-3xl mb-8">Blog</h1>

      {posts.map((post) => (
        <Link key={post.slug} to={`/blog/${post.slug}`}>
          <div className="mb-6 border p-4 rounded hover:border-primary">
            <h2 className="text-xl">{post.title}</h2>
            <p className="text-sm text-gray-400">{post.date}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}