import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>GiveSpace home</title>
        <meta
          name="description"
          content="Hassle-free gift wishlists for friends and family"
        />
        <link rel="icon" href="/icon.png" />
      </Head>

      <main className={styles.main}>
        <Text fontSize="6xl">Welcome to GiveSpace</Text>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
