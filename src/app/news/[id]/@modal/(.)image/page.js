import { notFound } from "next/navigation";

import { DUMMY_NEWS } from "@/dummy-json";

export default function InterceptedImagePage({ params }) {
  const newsItemSlug = params.id;
  const newsItem = DUMMY_NEWS.find(
    (newsItem) => newsItem.slug === newsItemSlug
  );
  console.log("newsItem", newsItem);
  return (
    <>
      <div className="modal-backdrop" />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}
