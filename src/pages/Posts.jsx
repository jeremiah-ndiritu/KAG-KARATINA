import PostCard from "../components/PostCard";
export default function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.map((p) => {
        return <PostCard post={p} />;
      })}
    </div>
  );
}
