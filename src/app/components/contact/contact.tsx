import { Button, HStack } from "@chakra-ui/react"
import { FaLinkedin, RiMailLine } from "react-icons/ri"

export default function TopNavBar () {
  return (
    <HStack>
      <Button colorPalette="teal" variant="solid">
        <RiMailLine /> Email
      </Button>
      <Button colorPalette="teal" variant="outline">
        LinkedIn <FaLinkedin />
      </Button>
    </HStack>
  )
}

