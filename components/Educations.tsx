import {
  Heading,
  Center,
  ListItem,
  UnorderedList,
  Text,
} from "@chakra-ui/react";

export default function Educations() {
  return (
    <>
      <Heading padding={6} minWidth="max-content">
        <Center m={2}>Educations</Center>
      </Heading>
      <Center>
        <Text fontSize="lg" fontWeight="semibold">
          <UnorderedList>
            <ListItem>1995年7月9日 生誕</ListItem>
            <ListItem>2011年 函館ラ・サール高校 入学</ListItem>
            <ListItem>2014-2015年 1年間浪人</ListItem>
            <ListItem>2015年 明治大学国際日本学部 入学</ListItem>
            <ListItem>卒業後、フリーターやらサラリーマンやら。。。</ListItem>
          </UnorderedList>
        </Text>
      </Center>
    </>
  );
}
