import { HStack, Image,} from "@chakra-ui/react";
import logo from '../assets/logo.png'
import ColorModeSwitch from "./ColorModeSwitch";
export default function Navbar() {
  return (
    <HStack padding='15px' justifyContent='space-between'>
      <Image src={logo} boxSize='55px' />
      <ColorModeSwitch />
    </HStack>
  )
}
