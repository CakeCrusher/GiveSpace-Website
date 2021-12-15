import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import { fetchGraphQL } from "../../utils/helperFunctions";
import { GET_LIST } from "../../utils/schemas";
import {
  Text,
  Avatar,
  Flex,
  Spacer,
  Box,
  Icon,
  Center,
} from "@chakra-ui/react";
import Item from "../../components/Item";
import NavBar from "../../components/Nav";

import { FiShare2 } from "react-icons/fi";

const List = ({ list }) => {
  const [copied, setCopied] = useState(false);
  if (list.errors) {
    return <Text>List does not exist</Text>;
  }

  const handleCopy = () => {
    setCopied(true);
    // copy "hello world" to the clipboard
    navigator.clipboard.writeText(window.location.href);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  console.log(list);

  const items = list.items.map((item) => <Item key={item.id} data={item} />);

  return (
    <Box minH="100vh" minW="100vw" bg="#eef">
      <Flex pl={6} pr={6} pt={3} pb={3} direction="column">
        <NavBar />
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
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="theme-color" content="#c9042c" />
        </Head>

        <main className={styles.main}>
          <Flex pl="10%" pr="10%" direction="column">
            <Flex w="100%" align="center">
              <Avatar
                size="xl"
                name="Kola Tioluwani"
                src={list.user.profile_pic_url}
                mr={4}
              />
              <Flex direction="column">
                <Text opacity={0.9} fontSize="3xl">
                  {list.user.username}
                </Text>
                <Text fontSize="5xl">{list.title}</Text>
              </Flex>
              <Spacer />
            </Flex>
            <Flex mt={5} mb={0}>
              <Flex cursor="pointer" onClick={handleCopy}>
                <Center>
                  <Icon m={1.5} boxSize={6} as={FiShare2} />
                  <Text fontSize="lg">{copied ? "Link copied" : "Share"}</Text>
                </Center>
              </Flex>
              <Spacer />
            </Flex>
            <Flex w="100%" wrap="wrap-reverse">
              {items}
              {items}
            </Flex>
          </Flex>
        </main>

        <footer className={styles.footer}></footer>
      </Flex>
    </Box>
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
