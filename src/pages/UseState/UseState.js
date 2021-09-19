import { Button, Flex, Text, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import ProductSimple from "../../components/cards/Card";
import Sidebar from "../../components/Sidebar/Sidebar";

const UseStateHook = () => {
  /**
   Usamos count y setCount inicializado en 0 y en el onclick
   lo vamos seteando al count para que sume o reste
  */
  // const [darkMode, setDarkMode] = useState(false);

  // const { colorMode, toggleColorMode } = useColorMode();

  // };

  return (
    <Flex>
      <Sidebar />
      <Flex mt="5%" display="-ms-grid" textAlign="center">
        <Heading
          
          fontSize="70px"
          fontFamily="Ink Free"
          color="#FFFFFF"
        >
          UseState
        </Heading>
        <Flex mt="10%">
          <Text fontSize="3xl" margin="auto" width="80%" color="#FFFFFF">
            Estr hook nos permite manejar estado dentro de un Componente
            Funcional, es quizás uno de los hooks más usados. Además es fácil de
            usar, desectructuramos 2 elementos de useState, el nombre-del-estado
            y la-funcion-que-cambia-el-estado, y como parámetro le pasamos el
            valor inicial del estado que hemos declarado.
          </Text>
        </Flex>
        <ProductSimple />
      </Flex>
    </Flex>
  );
};

export default UseStateHook;
