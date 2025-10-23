// playing around with custom card defs
import { Card, Text, Box } from "@chakra-ui/react"
import { ReactNode } from 'react';

// 
interface CardTextProps {
	children: ReactNode;
}
interface CardTitleProps {
	children: ReactNode;
}

interface CardFooterProps {
	children: ReactNode;
}

interface CardHeaderProps {
	children: ReactNode;
}

interface CardRootProps {
  children: ReactNode;
  className?: string;
  width?: string;
}

const CardText = ({ children }: CardTextProps) => {
  return (
    <Card.Description mb="5" mt="5" fontSize="md" padding={5} >
          <Box padding="2" bgColor="gray.700/14" borderRadius="md">
                    <Text whiteSpace="pre-line">
      { children }
    </Text>
      </Box>
    </Card.Description>
)
};

const CardTitle = ({ children }: CardTitleProps) => {
  return (
         <Card.Title display="flex" gap="2" alignItems="center" mb="1">{children}</Card.Title>
	)
};

const CardHeader  = ({ children }: CardHeaderProps) => {
  return (
      <Card.Header>
        { children } 
      </Card.Header>
	)
}

const CardFooter = ({ children }: CardFooterProps) => {
  return (
      <Card.Footer justifyContent="flex-start" >
        { children } 
      </Card.Footer>
	)
}

//const ElementCardRoot = ({ children, className }: CardRootProps) => {
const ElementCardRoot = ({ children }: CardRootProps) => {
  return (
    <Card.Root size="lg">
		{children}
    </Card.Root>
  )
}

export const ElementCard = Object.assign(ElementCardRoot, {
  CardTitle: CardTitle,
  CardText: CardText,
 CardHeader: CardHeader,
 CardFooter: CardFooter,
});
