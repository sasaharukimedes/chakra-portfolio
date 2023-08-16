"use client";

import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  useColorMode,
} from "@chakra-ui/react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AboutMe from "../../components/AboutMe";
import Educations from "../../components/Educatrions";
import Skills from "../../components/Skills";
import Works from "../../components/Works";
import Contacts from "../../components/Contacts";

export default function Home() {
  return (
    <Box background="gray.200" h="100vh">
      <Header />
      <AboutMe />
      <Educations />
      <Skills />
      <Works />
      <Contacts />
      <Footer />
    </Box>
  );
}
