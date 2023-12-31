"use client";

import { Button, Flex, Heading, useColorMode, Center } from "@chakra-ui/react";

export default function Header() {
  const { toggleColorMode } = useColorMode();

  return (
    <>
      <Heading padding={6} minWidth="max-content">
        <Center m={2}>{`I'm Harukimedes!`}</Center>
      </Heading>
      <Flex justifyContent="flex-end" m={4}>
        <Button onClick={toggleColorMode}>Change Color Mode</Button>
      </Flex>
    </>
  );
}
