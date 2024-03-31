import "./globals.css";
import Header from "./components/header"
import 'bootstrap/dist/css/bootstrap.min.css';
import { TopicProvider } from "@/context/TopicContext";
import { DateProvider } from "@/context/DateContext";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "roran-williams-blog",
  description: "bogs on different topics including health, technology, etc.",
};

async function fetchTopics() {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  };  
  try {
    const res = await fetch("http://127.0.0.1:1337/api/topics",{ cache: 'no-store' });
    const response = await res.json();
    return response;
  } catch (err) {
    console.error(err);
  }
}


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
  
}) {
  const topics = await fetchTopics();
  console.log(topics)
  return (
    <html lang="en">
      <body className={inter.className}>
      <DateProvider>
        <TopicProvider>
          <Header topics={topics}/>
          {children}
        </TopicProvider>
      </DateProvider>
      <Footer />
      </body>
    </html>
  );
}


