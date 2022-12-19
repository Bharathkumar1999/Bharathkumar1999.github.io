import {
  Box,
  HStack,
  VStack,
  Image,
  Text,
  Heading,
  Button,
} from "@chakra-ui/react";
import { FaCloudDownloadAlt } from 'react-icons/fa'
import { BiShowAlt } from 'react-icons/bi';
import { Link } from "react-scroll";
import { Title } from "./Title";

export function Home() {
  return (
    <>
      <Box className="home">
        <HStack
          // border={"1px solid green"}
          justifyContent="space-evenly"
          width="88%"
          margin={"auto"}
          mt="50px"
        >
          <VStack
            //   border={"1px solid red"}
            alignItems={"flex-start"}
          >
            <Text fontSize={{ base: "md", sm: "2xl", md: "4xl" }}>
              Hi <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span> I'm
            </Text>
            <Heading
              fontSize={{ base: "xl", sm: "3xl", md: "6xl" }}
              pt="5px"
              pb="5px"
            >
              Bharath Kumar
            </Heading>
            <Text
              fontSize={{ base: "md", sm: "2xl", md: "4xl" }}
              paddingBottom="-30px"
              color={"orange.400"}
            >
              <Title/>
            </Text>
            <Text
              align={"start"}
              fontSize={{ base: "10px", sm: "15px", md: "sm" }}
              style={{ marginTop: "0px" }}
            >
              Intermediate at - ReactJS, NodeJS, MongoDB. love to play with
              DOMS.
              <br /> Cloning some E-commerse Websites{" "}
            </Text>
            <HStack>
              <Link to="contact">
              <Button
                fontSize={["12px", "12px", "18px"]}
                width={["60px", "60px", "100px"]}
                color={"black"}
                bgColor="blue.300"
                _hover={"none"}
              >
                Hire Me
              </Button>
              </Link>
              <Button
                width={["80px", "80px", "120px"]}
                fontSize={["12px", "12px", "18px"]}
                onClick={() => {
                  return window.open(
                    "https://drive.google.com/file/d/1fTzvRhyUJUGZ_L1w1RyNaiwebrS923By/view?usp=sharing",
                    "_blank"
                  );
                }}
              >
                Resume 
                &nbsp;
                <span><BiShowAlt/></span>
              </Button>
              <Button><a href={require("../files/Bharath-Kumar-Resume.pdf")} download><FaCloudDownloadAlt/></a></Button>
            </HStack>
          </VStack>
          <Box>
            <Image
              src={require("../files/00.jpg")}
              borderRadius="40%"
              width={["200px", "200px", "300px"]}
            />
          </Box>
        </HStack>
      </Box>
    </>
  );
}
