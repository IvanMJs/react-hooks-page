import React, { useState } from "react";
import {
  Flex,
  Text,
  IconButton,
  Divider,
  Icon,
  Heading,
} from "@chakra-ui/react";
import { FiMenu, FiHome, FiCalendar, FiUser } from "react-icons/fi";
import { DiReact, DiGithubBadge } from "react-icons/di";
import { FaHornbill, FaBrain } from "react-icons/fa";
import { GiCandlebright } from "react-icons/gi";
import { AiOutlineExperiment } from "react-icons/ai";
import { SiRedux } from "react-icons/si";
import NavItem from "./NavItem.js";

export default function Sidebar() {
  const [navSize, changeNavSize] = useState("large");

  return (
    <Flex
      pos="sticky"
      left="5"
      h="95vh"
      marginTop="2.5vh"
      boxShadow="0 4px 50px 0 rgba(0, 0, 0, 0.05)"
      borderRadius={navSize == "small" ? "15px" : "30px"}
      w={navSize == "small" ? "75px" : "400px"}
      flexDir="column"
      justifyContent="space-between"
    >
      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize == "small" ? "center" : "flex-start"}
        as="nav"
      >
        <IconButton
          background="none"
          mt={5}
          _hover={{ background: "none" }}
          icon={<FiMenu />}
          onClick={() => {
            if (navSize == "small") changeNavSize("large");
            else changeNavSize("small");
          }}
        />
        <NavItem
          navSize={navSize}
          icon={FiHome}
          title="Home"
          href="/Home/home"
        ></NavItem>
        <NavItem
          navSize={navSize}
          icon={AiOutlineExperiment}
          title="UseState"
          href="/UseState/UseState"
        ></NavItem>

        <NavItem
          navSize={navSize}
          icon={FaHornbill}
          title="UseEffects"
          href="/UseEffects/UseEffects"
          active
        ></NavItem>
        <NavItem
          navSize={navSize}
          icon={FaBrain}
          title="UseMemo"
          href="/UseMemo/UseMemo"
        ></NavItem>
        <NavItem
          navSize={navSize}
          icon={GiCandlebright}
          title="UseReducer"
          href="/UseReducer/UseReducer"
        ></NavItem>
        <NavItem
          navSize={navSize}
          icon={SiRedux}
          title="Redux"
          href="/Redux/Redux"
        ></NavItem>
        <NavItem
          navSize={navSize}
          icon={DiGithubBadge}
          title="Github"
          href="https://github.com/IvanMJs/react-hooks-page"
        ></NavItem>
      </Flex>
      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize == "small" ? "center" : "flex-start"}
        mb={4}
      >
        <Divider display={navSize == "small" ? "none" : "flex"} />
        <Flex mt={4} align="center">
          <DiReact size={40} />
          <Flex
            flexDir="column"
            ml={4}
            display={navSize == "small" ? "none" : "flex"}
          >
            <Heading as="h3" size="sm">
              Iván Meyer
            </Heading>
            <Text color="gray"></Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
