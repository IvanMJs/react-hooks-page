import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar/Sidebar";

export default function Example({}) {
  return (
    <Flex>
      <Sidebar />
      <Flex  display="-ms-grid" textAlign="center" margin="auto">
        <Text
          fontFamily="sans-serif"
          fontSize="72px"
          color="linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(149,18,18,1) 94%)"
        >
          Redux
        </Text>
        <Flex display="grid" mt="10%">
          <Text color="linkedin.600" fontSize="3xl" margin="auto" width="80%">
            Very Soon!!! :D
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
