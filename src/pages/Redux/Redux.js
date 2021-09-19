import React from "react";
import { Flex, Text, Heading } from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Title from "../../components/title/Title";

export default function Example({}) {
  return (
    <Flex>
      <Sidebar />
      <Flex display="-ms-grid" textAlign="center" margin="auto">
        <Title title="Redux"></Title>
        <Flex display="grid" mt="10%">
          <Text color="linkedin.600" fontSize="3xl" margin="auto" width="80%">
            Very Soon!!! :D
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
