import React from "react";
import Link from "next/link";
import {
  Flex,
  Text,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  //Link,
} from "@chakra-ui/react";
import NavHoverBox from "./NavHoverBox";

export default function NavItem({
  icon,
  title,
  active,
  navSize,
  href,
}) {
  return (
    <Flex
      mt={30}
      flexDir="column"
      w="100%"
      alignItems={navSize == "small" ? "center" : "flex-start"}
    >
      <Menu placement="right">
        <Link
          backgroundColor={active && "#AEC8CA"}
          p={3}
          borderRadius={8}
          _hover={{ textDecor: "none", backgroundColor: "#AEC8CA" }}
          w={navSize == "large" && "100%"}
          href={href}
          passHref
        >
          <MenuButton w="100%">
            <Flex>
              <Icon
                as={icon}
                fontSize="xl"
                color={active ? "blue.700" : "red.700"}
              />
              <Text color="#FFFFFF" ml={5} display={navSize == "small" ? "none" : "flex"}>
                {title}
              </Text>
            </Flex>
          </MenuButton>
        </Link>
        <MenuList py={0} border="none" w={200} h={200} ml={5}>
          <NavHoverBox title={title} icon={icon} />
        </MenuList>
      </Menu>
    </Flex>
  );
}
