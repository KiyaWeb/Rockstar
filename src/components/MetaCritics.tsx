import { Badge } from "@chakra-ui/react"

interface Props{
  score:number
}

export default function MetaCritics({score}:Props) {
  let color = score > 75 ? 'green': score > 60? 'yellow' : 'red'
  return (
    <Badge colorScheme={color} fontSize='12px' paddingY={1} paddingX={2} borderRadius='5px'>{score}</Badge>
  )
}
