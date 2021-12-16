import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Text, UnorderedList, ListItem, Flex } from "@chakra-ui/react";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>GiveSpace home</title>
        <meta property="og:image" content="/icon.png" />
        <meta
          name="description"
          content="Never again worry about what to give as a gift. GiveSpace makes it easy to make your wishlist and share it with others."
        />
        <link rel="icon" href="/icon.png" />
      </Head>

      <main className={styles.main}>
        <Flex p={3} direction="column">
          <Nav
            appLink={
              "https://play.google.com/store/apps/details?id=com.spotify.music&hl=en_US&gl=US"
            }
          />
          <UnorderedList mb={5}>
            <ListItem fontSize="xl" fontWeight="bold">
              Make gift-giving effortless and fun
            </ListItem>
            <ListItem fontSize="xl" fontWeight="bold">
              Easily create and share wishlists
            </ListItem>
            <ListItem fontSize="xl" fontWeight="bold">
              Connect with friends and family
            </ListItem>
            <ListItem fontSize="xl" fontWeight="bold">
              Organize with others to give meaningful gifts
            </ListItem>
          </UnorderedList>
          <Text fontSize="xl">
            Never again worry about what to give as a gift. GiveSpace makes it
            easy to make your wishlist and share it with others. GiveSpace
            recognizes your list`s items and automatically fills in the details.
            It's that simple. Find your friends and family on the app to view
            their lists and give the perfect gift. Lists will mark which items
            have been bought, so there’s no risk of unwanted duplicates.
            GiveSpace is the ultimate tool for holidays, birthdays, weddings,
            baby showers, and more.
          </Text>
        </Flex>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
