import Messages from "@/components/messages";
import { getMessages } from "@/lib/messages";
import { unstable_noStore } from "next/cache";

//export const revalidate = 5;
// export const dynamic = "force-dynamic";
// export const dynamic = "force-static";

export default async function MessagesPage() {
  // unstable_noStore(); re-render the data component wise

  // const response = await fetch(
  //   "http://localhost:8080/messages"
  //   //  , {
  //   // cache: "no-store",  // will render the data again
  //   // next: { revalidate: 5 },
  //   //  }
  // );

  const messages = await getMessages();

  // const messages = await response.json();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
