import {FaWindows,FaPlaystation,FaXbox,FaApple,FaLinux,FaAndroid } from 'react-icons/fa'
import { HStack, Icon,} from "@chakra-ui/react"
import { Platform } from "../hooks/UseGames"
import {MdPhoneIphone} from 'react-icons/md'
import{SiNintendo} from 'react-icons/si'
import{BsGlobe} from 'react-icons/bs'
import { IconType } from 'react-icons'

interface Props{
  platforms:Platform[]
}

export default function PlatformList({platforms}:Props) {

  const iconMap:{[key:string]:IconType} = {
    pc:FaWindows,
    playstation:FaPlaystation,
    Xbox:FaXbox,
    nintendo:SiNintendo,
    Linux:FaLinux,
    Android:FaAndroid,
    Apple:FaApple,
    Iphone:MdPhoneIphone,
    WebApp:BsGlobe
  }

  return (
    <HStack marginY='15px'> 
      {platforms.map(
        platform =>
         <Icon key={platform.id} as={iconMap[ platform.slug ]} color='gray.500'/>
         )}
      </HStack>
  )
}
