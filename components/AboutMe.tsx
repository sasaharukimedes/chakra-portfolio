import {
  Box,
  Heading,
  Center,
  Image,
  Stack,
  Tooltip,
  Link,
  Flex,
  Container,
} from "@chakra-ui/react";

import { SiGithub, SiZenn } from "react-icons/si";

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
        <Flex justify="center" align="center" p={3}>
          <Tooltip label="My Github" fontSize="md" p={2}>
            <span>
              <Link href="https://github.com/sasaharukimedes">
                <SiGithub size="40px" />
              </Link>
            </span>
          </Tooltip>
          <Tooltip label="My Zenn" fontSize="md" p={2}>
            <span>
              <Link href="https://zenn.dev/sasaharumedes">
                <SiZenn size="40px" />
              </Link>
            </span>
          </Tooltip>
        </Flex>
        <Box flex="1">
          <Stack spacing={2}>
            <Container fontSize={"lg"} fontWeight="semibold">
              僕のポートフォリオへようこそ！
              <br />
              僕はハルキメデスと言います。
              <br />
              1995年に北海道は函館で生まれた、現在28歳です。
              <br />
              高校までは水泳とハンドボールをずっとやっていました。
              <br />
              大学では、ゼミに2つ入り「国際政治経済」と「テクノロジーと社会システム」について勉強していました。
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
            </Container>
          </Stack>
        </Box>
      </Box>
    </>
  );
}
