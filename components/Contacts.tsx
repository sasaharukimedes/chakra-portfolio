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

export default function Contacts() {
  const { toggleColorMode } = useColorMode();

  return (
    <>
      <Flex direction="column" padding={5} rounded={6}>
        <Heading mb={2}>Contact</Heading>

        <Input
          placeholder="sample@sample.com"
          variant="filled"
          mb={3}
          type="email"
        />

        <Input placeholder="********" variant="filled" mb={6} type="password" />

        <Button mb={6} colorScheme="teal">
          Contact Me!
        </Button>

        <Button onClick={toggleColorMode}>Toggle Color Mode</Button>
      </Flex>
    </>
  );
}
