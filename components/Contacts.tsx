import {
  Button,
  Flex,
  Heading,
  Input,
  Center,
  Text,
  VStack,
  Textarea,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

import { useForm } from "@formspree/react";

export default function Contacts() {
  const [state, handleSubmit] = useForm("xdorgaak");
  if (state.succeeded) {
    return (
      <Center>
        <Text>
          お問い合わせありがとうございます。
          <br />
          返信をしばらくお待ち下さい。
        </Text>
      </Center>
    );
  }

  return (
    <>
      <Flex direction="column" padding={5} rounded={6}>
        <Heading mb={2}>
          <Center m={2}>Contact</Center>
        </Heading>

        <VStack justify="center" align="center">
          <form onSubmit={handleSubmit}>
            <FormControl onSubmit={handleSubmit}>
              <FormLabel htmlFor="name">お名前</FormLabel>
              <Input id="name" type="text" name="name" required={true} />
              <FormLabel htmlFor="email" mt={4}>
                メールアドレス
              </FormLabel>
              <Input id="email" type="email" name="email" required={true} />
              <FormLabel htmlFor="message" mt={4}>
                お問い合わせ内容
              </FormLabel>
              <Textarea id="message" name="message" required={true} />
              <Button type="submit" disabled={state.submitting} mt={4}>
                送信{" "}
              </Button>{" "}
            </FormControl>
          </form>
        </VStack>

        {/* <h1>お問い合わせ</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">お名前</label>
          <input id="name" type="text" name="name" required={true} />
          <label htmlFor="email">メールアドレス</label>
          <input id="email" type="email" name="email" required={true} />
          <label htmlFor="message">内容</label>
          <textarea id="message" name="message" required={true} />
          <button type="submit" disabled={state.submitting}>
            送信
          </button>
        </form> */}
      </Flex>
    </>
  );
}
