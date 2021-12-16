import React from "react";
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Image as ImageComponent,
  Box,
  Flex,
  Text,
  Spacer,
  Center,
  Icon,
  Divider,
} from "@chakra-ui/react";
import { Image } from "next/image";
import Link from "next/link";
import { FaGooglePlay } from "react-icons/fa";

const Nav = ({ appLink }) => {
  return (
    <Flex direction="column">
      <Flex m={[0]}>
        <Flex>
          <Center>
            <ImageComponent
              boxSize={42}
              objectFit="cover"
              borderRadius={5}
              src="/icon.png"
              alt="GiveSpace icon"
            />
            <Flex>
              <Text color="brand.900" fontSize="4xl" ml={2}>
                Give
              </Text>
              <Text fontSize="4xl">Space</Text>
            </Flex>
          </Center>
        </Flex>
        <Spacer />
        <Flex direction="column">
          <Text fontSize="lg">Download the app</Text>
          <Flex>
            <Spacer />
            <Center>
              <Link href={appLink}>
                <a>
                  <Box boxSize={9} borderRadius={7} bg="brand.700">
                    <Icon m={1.5} boxSize={6} as={FaGooglePlay} />
                  </Box>
                </a>
              </Link>
            </Center>
            <Spacer />
          </Flex>
          <Spacer />
        </Flex>
      </Flex>
      <Divider mt={3} mb={3} />
    </Flex>
  );
};

export default Nav;
