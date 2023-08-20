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
        <Heading mb={2}>
          <Center m={2}>Contact</Center>
        </Heading>

        <Input placeholder="John Doe" variant="filled" mb={3} type="name" />

        <Input
          placeholder="YourEmailAddress@sample.com"
          variant="filled"
          mb={3}
          type="email"
        />

        <Input
          placeholder="お問い合わせ内容はこちらにお願いします。"
          variant="filled"
          mb={6}
          type="content"
        />

        <Button mb={6} colorScheme="teal">
          Contact Me!
        </Button>

        <Button onClick={toggleColorMode}>Change Color Mode</Button>
      </Flex>
    </>
  );
}
