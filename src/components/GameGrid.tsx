
import { SimpleGrid, Text } from "@chakra-ui/react";
import UseGames from "../hooks/UseGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "../hooks/UseGenres";

interface Props{
  selectedGenre: Genre | null
}

export default function GameGrid({selectedGenre}:Props) {
  const {data , error , isLoading} = UseGames(selectedGenre)
  const skeletons = [1,2,3,4,5,6]
  return (
    <>
    {error &&<Text>{error}</Text>}
    <SimpleGrid columns={{sm:1,md:2,lg:3,xl:5}} padding='10px' spacing={3}>
      {isLoading && skeletons.map(skeleton => <GameCardSkeleton key={skeleton} />)}
      {data.map(
        game => <GameCard key={game.id} game={game}/>
        )}
    </SimpleGrid>
    </>
  )
}
