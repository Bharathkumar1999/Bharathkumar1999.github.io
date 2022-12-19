import {
  Box,
  Container,
  Flex,
  Heading,
  Table,
  Td,
  Th,
  Tr,
} from "@chakra-ui/react";
import "aos/dist/aos.css";


export function About() {
    
  return (
    <>
      <Heading textAlign={"center"}mb={"25px"}  >
        ABOUT ME
      </Heading>
      <Flex
        justifyContent={["center", "center", "space-evenly"]}
        alignItems="center"
        direction={["column", "column", "row"]}
        gap="50px"
        // border={"1px solid green"}
      >
        <Box>
        <Table
          variant="simple"
          size={"md"}
          width={["12rem", "32rem", "32rem"]}
          className="aboutTable"
          margin="auto"
          data-aos="zoom-in-right"
        >
          <Tr>
            <Th>Name</Th>
            <Td>Bharath Kumar</Td>
          </Tr>
          <Tr>
            <Th>Date of birth</Th>
            <Td>10 December, 1999</Td>
          </Tr>
          <Tr>
            <Th>Higher Education</Th>
            <Td>B.Tech (Mechanical Engineering)</Td>
          </Tr>
          <Tr>
            <Th>Address</Th>
            <Td>
              14, Parthasarathy Nagar, Second Street, Adambakkam <br /> Chennai, T.N.
              India.
            </Td>
          </Tr>
          <Tr>
            <Th>Pincode</Th>
            <Td>600088</Td>
          </Tr>
          <Tr>
            <Th>Contact NO.</Th>
            <Td>9080185567</Td>
          </Tr>
          <Tr>
            <Th>Email ID</Th>
            <Td>bharathabdeviellers@gmail.com</Td>
          </Tr>
        </Table>
        </Box>
        <Box>
          <Container
            textAlign={"justify"}
            maxHeight={["20rem", "20rem", "33rem"]}
            overflowY={["scroll", "scroll", "hidden"]}
            p={"0px 20px 0px 20px"}
            data-aos="zoom-in-left"
          >
            Hello, I am Bharath Kumar from Chennai. I graduated in B.Tech
            Mechanical Engineering in 2021 from Prince Shri Venkateswara Padmavathy Engineering College.
            During my engineering, I was part of a team that was
            building a platform for placement services. This exposure excited me
            and I was keen to build a career in coding. But I didn't have
            relevant skills. So, I joined Masai school, which offers a 30-week
            of full-time course on a full-stack web development program. At
            Masai school, we get hands-on experience to learn front-end and
            back-end technologies. And also works 600 hours of coding and 60
            hours of building logical abilities and builds a minimum of 5-6
            collaborative projects. About my family, my father is a engineer
            in a pharma company and mother is a housemaker and my younger
            sister is studying engineering. My hobbies and leisure interests include
            playing chess. I have been a winner in my college. And have a keen
            interest in watching documentary movies.
          </Container>
        </Box>
      </Flex>
    </>
  );
}
