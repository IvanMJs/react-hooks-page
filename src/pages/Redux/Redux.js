import React from "react";
import { Flex, Text, Heading } from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Title from "../../components/title/Title";
import CounterRedux from "../../components/cards/CounterRedux";

export default function Example({}) {
  return (
    <Flex>
      <Sidebar />
      <Flex display="-ms-grid" textAlign="center" margin="auto">
        <Title title="Redux"></Title>
        <Flex display="grid" mt="10%">
          <Text color="linkedin.600" fontSize="3xl" margin="auto" width="80%">
            Redux es una herramienta que nos permite manejar el estado global de
            una aplicación y mantenerlo en un solo sitio, sigue el patrón de
            diseño Flux.
            Acá un simple ejemplo de redux:
          </Text>

          <CounterRedux />
        </Flex>
      </Flex>
    </Flex>
  );
}
