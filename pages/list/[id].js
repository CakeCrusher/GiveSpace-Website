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
  Image as ImageComponent,
  Center,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import Item from "../../components/Item";
import Nav from "../../components/Nav";
import Link from "next/link";

import { FiShare2 } from "react-icons/fi";

const List = ({ list }) => {
  const [copied, setCopied] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  if (list.errors) {
    return <Text>List does not exist</Text>;
  }

  const GOOGLE_PLAY_LINK =
    "https://play.google.com/store/apps/details?id=com.reservadex";

  const handleCopy = () => {
    setCopied(true);
    // copy "hello world" to the clipboard
    navigator.clipboard.writeText(window.location.href);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  console.log(list);

  const items = list.items.map((item) => (
    <Item
      key={item.id}
      data={item}
      appLink={GOOGLE_PLAY_LINK}
      openModal={openModal}
    />
  ));

  return (
    <Box px='24px' minH='100vh' minW='100vw' bg='#e9e9e9'>
      <Flex direction='column'>
        <Nav appLink={GOOGLE_PLAY_LINK} />
        <Head>
          <title>
            {list.user.username}&apos;s {list.title} wishlist
          </title>
          <meta
            name='description'
            content={`This list contains ${
              list.items.filter((item) => !item.status).length
            } unbought items.`}
          />
          <link rel='icon' href='/favicon.ico' />
          <meta property='og:site_icon' content='/favicon.ico' />
          <meta property='og:site_name' content='GiveSpace' />
          <meta property='og:image' content={list.user.profile_pic_url} />
          <meta name='author' content={list.user.username} />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          />
          <meta name='theme-color' content='#c9042c' />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
          <link
            href='https://fonts.googleapis.com/css2?family=Quicksand:wght@500;600&family=Source+Sans+Pro:wght@400;600&display=swap'
            rel='stylesheet'
          />
        </Head>

        <main className={styles.main}>
          <Flex px={{ base: "0px", lg: "124px" }} direction='column'>
            <Flex w='100%' align='center'>
              <Avatar
                w={{ base: "64px", lg: "128px" }}
                h={{ base: "64px", lg: "128px" }}
                name='Kola Tioluwani'
                src={list.user.profile_pic_url}
                mr={4}
              />
              <Flex direction='column'>
                <Text opacity={0.9} fontSize={{ md: "24px", base: "18px" }}>
                  {list.user.username}
                </Text>
                <Text fontSize={{ md: "36px", base: "24px" }} fontWeight='600'>
                  {list.title}
                </Text>
              </Flex>
              <Spacer />
            </Flex>
            <Flex mt='48px' mb='32px'>
              <Flex cursor='pointer' onClick={handleCopy}>
                <Center>
                  <Icon m={1.5} boxSize={6} as={FiShare2} />
                  <Text fontSize={{ base: "18px", lg: "24px" }}>
                    {copied ? "Link copied" : "Share"}
                  </Text>
                </Center>
              </Flex>
              <Spacer />
            </Flex>
            <Flex w='100%' justifyContent='flex-start' flexWrap='wrap'>
              {items}
            </Flex>
          </Flex>
          <Modal isOpen={modalOpen} onClose={closeModal}>
            <ModalOverlay />
            <ModalContent>
              <ModalCloseButton />
              <ModalBody maxW='95%'>
                <Flex>
                  <Center>
                    <ImageComponent
                      boxSize={42}
                      objectFit='cover'
                      borderRadius={5}
                      src='/icon.png'
                      alt='GiveSpace icon'
                    />
                    <Flex>
                      <Text
                        fontFamily='Quicksand'
                        fontWeight='600'
                        color='brand.900'
                        fontSize='4xl'
                        ml={2}
                      >
                        Give
                      </Text>
                      <Text
                        fontWeight='600'
                        fontFamily='Quicksand'
                        fontSize='4xl'
                      >
                        Space
                      </Text>
                    </Flex>
                  </Center>
                </Flex>
                <Text>Download the app for more options</Text>
              </ModalBody>

              <ModalFooter>
                <Button variant='ghost' onClick={closeModal}>
                  close
                </Button>
                <Link href={GOOGLE_PLAY_LINK}>
                  <a>
                    <Button color='white' bg='brand.900' mr={3}>
                      download
                    </Button>
                  </a>
                </Link>
              </ModalFooter>
            </ModalContent>
          </Modal>
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
