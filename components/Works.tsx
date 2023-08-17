import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Center,
  Stack,
  StackDivider,
  Box,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";

export default function Works() {
  return (
    <>
      <Heading padding={6} minWidth="max-content">
        <Center m={2}>Works</Center>
      </Heading>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        m={5}
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
          alt="Caffe Latte"
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
            </Text>
          </CardBody>

          <CardFooter>
            <Button variant="solid" colorScheme="blue">
              Click me!
            </Button>
          </CardFooter>
        </Stack>
      </Card>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        m={5}
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
          alt="Caffe Latte"
        />

        <Stack>
          <CardBody>
            <Heading size="md">My Updating (b)logs</Heading>

            <Text py="2">
              簡単ですが、自作のブログを作ってみました！（といってもコンセプトは学生時代のままですが。。。）
              <br />
              元々気になっていた Deno という環境と fresh
              というフレームワークで作成しています。
              <br /> デプロイもDeno Deploy を用いています。
              <br />
              microCMS作成した記事を取ってくるようにしています。
              <br />
              個人的に考えていることなんかを書いていますので、気になった方は読んでみてください。
            </Text>
          </CardBody>

          <CardFooter>
            <Button variant="solid" colorScheme="blue">
              Click me!
            </Button>
          </CardFooter>
        </Stack>
      </Card>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        m={5}
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
          alt="Caffe Latte"
        />

        <Stack>
          <CardBody>
            <Heading size="md">ポートフォリオ</Heading>

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

          <CardFooter>
            <Button variant="solid" colorScheme="blue">
              Click me!
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </>
  );
}
