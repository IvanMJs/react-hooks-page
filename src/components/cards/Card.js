import React, { useState } from "react";

import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Button,
} from "@chakra-ui/react";

const IMAGE =
  "https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80";

export default function ProductSimple() {
  const [count, setCount] = useState(0);
  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue(
          "white",
          "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(18,67,149,1) 94%)"
        )}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            Numero: {count}
          </Heading>
        </Box>
        <Stack color="#7de6ce" mt="10%" pt={10} align={"center"}>
          <Stack direction={"row"} align={"center"}>
            <Button onClick={() => setCount(count + 1)}>Sum</Button>
            <Button onClick={() => setCount(count - 1)}>Rest</Button>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
