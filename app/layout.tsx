import "./globals.css";
import Header from "./components/header"
import 'bootstrap/dist/css/bootstrap.min.css';
import { TopicProvider } from "@/context/TopicContext";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

async function fetchTopics() {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  };
  
  try {
    const res = await fetch("http://127.0.0.1:1337/api/topics");
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
      <TopicProvider>
        <Header topics={topics}/>
        {children}
      </TopicProvider>
      </body>
    </html>
  );
}


