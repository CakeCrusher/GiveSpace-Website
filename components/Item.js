import React from "react";
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Image as ImageComponent,
  Text,
  Box,
  Divider,
  Icon,
  Center,
} from "@chakra-ui/react";
import { FiCheck } from "react-icons/fi";
import Link from "next/link";

const Item = ({ data, appLink, openModal }) => {
  const date = new Date(data.date_created);

  return (
    <Box
      onClick={openModal}
      cursor="pointer"
      opacity={data.status ? 0.7 : 1}
      position="relative"
      key={data.id}
      mr={7}
      mt={7}
    >
      {/* <Link href={appLink}>
        <a> */}
      <Box
        w={200}
        h={300}
        bg="#ccc"
        position="absolute"
        borderRadius={5}
        top={1}
        right={1}
      ></Box>
      <Box
        borderRadius={5}
        position="relative"
        top={-1}
        right={-1}
        w={200}
        h={300}
        bg="white"
        border="1px solid #ccc"
      >
        <Box w="100%" h={200}>
          <ImageComponent
            boxSize="100%"
            objectFit="scale-down"
            src={data.image_url}
            alt={`${data.name} image`}
            p={0}
            m={0}
          />
        </Box>
        <Box p={3}>
          <Divider />
          <Text fontWeight="bold" fontSize="xl">
            {data.name}
          </Text>
          <Text fontSize="md">
            <i>~${data.price}</i>
          </Text>
        </Box>
      </Box>
      {data.status && (
        <Box
          boxSize={50}
          bg="brand.900"
          position="absolute"
          alignItems="center"
          borderRadius={40}
          top={-3}
          right={-3}
        >
          <Center mt={2}>
            <Icon boxSize={8} as={FiCheck} color="white" />
          </Center>
        </Box>
      )}
      {/* </a>
      </Link> */}
    </Box>
  );
};

export default Item;
