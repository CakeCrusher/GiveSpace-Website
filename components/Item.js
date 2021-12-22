import React from 'react';
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
} from '@chakra-ui/react';
import { FiCheck } from 'react-icons/fi';
import Link from 'next/link';

const Item = ({ data, appLink, openModal }) => {
  const date = new Date(data.date_created);

  return (
    <Box
      w={{ base: '44%', xl: '15%' }}
      mb="12px"
      ml={{ base: '2%', xl: '0.66%' }}
      mr={{ base: '2%', xl: '0.66%' }}
      onClick={openModal}
      cursor="pointer"
      opacity={data.status ? 0.7 : 1}
      position="relative"
      key={data.id}
    >
      <Box
        boxShadow="-8px 8px 0px #DEDEDE"
        borderRadius={5}
        position="relative"
        top={0}
        right={0}
        bg="white"
        p="24px"
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
        <Box>
          <Divider />
          <Text fontWeight="500" fontSize="xl">
            {data.name}
          </Text>
          <Text fontSize="md" fontWeight="300" as="i">
            ${'~' + data.price}
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
