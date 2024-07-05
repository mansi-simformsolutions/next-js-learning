import { DUMMY_NEWS } from "@/dummy-json";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function NewsPage() {
  return (
    <>
      <div>
        <ul className="news-list">
          {DUMMY_NEWS.map((newsItem) => (
            <li key={newsItem.id}>
              <Link href={`/news/${newsItem.slug}`}>
                <img
                  src={`/images/news/${newsItem.image}`}
                  alt={newsItem.title}
                />
                <span>{newsItem.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default NewsPage;
