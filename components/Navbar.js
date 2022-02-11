import React from "react";
import NextLink from "next/link";
import {
  Box,
  Stack,
  Heading,
  Flex,
  Link,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

import { HiMenu } from "react-icons/hi";

const Navbar = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={6}
      bg="teal.500"
      color="white"
      {...props}
      mb="20"
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          <NextLink href="/" passHref>
            <Link
              style={{ textDecoration: "none" }}
              _hover={{
                background: "transparent",
                color: "white",
                textShadow: "2px 2px black",
              }}
            >
              DropFriends
            </Link>
          </NextLink>
        </Heading>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <HiMenu cursor="pointer" />
      </Box>

      <Stack
        direction={{ base: "column", md: "row" }}
        display={{ base: isOpen ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
        mt={{ base: 4, md: 0 }}
      >
        <NextLink href="/server-side" passHref>
          <Link
            pr="20px"
            style={{ textDecoration: "none" }}
            _hover={{
              background: "transparent",
              color: "white",
              textShadow: "2px 2px black",
            }}
          >
            Server-Side
          </Link>
        </NextLink>
        <NextLink href="/client-side" passHref>
          <Link
            style={{ textDecoration: "none" }}
            _hover={{
              background: "transparent",
              color: "white",
              textShadow: "1px 1px black",
            }}
          >
            Client-Side
          </Link>
        </NextLink>
      </Stack>

      <Box
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        <Button
          variant="outline"
          _hover={{ bg: "teal.700", borderColor: "teal.700" }}
        >
          <NextLink href="/sign-in" passHref>
            <Link
              style={{ textDecoration: "none" }}
              _hover={{
                background: "transparent",
                color: "white",
                textShadow: "2px 2px black",
              }}
            >
              Sign In!
            </Link>
          </NextLink>
        </Button>
      </Box>
    </Flex>
  );
};

export default Navbar;
