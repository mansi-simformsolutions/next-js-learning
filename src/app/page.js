import Login from "@/component/Login/login";

export default function Home({ searchParams }) {
  const value = searchParams.mode || "";
  return <Login mode={value} />;
}
