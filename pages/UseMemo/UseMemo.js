import React, { useState, useEffect, useMemo } from "react";
import {
  Flex,
  Input,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import Sidebar from "../../components/Header/Sidebar";

const UseMemoHook = () => {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  /**
   Utilizamos useMemo para memoizar los personajes 
   De Rick y Morty filtrados, para no tener que volver
   a filtrar en caso de que repitamos la búsqueda 
  */
  const filteredUsers = useMemo(
    () =>
      characters.filter((user) => {
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),
    [characters, search]
    //Memoizamos los personajes y el personaje a buscar
  );

  return (
    <Flex>
      <Sidebar />
      <Flex mt="5%" display="-ms-grid" textAlign="center">
        <Text fontSize="50px">UseMemo</Text>
        <Flex>
          <Text margin="auto" width="40%">
            Este hook nos permitirá usar la **memoización** de forma simple, nos
            permite almacenar los resultados de una función. En caso de enviar
            argumentos que hayamos usado con anterioridad, no se harán los
            cálculos otra vez, sino que lo calcule la primera vez, lo registre y
            lo devuelva en caso de que lo necesitemos. Para ello `useMemo`
            recibe dos parámetros, el primero es un **callback** que es donde
            vendrá la lógica que queramos memoizar. El segundo es un **array**
            con las variables que que queramos memoizar.
          </Text>
        </Flex>

        <Flex mt="10%" display="grid">
          <Text>Buscador</Text>
          <Input
            margin="auto"
            maxWidth="80"
            textAlign="center"
            display="flex"
            placeholder="Name"
            size="md"
            type="text"
            value={search}
            onChange={handleSearch}
          />
        </Flex>

        <Flex
          width="60%"
          margin="auto"
          mt="10%"
          height="50vh"
          overflow="scroll"
          variant="simple"
        >
          <Table
            overflow="scroll"
            type="whiteAlpha"
            colorScheme="whiteAlpha"
            variant="simple"
          >
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Status</Th>
                <Th>Gender</Th>
              </Tr>
            </Thead>

            <Tbody>
              {filteredUsers.map((character) => (
                <Tr key={character.id}>
                  <Td>{character.name}</Td>
                  <Td>{character.status}</Td>
                  <Td>{character.gender}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default UseMemoHook;
