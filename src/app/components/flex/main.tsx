import { Flex } from "@chakra-ui/react"
import { DecorativeBox } from "@/compositions/lib/decorative-box"

export function MainFlex ({ children }) {
  return (
    <Flex gap="4" direction="column" bgColor="gray.900">
      <DecorativeBox height="100">
	{children}
      </DecorativeBox>
      <DecorativeBox height="10" />
      <DecorativeBox height="10" />
    </Flex>
  )
}
