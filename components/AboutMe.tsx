import {
  Box,
  Heading,
  Center,
  Image,
  Text,
  Stack,
  Tooltip,
  Link,
  Flex,
} from "@chakra-ui/react";

import { SiGithub } from "react-icons/si";

import MyIcon from "../public/my-icon.gif";

export default function AboutMe() {
  return (
    <>
      <Heading padding={6} minWidth="max-content">
        <Center m={2}>About Me!</Center>
      </Heading>
      <Box>
        <Center>
          <Image
            borderRadius="full"
            boxSize="250px"
            src={MyIcon.src}
            alt="my icon"
            mx={1}
          />
        </Center>
        <Flex justify="center" align="center" py={3}>
          <Tooltip label="My Github" fontSize="md">
            <span>
              <Link href="https://github.com/sasaharukimedes">
                <SiGithub size="40px" />
              </Link>
            </span>
          </Tooltip>
        </Flex>
        <Box flex="1">
          <Stack spacing={2}>
            <Text fontSize={"lg"} fontWeight="semibold" p={5}>
              僕のポートフォリオへようこそ！
              <br />
              僕はハルキメデスと言います。1995年に北海道は函館で生まれた、現在28歳です。
              <br />
              趣味は、ゲーム、映画、漫画、筋トレ、スポーツ、読書、カラオケなどです。
              <br />
              僕は好奇心が旺盛で、何かしらハマっている対象があります。
              プログラミング活動自体は学生時に少し触っていましたが、チュートリアルを終えた後に特に作りたいものもなく何もしていませんでした。
              <br />
              しかし、ふと作ってみたいものがひらめいてしまったので再度勉強し直しながら、作ってみた次第です。
              <br />
              そして、もっと自分の作ってみたいものを作ったり、あるいは表現したいものを表現できるように、
              <br />
              人としてもプログラマとしても、スキルアップできるよう転職活動をしてみようと思い、このポートフォリオの作成を始めました。
            </Text>
          </Stack>
        </Box>
      </Box>
    </>
  );
}
