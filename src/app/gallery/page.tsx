import { Flex } from "@chakra-ui/react";
import { ElementCard } from "@/app/components/card/card";

export default function About() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pb-20  sm:p-20">
    <Flex gap="32" direction="column" bgColor="gray.900" rounded="md" borderWidth="15px" shadow="lg" position="absolute" top="100px" w="1/2" maxW="2x1" minW="800px" padding="8" borderColor="gray.600/40">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
          <li className="mb-2 tracking-[-.01em]">
            Nicholas Strange
          </li>
          <li className="tracking-[-.01em]">
		<ElementCard>
		<ElementCard.CardTitle>hello</ElementCard.CardTitle>
		<ElementCard.CardText>
			world
		</ElementCard.CardText>
		</ElementCard >
          </li>
        </ol>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
        </div>
      </main>
        </Flex>
    </div>
  );
}
