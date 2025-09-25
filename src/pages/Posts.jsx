import PostCard from "../components/PostCard";
export default function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.map((p) => {
        return <PostCard key={p.id} post={p} />;
      })}
    </div>
  );
}
