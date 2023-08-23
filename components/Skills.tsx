import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  useColorMode,
  Center,
  VStack,
  Spacer,
  Text,
} from "@chakra-ui/react";

import {
  SiRuby,
  SiRubyonrails,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiTypescript,
  SiReact,
  SiGithub,
  SiRender,
  SiHeroku,
  SiDeno,
  SiChakraui,
  SiJavascript,
  SiLinux,
} from "react-icons/si";

import { TbBrandNextjs, TbLemon2 } from "react-icons/tb";

export default function Skills() {
  const { toggleColorMode } = useColorMode();

  return (
    <>
      <Heading padding={6}>
        <Center m={2}>Skills</Center>
      </Heading>
      <Center p={2}>
        <Box>
          <Center>
            <Heading size="lg">Programming Languages</Heading>
          </Center>
          <Flex direction={"row"} pt={8} justifyContent="center">
            <SiRuby size="40px" />
            <Spacer />
            <SiTypescript size="40px" />
            <Spacer />
            <SiJavascript size="40px" />
          </Flex>
          <Center>
            <Heading size="lg" pt={10}>
              Libraries and Frameworks
            </Heading>
          </Center>
          <Flex direction={"row"} pt={8} justifyContent="center">
            <SiRubyonrails size="40px" m={4} />
            <Spacer />
            <SiReact size="40px" m={4} />
            <Spacer />
            <TbBrandNextjs size="40px" m={4} />
            <Spacer />
            <SiTailwindcss size="40px" m={4} />
            <Spacer />
            <SiChakraui size="40px" m={4} />
            <Spacer />
            <SiBootstrap size="40px" m={4} />
            <Spacer />
            <SiDeno size="40px" m={4} />
            <Spacer />
            <TbLemon2 size="40px" m={4} />
          </Flex>
          <Center>
            <Heading size="lg" pt={10}>
              Further knowledges
            </Heading>
          </Center>
          <Flex direction={"row"} pt={8} justifyContent="center">
            <SiHtml5 size="40px" m={4} />
            <Spacer />
            <SiCss3 size="40px" m={4} />
            <Spacer />
            <SiGithub size="40px" m={4} />
            <Spacer />
            <SiRender size="40px" m={4} />
            <Spacer />
            <SiHeroku size="40px" m={4} />
            <Spacer />
            <SiLinux size="40px" m={4} />
          </Flex>
        </Box>
      </Center>
    </>
  );
}
