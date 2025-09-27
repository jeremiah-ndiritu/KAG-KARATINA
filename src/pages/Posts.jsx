import PostCard from "../components/PostCard";
import { useRef } from "react";

export default function Posts({ posts }) {
  const allVideoRefs = useRef([]);

  return (
    <div className="posts">
      {posts.map((post, idx) => (
        <PostCard
          key={post.id}
          post={post}
          index={idx}
          allVideoRefs={allVideoRefs}
        />
      ))}
    </div>
  );
}
