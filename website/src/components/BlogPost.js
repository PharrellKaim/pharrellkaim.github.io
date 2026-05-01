import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import posts from "./BlogData";

export default function BlogPost() {
  const { id } = useParams();
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);

  const post = posts.find((p) => p.slug === id);

  useEffect(() => {
    if (!post) return;

    setLoading(true);

    fetch(post.path)
      .then((res) => res.text())
      .then((text) => {
        setContent(text);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [post]);

  if (!post) {
    return (
      <div className="p-10 text-text">
        Post not found
      </div>
    );
  }

  return (
    <div className="bg-background text-text min-h-screen py-20 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <h1 className="text-4xl font-bold mb-3">{post.title}</h1>
        <p className="text-sm text-gray-400 mb-10">{post.date}</p>

        {/* Loading State */}
        {loading ? (
          <p className="text-gray-400">Loading...</p>
        ) : (
          <article className="prose prose-lg max-w-none">
            <ReactMarkdown
      components={{
        code({ inline, className, children }) {
          const match = /language-(\w+)/.exec(className || "");

          return !inline && match ? (
            <SyntaxHighlighter
              style={oneDark}
              language={match[1]}
              PreTag="div"
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
                ) : (
                  <code className="bg-gray-800 px-1 py-0.5 rounded text-sm">
                    {children}
                  </code>
                   );
               },
            }}
            >
            {content}
            </ReactMarkdown>
          </article>
        )}

      </div>
    </div>
  );
}