import Head from "next/head";
import styles from "../styles/Home.module.css";
import { gql } from "@apollo/client";
import client from "../apollo-client";
import { SiNextdotjs, SiApollographql, SiChakraui } from "react-icons/si";

import {
  Heading,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Tooltip,
  Flex,
  Box,
  Container,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Home({ countries }) {
  const {
    isOpen: isOpenNext,
    onOpen: onOpenNext,
    onClose: onCloseNext,
  } = useDisclosure();
  const {
    isOpen: isOpenApollo,
    onOpen: onOpenApollo,
    onClose: onCloseApollo,
  } = useDisclosure();
  const {
    isOpen: isOpenChakra,
    onOpen: onOpenChakra,
    onClose: onCloseChakra,
  } = useDisclosure();

  return (
    <Container maxW="container.xl" centerContent minH="100vh">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex flexDirection="column" alignItems="center" margin="auto">
        <Heading as="h3" fontWeight="500" size="3xl" mb="5">
          Static Info
        </Heading>

        <Flex>
          This project was made with
          <Tooltip label="mehr über Nextjs" placement="left-start">
            <Box mx="2" alignSelf="center">
              <SiNextdotjs m="2" cursor="pointer" onClick={onOpenNext} />
            </Box>
          </Tooltip>
          Nextjs ,
          <Tooltip label="mehr über ApolloClient" placement="left-start">
            <Box mx="2" alignSelf="center">
              <SiApollographql
                m="2"
                cursor="pointer"
                color="blue"
                onClick={onOpenApollo}
              />
            </Box>
          </Tooltip>
          Apollo Client and
          <Tooltip label="mehr über Chakra UI" placement="left-start">
            <Box mx="2" alignSelf="center">
              <SiChakraui
                m="2"
                cursor="pointer"
                color="teal"
                onClick={onOpenChakra}
              />
            </Box>
          </Tooltip>
          Chakra UI
        </Flex>

        <Modal
          isOpen={isOpenNext}
          onClose={onCloseNext}
          size="xs"
          motionPreset="slideInBottom"
          isCentered
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Was ist Nextjs?</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              Nextjs ist ein React-Framework für die Entwicklung von einseitigen
              Javascript-App.
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onCloseNext}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Modal
          isOpen={isOpenApollo}
          onClose={onCloseApollo}
          motionPreset="slideInBottom"
          isCentered
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Was ist Apollo Client?</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              Apollo Client ist eine umfassende State-Management-Library für
              JavaScript, mit der Sie sowohl lokale als auch entfernte Daten mit
              GraphQL verwalten können. Verwenden Sie es zum Abrufen,
              Zwischenspeichern und Ändern von App-data, während Sie Ihre User
              Interface automatisch aktualisieren.
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onCloseApollo}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Modal
          isOpen={isOpenChakra}
          onClose={onCloseChakra}
          motionPreset="slideInBottom"
          isCentered
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Was ist Chakra UI?</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              Chakra UI ist eine einfache, modulare und zugängliche
              Komponentenlibrary, die Ihnen die Bausteine bietet, die Sie für
              die Erstellung Ihrer React-App benötigen
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onCloseChakra}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <div className={styles.grid}>
          {countries.map((country) => (
            <div key={country.code} className={styles.card}>
              <h3>
                <a
                  href="#country-name"
                  aria-hidden="true"
                  className="aal_anchor"
                  id="country-name"
                ></a>
                {country.name}
              </h3>
              <p>
                {country.code} - {country.emoji}
              </p>
            </div>
          ))}
        </div>
      </Flex>

      <Box
        bg={useColorModeValue("gray.50", "gray.900")}
        color={useColorModeValue("gray.700", "gray.200")}
      >
        <Container
          as={Stack}
          maxW="9xl"
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing="4"
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>© 2022 DropFriends Templates. All rights reserved</Text>
        </Container>
      </Box>
    </Container>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Countries {
        countries {
          code
          name
          emoji
        }
      }
    `,
  });

  return {
    props: {
      countries: data.countries.slice(0, 4),
    },
  };
}
