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

export default function Educations() {
  const { toggleColorMode } = useColorMode();

  return (
    <>
      <Heading padding={6} minWidth="max-content">
        <Center m={2}>Educations</Center>
      </Heading>
    </>
  );
}
