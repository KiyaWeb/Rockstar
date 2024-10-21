import { Card, CardBody, Heading, HStack, Image,} from "@chakra-ui/react"
import { Game } from "../hooks/UseGames"
import PlatformList from "./PlatformIcon"
import MetaCritics from "./MetaCritics"
import getCroppedUrl from "../services/image-url"

interface Props{
  game:Game
}
export default function GameCard({game}:Props) {
  return (
    <Card  borderRadius={10} overflow={"hidden"}>
      <Image src={getCroppedUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize='2xl'>{game.name}</Heading>
        <HStack justifyContent="space-between">
       <PlatformList platforms={game.parent_platforms.map( p=> p.platform)} />
       <MetaCritics score={game.metacritic}/>
       </HStack>
      </CardBody>
    </Card>
  )
}
