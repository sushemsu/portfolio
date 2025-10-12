"use client";
import { Button, HStack, Box } from "@chakra-ui/react"
import { FaRegFolder } from "react-icons/fa6"
import { CgProfile } from "react-icons/cg"
import { LuFileStack } from "react-icons/lu";
import { usePathname } from 'next/navigation';

const links = [ 
  { name: 'About', href: '/', icon: CgProfile },
  { name: 'Gallery', href: '/gallery', icon: LuFileStack },
  { name: 'Experience', href: '/experience', icon: FaRegFolder },
];

export function TopNavBar () {
  const path = usePathname();
  const buttonHeight = "3.25rem";
  const buttonWidth = "8rem";
  const borderRad = "3xl";
  const buttonColor = "teal";
  return (
   // Container for side nav
   <Box bgColor="gray.900/40" rounded="md" borderRadius={borderRad} borderWidth="1px" padding=".5rem" h="4.25rem">
    <HStack direction="row">
      {links.map((link) => {
	const Icon = link.icon;
	// iterate through buttons and if on active link change style 
	return(
      <Button key={link.href} colorPalette={buttonColor} variant={path === link.href ? "solid" :"outline"} h={buttonHeight} w={buttonWidth} borderRadius={borderRad} as="a" href={link.href}>
	<Icon />
         {link.name}
      </Button>
	);
      })}
    </HStack>
   </Box>
  )
}

