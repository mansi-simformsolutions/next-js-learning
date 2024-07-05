import { createPost } from "@/action/serverop";
import PostForm from "@/components/post-form";

export default function NewPostPage() {
  return <PostForm action={createPost} />;
}
