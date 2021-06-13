import Head from "next/head";
import styles from "../styles/Home.module.css";

import Footer from "./compornents/Footer/Footer";
import Card from "./compornents/Card/Card";
import { useEffect, useState, ComponentProps } from "react";

type Response = {
  feed: Feed;
  items: Items[];
  status: string;
};

type Feed = {
  author: string;
  description: string;
  image: string;
  link: string;
  title: string;
  url: string;
};

type Items = {
  author: string;
  categories: string[];
  content: string;
  description: string;
  enclosure: Enclosure;
  guid: string;
  link: string;
  pubDate: string;
  thumbnail: string;
  title: string;
};

type Enclosure = {
  link: string;
  type: string;
};

export default function Home() {
  const [lists, setLists] = useState<Items[]>([]);

  const getZenn = async () => {
    const endpoint: string = "https://api.rss2json.com/v1/api.json";
    const feed_url: string = "https://zenn.dev/feed";

    const resp: globalThis.Response = await fetch(
      `${endpoint}?rss_url=${feed_url}`
    );
    const data: Response = await resp.json();

    const zennItems: Items[] = data.items;
    setLists(zennItems);
  };

  useEffect(() => {
    getZenn();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>rss-test</title>
        <meta name="description" content="Zennのデータを取得してみました。" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Zennトレンド</h1>

      <main className={styles.main}>
        {lists.map((item: ComponentProps<typeof Card>, index: number) => {
          return (
            <Card
              link={item.link}
              enclosure={item.enclosure}
              title={item.title}
              description={item.description}
              key={index}
            />
          );
        })}
      </main>

      <Footer />
    </div>
  );
}
