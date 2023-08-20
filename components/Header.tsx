"use client";

import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  useColorMode,
  Center,
} from "@chakra-ui/react";

export default function Header() {
  const { toggleColorMode } = useColorMode();

  return (
    <>
      <Heading padding={6} minWidth="max-content">
        <Center m={2}>{`I'm Harukimedes!`}</Center>
      </Heading>
      <Flex justifyContent="flex-end">
        <Button onClick={toggleColorMode}>Change Color Mode</Button>
      </Flex>
    </>
  );
}
