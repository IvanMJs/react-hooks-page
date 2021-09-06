import { Button, Flex, Text, Stack } from "@chakra-ui/react";
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
        <Text
          fontFamily="sans-serif"
          fontSize="72px"
          color="linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(149,18,18,1) 94%)"
        >
          UseState
        </Text>
        <Flex mt="10%">
          <Text color="linkedin.600" fontSize="3xl" margin="auto" width="80%">
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
