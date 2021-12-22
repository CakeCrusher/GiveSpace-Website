import React from 'react';
import {
  Image as ImageComponent,
  Flex,
  Text,
  Spacer,
  Center,
  Icon,
} from '@chakra-ui/react';
import Link from 'next/link';
import { FaGooglePlay } from 'react-icons/fa';

const Nav = ({ appLink }) => {
  return (
    <Flex
      mb={{ base: '24px', lg: '24px' }}
      py={{ base: '24px', lg: '24px' }}
      borderBottom="2px solid #9F9F9F"
      direction="column"
    >
      <Flex px={{ base: '0px', lg: '124px' }}>
        <Flex>
          <Center>
            <ImageComponent
              boxSize={{ base: '48px', lg: '64px' }}
              objectFit="cover"
              borderRadius={5}
              src="/icon.png"
              alt="GiveSpace icon"
            />
            <Flex>
              <Text
                fontFamily="Quicksand"
                fontWeight="600"
                color="brand.900"
                fontSize={{ base: '24px', lg: '36px' }}
                ml={2}
              >
                Give
              </Text>
              <Text
                fontFamily="Quicksand"
                fontWeight="600"
                fontSize={{ base: '24px', lg: '36px' }}
              >
                Space
              </Text>
            </Flex>
          </Center>
        </Flex>
        <Spacer />
        <Flex direction="column">
          <Text fontSize={{ base: '14px', lg: '18px' }}>Download the app</Text>
          <Flex>
            <Spacer />
            <Center>
              <Link href={appLink}>
                <a>
                  <Center
                    boxSize={{ base: 8, lg: 12 }}
                    borderRadius={{ base: 12, lg: 15 }}
                    bg="brand.700"
                  >
                    <Icon boxSize={{ base: 4, lg: 8 }} as={FaGooglePlay} />
                  </Center>
                </a>
              </Link>
            </Center>
            <Spacer />
          </Flex>
          <Spacer />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Nav;
