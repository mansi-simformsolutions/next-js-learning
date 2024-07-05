import { notFound } from "next/navigation";

import { DUMMY_NEWS } from "@/dummy-json";

export default function ImagePage({ params }) {
  const newsItemSlug = params.id;
  const newsItem = DUMMY_NEWS.find(
    (newsItem) => newsItem.slug === newsItemSlug
  );

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
}
