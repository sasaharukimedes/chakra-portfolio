import { Box, Flex, Heading, Center, Spacer, Tooltip } from "@chakra-ui/react";

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
  SiVercel,
} from "react-icons/si";

import { TbBrandNextjs, TbLemon2 } from "react-icons/tb";

export default function Skills() {
  return (
    <>
      <Heading pt={16}>
        <Center m={2}>Skills</Center>
      </Heading>
      <Heading size="sm">
        <Center m={2}>~Still Learning~</Center>
      </Heading>
      <Center p={2}>
        <Box>
          <Center>
            <Heading size="lg" pt={4}>
              Programming Languages
            </Heading>
          </Center>
          <Flex direction={"row"} pt={4} justifyContent="center">
            <Tooltip label="Ruby" fontSize="md">
              <span>
                <SiRuby size="40px" />
              </span>
            </Tooltip>
            <Spacer />
            <Tooltip label="Typescript" fontSize="md">
              <span>
                <SiTypescript size="40px" />
              </span>
            </Tooltip>
            <Spacer />
            <Tooltip label="Javascript" fontSize="md">
              <span>
                <SiJavascript size="40px" />
              </span>
            </Tooltip>
          </Flex>
          <Center>
            <Heading size="lg" pt={14}>
              Libraries and Frameworks
            </Heading>
          </Center>
          <Flex direction={"row"} pt={4} justifyContent="center">
            <Tooltip label="Ruby on Rails" fontSize="md">
              <span>
                <SiRubyonrails size="40px" m={4} />
              </span>
            </Tooltip>
            <Spacer />
            <Tooltip label="React.js" fontSize="md">
              <span>
                <SiReact size="40px" m={4} />
              </span>
            </Tooltip>
            <Spacer />
            <Tooltip label="Next.js" fontSize="md">
              <span>
                <TbBrandNextjs size="40px" m={4} />
              </span>
            </Tooltip>
            <Spacer />
            <Tooltip label="TailwindCSS" fontSize="md">
              <span>
                <SiTailwindcss size="40px" m={4} />
              </span>
            </Tooltip>
            <Spacer />
            <Tooltip label="ChakraUI" fontSize="md">
              <span>
                <SiChakraui size="40px" m={4} />
              </span>
            </Tooltip>
            <Spacer />
            <Tooltip label="Bootstrap" fontSize="md">
              <span>
                <SiBootstrap size="40px" m={4} />
              </span>
            </Tooltip>
            <Spacer />
            <Tooltip label="Deno" fontSize="md">
              <span>
                <SiDeno size="40px" m={4} />
              </span>
            </Tooltip>
            <Spacer />
            <Tooltip label="Fresh" fontSize="md">
              <span>
                <TbLemon2 size="40px" m={4} />
              </span>
            </Tooltip>
          </Flex>
          <Center>
            <Heading size="lg" pt={14}>
              Further knowledges
            </Heading>
          </Center>
          <Flex direction={"row"} pt={4} justifyContent="center">
            <Tooltip label="HTML5" fontSize="md">
              <span>
                <SiHtml5 size="40px" m={4} />
              </span>
            </Tooltip>
            <Spacer />
            <Tooltip label="CSS3" fontSize="md">
              <span>
                <SiCss3 size="40px" m={4} />
              </span>
            </Tooltip>
            <Spacer />
            <Tooltip label="Github" fontSize="md">
              <span>
                <SiGithub size="40px" m={4} />
              </span>
            </Tooltip>
            <Spacer />
            <Tooltip label="Render" fontSize="md">
              <span>
                <SiRender size="40px" m={4} />
              </span>
            </Tooltip>
            <Spacer />
            <Tooltip label="Heroku" fontSize="md">
              <span>
                <SiHeroku size="40px" m={4} />
              </span>
            </Tooltip>
            <Spacer />
            <Tooltip label="Linux" fontSize="md">
              <span>
                <SiLinux size="40px" m={4} />
              </span>
            </Tooltip>
            <Spacer />
            <Tooltip label="Vercel" fontSize="md">
              <span>
                <SiVercel size="40px" m={4} />
              </span>
            </Tooltip>
          </Flex>
        </Box>
      </Center>
    </>
  );
}
