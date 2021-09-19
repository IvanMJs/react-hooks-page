import React from "react";
import { Heading } from "@chakra-ui/react";
export default function Title({title}) {
  return (
    <Heading fontSize="70px" fontFamily="Ink Free" color="#FFFFFF">
      {title}
    </Heading>
  );
}
