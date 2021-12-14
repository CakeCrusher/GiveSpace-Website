import React from "react";
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Image as ImageComponent,
  Box,
} from "@chakra-ui/react";

const Item = ({ data }) => {
  const date = new Date(data.date_created);

  return (
    <Box key={data.id} m={[0, 10]}>
      <Stat w={200}>
        <StatLabel>{data.name}</StatLabel>
        <ImageComponent src={data.image_url} alt={`${data.name} image`} />
        <StatNumber>${data.price}</StatNumber>
        <StatHelpText>{date.toDateString()}</StatHelpText>
      </Stat>
    </Box>
  );
};

export default Item;
