"use client";
import { Button, HStack, Box } from "@chakra-ui/react"
import { RiMailLine } from "react-icons/ri"
import { FaLinkedin } from "react-icons/fa"

const links = [
  { name: 'Email', href: 'mailto:sushemsu@gmail.com?subject=Devops%20Engineer%20from%20Portfolio&body=Hello%20I%20am%20reaching%20out%20about%20...', icon: RiMailLine },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/nick-strange-74162077/', icon: FaLinkedin },
];

export function Contact () {
  const buttonHeight = "1.25rem";
  const buttonWidth = "8rem";
  const borderRad = "3xl";
  const buttonColor = "teal";

  return (
   <Box bgColor="gray.900/40" rounded="md" borderRadius={borderRad} borderWidth="1px" padding="1.5px" h="1.60rem" borderColor="teal.900/40">
    <HStack direction="row" borderColor="gray.900/40">
      {links.map((link) => {
	const Icon = link.icon;
	// iterate through buttons and if on active link change style 
	return(
      <Button key={link.href} colorPalette={buttonColor} variant="subtle" h={buttonHeight} w={buttonWidth} borderRadius={borderRad} as="a" onClick={()=> { location.href=`${link.href}` } } borderColor="teal.200/40">
	<Icon />
         {link.name}
      </Button>
	);
      })}
    </HStack>
   </Box>
  )
}
