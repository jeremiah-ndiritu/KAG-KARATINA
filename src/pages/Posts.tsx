import PostCard from "../components/PostCard";
import { useEffect, useRef, useState } from "react";
import ConnectionLostCard from "../components/ConnectionLostCard";
import type { Post } from "@/types/post";
import { api } from "@/config/api";

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const allVideoRefs = useRef<HTMLVideoElement[]>([]);
  const handleVideoRef = (index: number, el: HTMLVideoElement | null) => {
    if (el) {
      // Assign the element to the specific index
      allVideoRefs.current[index] = el;
    } else {
      // Optional: Cleanup if element is unmounted
      delete allVideoRefs.current[index];
    }
  };

  useEffect(()=>{
    const fetchPosts = async () => {
      const pd = await api.get("/api/posts")
      setPosts(pd.data.posts)
    };
    fetchPosts()
  },[])
  
  return (
    <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:px-8">
      {navigator.onLine ? (
        posts.map((post, idx) => (
          <PostCard
            key={post.title}
            post={post}
            index={idx}
            allVideoRefs={allVideoRefs}
            onVideoRef={handleVideoRef}
          />
        ))
      ) : (
        <ConnectionLostCard />
      )}
    </div>
  );
}
