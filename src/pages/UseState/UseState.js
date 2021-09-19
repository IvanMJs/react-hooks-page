import { Flex, Text} from "@chakra-ui/react";
import React from "react";
import CounterUseState from "../../components/cards/CounterUseState";
import Sidebar from "../../components/Sidebar/Sidebar";
import Title from "../../components/title/Title";


const UseStateHook = () => {
  return (
    <Flex>
      <Sidebar />
      <Flex mt="5%" display="-ms-grid" textAlign="center">
        <Title
        title="UseState"
        >       
        </Title>
        <Flex mt="10%">
          <Text fontSize="3xl" margin="auto" width="80%" color="#FFFFFF">
            Estr hook nos permite manejar estado dentro de un Componente
            Funcional, es quizás uno de los hooks más usados. Además es fácil de
            usar, desectructuramos 2 elementos de useState, el nombre-del-estado
            y la-funcion-que-cambia-el-estado, y como parámetro le pasamos el
            valor inicial del estado que hemos declarado.
          </Text>
        </Flex>
        <CounterUseState />
      </Flex>
    </Flex>
  );
};

export default UseStateHook;
