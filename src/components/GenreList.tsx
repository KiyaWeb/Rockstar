import { Button, HStack, Image, List, ListItem, Spinner} from "@chakra-ui/react"
import UseGenres, { Genre } from "../hooks/UseGenres"
import getCroppedUrl from "../services/image-url"

interface Props {
  onSelectedGenre: (genre:Genre) => void
}
export default function GenreList({onSelectedGenre}:Props) {

  const {data, isLoading, error} = UseGenres()
 
  if(error) return null

  if(isLoading) return <Spinner />

  return (
    <List>
      {
        data.map(genre =>(
      <ListItem key={genre.id} paddingY = '8px'>
        <HStack>
          <Image boxSize='32px' borderRadius={8} src={getCroppedUrl(genre.image_background)}/>
          <Button onClick={() => onSelectedGenre(genre)} variant='link' fontSize='lg'>{genre.name}</Button> 
        </HStack>
      </ListItem>
        ))
      }
      
    </List>
  )
}
