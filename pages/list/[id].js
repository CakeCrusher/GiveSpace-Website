import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import { fetchGraphQL } from "../../utils/helperFunctions";
import { GET_LIST } from "../../utils/schemas";
import {
  Text,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Avatar,
  Image as ImageComponent,
  Flex,
  Spacer,
  Box,
} from "@chakra-ui/react";

const List = ({ list }) => {
  const router = useRouter();
  const date = new Date(list.date_created);
  // transform date into a readable date
  date.toDateString();

  return (
    <div className={styles.container}>
      <Head>
        <title>{list.user.username}`s List</title>
        <meta
          name="description"
          content={`${list.title} contains ${list.items.length} items.`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Flex w="100%" align="center">
          <Avatar
            size="lg"
            name="Kola Tioluwani"
            src={list.user.profile_pic_url}
            mr={4}
          />
          <Text fontSize="6xl">{list.user.username}'s List</Text>
          <Spacer />
          <Text fontSize="2xl">Hi</Text>
        </Flex>
        <Flex w="100%" wrap="wrap-reverse">
          {list.items.map((item) => (
            <Box key={item.id} m={[0, 10]}>
              <Stat w={200}>
                <StatLabel>{item.name}</StatLabel>
                <ImageComponent
                  src={item.image_url}
                  alt={`${item.name} image`}
                />
                {/* <Image
            src={item.image_url}
            alt={`${item.name} image`}
            layout="fill"
          /> */}
                <StatNumber>${item.price}</StatNumber>
                <StatHelpText>{date.toDateString()}</StatHelpText>
              </Stat>
            </Box>
          ))}
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
