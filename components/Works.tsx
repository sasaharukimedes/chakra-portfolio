import NextLink from "next/link";

import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Center,
  Stack,
  Text,
  Button,
  Image,
  Link,
} from "@chakra-ui/react";

import MyIcon from "../public/my-icon.gif";
import Kotonoha from "../public/kotonoha.jpg";
import BlogImage from "../public/blog.jpg";

export default function Works() {
  return (
    <>
      <Heading pt={16} minWidth="max-content">
        <Center m={2}>Works</Center>
      </Heading>
      <Center>
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
          m={10}
          maxW="5xl"
        >
          <Image
            objectFit="cover"
            width={"20%"}
            height={"auto"}
            src={Kotonoha.src}
            alt="kotonoha"
          />

          <Stack>
            <CardBody>
              <Heading size="md">コトノハ</Heading>

              <Text py="2">
                “人の目を気にしなくていい自由なSNS” をコンセプトに作成しました。
                <br />
                Rails x TailwindCSS
                等を使用し作成しています。デプロイはRender.comで行っています。
                <br />
                良ければユーザー登録して遊んでみてください！
                <br />
                現在、フロントをNext.jsに切り替えての実装を考えていますので続報をお待ち下さい!
                <br />
                注:
                Render.comのフリープランのため最初の接続に時間がかかります。ご了承ください。
              </Text>
            </CardBody>

            <CardFooter>
              <Button variant="solid" colorScheme="blue">
                <Link
                  as={NextLink}
                  href="https://gen3-kotonoha.onrender.com/"
                  _hover={{ fontWeight: "bold" }}
                >
                  Click Me!
                </Link>
              </Button>
            </CardFooter>
          </Stack>
        </Card>
      </Center>
      <Center>
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
          m={10}
          maxW="5xl"
        >
          <Image
            objectFit="cover"
            width={"20%"}
            height={"auto"}
            src={BlogImage.src}
            alt="Caffe Latte"
          />

          <Stack>
            <CardBody>
              <Heading size="md">My Updating (b)logs</Heading>

              <Text py="2">
                簡単ですが、自作のブログを作ってみました！（といってもコンセプトは学生時代のままですが。。。）
                <br />
                Deno という環境と fresh というフレームワークで作成しています。
                <br /> デプロイもDeno Deploy を用いています。
                <br />
                microCMS作成した記事を取ってくるようにしています。
                <br />
                こちらも作り替えてる途中です。
              </Text>
            </CardBody>

            <CardFooter>
              <Button variant="solid" colorScheme="blue">
                <Link
                  as={NextLink}
                  href="https://my-updating-logs.deno.dev/"
                  _hover={{ fontWeight: "bold" }}
                >
                  Click Me!
                </Link>
              </Button>
            </CardFooter>
          </Stack>
        </Card>
      </Center>
      <Center>
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
          m={10}
          maxW="5xl"
        >
          <Image
            objectFit="cover"
            width={"20%"}
            height={"auto"}
            src={MyIcon.src}
            alt="Caffe Latte"
          />

          <Stack>
            <CardBody>
              <Heading size="md">このポートフォリオ</Heading>

              <Text py="2">
                自分のプログラミング活動まとめ用にこのポートフォリオを作成しました。
                <br />
                Typescript x Next.js x ChakraUI を使って作成しています。
                <br />
                デプロイは、Vercel で行っています。
                <br />
                これから、更に内容とポートフォリオ自体を充実させるべくアップデートしていきたいと思います。
              </Text>
            </CardBody>
          </Stack>
        </Card>
      </Center>
    </>
  );
}
