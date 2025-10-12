import Image from "next/image";
import { Button, HStack, Flex, Grid } from "@chakra-ui/react";
import { TopNavBar } from "@/app/components/topnav/navbar";


export default function About() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
    <Flex gap="32" direction="column" bgColor="gray.900" rounded="md" borderWidth="15px" shadow="lg" position="absolute" top="100px" w="1/2" maxW="2x1" minW="800px" padding="8">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
        </Flex>
    </div>
  );
}
