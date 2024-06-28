export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <>
      <div>The Blog Post Page</div>
      <p>{params.slug}</p>
    </>
  );
}
