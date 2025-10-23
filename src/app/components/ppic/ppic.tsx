import { Image } from "@chakra-ui/react"
import { Contact } from "@/app/components/contact/contact";

export function ProfilePicture () {
  return(
  <>
    <div className="grid gap-3 place-items-center">
      <div className="flex  grid-row:1">
        <Image
          src="/ppic.jpg"
          boxSize="250px"
          borderRadius="full"
          fit="cover"
          alt="Nicholas Strange"
          shadow="lg"
        />
      </div>
      <div className="grid-row:2">
        <Contact />
      </div>
    </div>
  </>
  )
}
