import Link from "next/link";

import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";
import NewsList from "@/component/newslist";

export default function FilteredNewsPage({ params }) {
  const filter = params.filter;

  console.log("filter", filter);

  const year = filter?.[0];
  const month = filter?.[1];

  let news;
  let links = getAvailableNewsYears();

  if (year && !month) {
    news = getNewsForYear(year);
    links = getAvailableNewsMonths(year);
  }

  if (year && month) {
    news = getNewsForYearAndMonth(year, month);
    links = [];
  }

  let newsContent = <p>No news found for the selected period.</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => {
              const href = year
                ? `/archive/${year}/${link}`
                : `/archive/${link}`;

              return (
                <li key={link}>
                  <Link href={href}>{link}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  );
}
