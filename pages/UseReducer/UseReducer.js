import React, { useState, useEffect, useReducer } from "react";
import { Button, Flex, Stack, Text } from "@chakra-ui/react";
import Sidebar from "../../components/Header/Sidebar";

const initialState = {
  favorites: [],
};

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case "REMOVE_TO_FAVORITE":
      return {
        favorites: state.favorites.filter(
          (_, character) => character !== action.payload.id
        ),
      };
    default:
      return state;
  }
};
//state.favorites.filter((_, character) => character != action.payload.id)

const UseReducers = () => {
  const [characters, setCharacters] = useState([]);
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  const handleClick = (favorite) => {
    dispatch({ type: "ADD_TO_FAVORITE", payload: favorite });
  };

  const removeCharacter = (favorite) => {
    dispatch({ type: "REMOVE_TO_FAVORITE", payload: favorite });
  };

  return (
    <Flex>
      <Sidebar />
      <Flex mt="10%" display="-ms-grid" textAlign="center">
        <Text fontSize="50px">UseReducer</Text>
        <Text margin="auto" width="40%">
          Es similar a `useState` pero más escalable, además trabaja de manera
          muy similar a como lo hace **Redux**. Al igual que en **Redux**
          necesitamos crear un **initialState**, un **reducer** y un **action**.
          Veamos como crear el **initialState** y el **reducer**. Para ello
          usaremos el hook `useReducer` para añadir los personajes de Rick y
          Morty que queramos a favoritos.
        </Text>
        <Flex
          height="30vh"
          overflow="scroll"
          display="grid"
          width="30%"
          margin="auto"
          mt="5%"
          background="whiteAlpha.100"
        >
          {favorites.favorites.map((favorite) => (
            <Text color="linkedin.400" mt="3%" as="u" key={favorite.id}>
              {favorite.name}
            </Text>
          ))}
        </Flex>
        {characters
          .map((character) => (
            <Flex display="-ms-grid" textAlign="center" key={character.id}>
              <Stack
                mt="5%"
                spacing={4}
                direction="row"
                justifyContent="center"
              >
                <Button type="button" onClick={() => handleClick(character)}>
                  Agregar a Favoritos
                </Button>
                <Button
                  type="button"
                  onClick={() => removeCharacter(character)}
                >
                  Borrar de Favoritos
                </Button>
              </Stack>
            </Flex>
          ))
          .slice(0, 1)}
      </Flex>
    </Flex>
  );
};

export default UseReducers;
