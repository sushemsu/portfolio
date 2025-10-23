// playing around with custom card defs
import { Card, Separator } from "@chakra-ui/react"
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
    <Card.Description >
      <Separator mb="2"/>
      { children }
      <Separator mt={3} mb={-2}/>
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
      <Card.Header justifyContent="flex-start" >
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
      {/*<Card.Body gap="2" color="fg.muted">*/}
		{children}
      {/*</Card.Body>*/}
    </Card.Root>
  )
}

export const ElementCard = Object.assign(ElementCardRoot, {
  CardTitle: CardTitle,
  CardText: CardText,
 CardHeader: CardHeader,
 CardFooter: CardFooter,
});
