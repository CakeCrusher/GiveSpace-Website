import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import { fetchGraphQL } from "../../utils/helperFunctions";
import { GET_LIST } from "../../utils/schemas";
import { Text, Avatar, Flex, Spacer } from "@chakra-ui/react";
import Item from "../../components/Item";

const List = ({ list }) => {
  if (list.errors) {
    return <Text>List does not exist</Text>;
  }

  const items = list.items.map((item) => <Item data={item} />);

  return (
    <div className={styles.container}>
      <Head>
        <title>
          {list.user.username}&apos;s {list.title} wishlist
        </title>
        <meta
          name="description"
          content={`${list.title} contains ${list.items.length} items.`}
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:site_name" content="GiveSpace" />
        <meta property="og:image" content={list.user.profile_pic_url} />
        <meta name="author" content={list.user.username} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#c9042c" />
      </Head>

      <main className={styles.main}>
        <Flex w="100%" align="center">
          <Avatar
            size="lg"
            name="Kola Tioluwani"
            src={list.user.profile_pic_url}
            mr={4}
          />
          <Text fontSize="6xl">{list.user.username}&apos;s List</Text>
          <Spacer />
          <Text fontSize="2xl">Hi</Text>
        </Flex>
        <Flex w="100%" wrap="wrap-reverse">
          {items}
        </Flex>
      </main>

      <footer className={styles.footer}>
        <Text>Provided by GiveSpace</Text>
      </footer>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const fetchRes = await fetchGraphQL(GET_LIST, {
    list_id: params.id,
  });
  if (fetchRes.errors || !fetchRes.data.list[0]) {
    return { props: { list: { errors: "List not found" } } };
  } else {
    return { props: { list: fetchRes.data.list[0] } };
  }
};

export default List;
