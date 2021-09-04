import React, { useState } from "react";
import {
  Flex,
  Text,
  IconButton,
  Divider,
  Avatar,
  Heading,
} from "@chakra-ui/react";
import {
  FiMenu,
  FiHome,
  FiCalendar,
  FiUser,
  FiDollarSign,
  FiBriefcase,
  FiSettings,
} from "react-icons/fi";
import { IoPawOutline } from "react-icons/io5";
import NavItem from "./NavItem.js";
import Logo from "../../public/avatar-1.jpg"

export default function Sidebar() {
  const [navSize, changeNavSize] = useState("large");

  return (
    <Flex
      pos="sticky"
      left="5"
      h="95vh"
      marginTop="2.5vh"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      borderRadius={navSize == "small" ? "15px" : "30px"}
      w={navSize == "small" ? "75px" : "200px"}
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
          title="UseState"
          href="/UseState/UseState"
        ></NavItem>

        <NavItem
          navSize={navSize}
          icon={FiCalendar}
          title="UseEffects"
          href="/UseEffects/UseEffects"
          active
        ></NavItem>
        <NavItem
          navSize={navSize}
          icon={FiUser}
          title="UseMemo"
          href="/UseMemo/UseMemo"
        ></NavItem>
        <NavItem
          navSize={navSize}
          icon={IoPawOutline}
          title="UseReducer"
          href="/UseReducer/UseReducer"
        ></NavItem>
        {/* <NavItem navSize={navSize} icon={FiDollarSign} title="Stocks" ></NavItem>
        <NavItem navSize={navSize} icon={FiBriefcase} title="Reports" ></NavItem>
        <NavItem navSize={navSize} icon={FiSettings} title="Settings" ></NavItem> */}
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
          <Avatar size="sm" src={Logo} />
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
