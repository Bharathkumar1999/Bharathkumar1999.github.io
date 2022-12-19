import { Heading, VStack } from "@chakra-ui/react";
import { ProjectCard } from "./ProjectCard";
import GitHubCalendar from "react-github-calendar";

const data = [
  {
    title: "YOOX",
    desc: "Discover a wide array of products by the best Italian and international designers on YOOX",
    techStack:
      "HTML | CSS | JS ",
    feature:
      "Sign In, Sign Up, Product Page & Dynamic Cart Page, Single Page Website, Responsive for all devices",
    img: "Screenshot (222).png",
    clone: "https://github.com/Sukhmani-Kaur1/yoox_clone",
    deploy: "https://resilient-basbousa-73fa6c.netlify.app/index.html",
  },
  {
    title: "CRONOMETER",
    desc: "Discover your nutrition · Cronometer encourages you to not just count your calories but to focus on your nutrition as a whole.",
    techStack: "HTML | CSS | JS | Browser Local Storage",
    feature:
      "Sign up, Sign In, Sign Out, Navbar with Drop-down Menu, Products Page, Dynamic Individual Product Page, Dynamic Cart Page, Product Checkout page and Payment Page, Responsive for all devices",
    img: "Screenshot (224).png",
    clone: "https://github.com/naveenSaini1/adventurous-blood-3456",
    deploy: "https://starlit-cassata-1a3d24.netlify.app/",
  },
  {
    title: "Toggl Track",
    desc: "A Simple time tracking to save your time and money",
    techStack: "HTML | CSS | JS | React | Chakra UI",
    feature:
      "Sign up, Sign In, Sign Out, Navbar with Drop-down Menu, Products Page, Dynamic Individual Product Page, Dynamic Cart Page, Product Checkout page and Payment Page",
    img: "Screenshot (227).png",
    clone: "https://github.com/Bharathkumar1999/attractive-van-4634/tree/main/toggl",
    deploy: "https://toggl-bay.vercel.app/",
  },
];

export function Project() {
  return (
    <>
      <Heading mb="50px">MY PROJECTS</Heading>
      {data.map((el, i) => {
        return <ProjectCard key={i} data={{ ...el }} />;
      })}
    </>
  );
}
