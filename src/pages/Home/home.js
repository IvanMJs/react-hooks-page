import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Flex, Text, Heading } from "@chakra-ui/react";
export default function Example({}) {
  return (
    <Flex>
      <Sidebar />
      <Flex display="-ms-grid" textAlign="center" mt="5%">
        <Heading fontSize="70px" fontFamily="Ink Free" color="#FFFFFF">
          Home
        </Heading>
        <Text fontSize="3xl" margin="auto" width="80%" color="#FFFFFF">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
      </Flex>
    </Flex>
  );
}
