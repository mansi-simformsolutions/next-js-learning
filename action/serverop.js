"use server";
import { redirect } from "next/navigation";
import { storePost, updatePostLikeStatus } from "@/lib/posts";
import { revalidatePath } from "next/cache";
import { uploadImage } from "@/lib/cloudinary";
export async function createPost(prevState, formData) {
  const title = formData.get("title");
  const image = formData.get("image");
  const content = formData.get("content");

  let errors = [];

  if (!title || title.trim().length === 0) {
    errors.push("Title is required.");
  }

  if (!content || content.trim().length === 0) {
    errors.push("Content is required.");
  }

  if (!image || image.size === 0) {
    errors.push("Image is required.");
  }

  if (errors.length > 0) {
    return { errors };
  }
  let imageUrl = "";

  // try {
  //   console.log("image", image);
  //   imageUrl = await uploadImage(image);
  //   console.log("image url", imageUrl);
  // } catch (error) {
  //   console.log("error", error);
  //   // throw new Error("Image upload failed");
  // }

  await storePost({
    imageUrl: imageUrl,
    title,
    content,
    userId: 1,
  });

  redirect("/feed");
}

export const togglePostLike = async (postId) => {
  updatePostLikeStatus(postId, 2);
  revalidatePath("/feed");
};
