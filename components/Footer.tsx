"use client";

import {
  Box,
  Button,
  Flex,
  Heading,
  useColorMode,
  Center,
} from "@chakra-ui/react";

export default function Footer() {
  return (
    <>
      <Center padding={3}>
        <Heading m={2} size="md">
          Copyright © 2023 Harukimdes
          <br />
          All right reserved.
        </Heading>
      </Center>
    </>
  );
}
