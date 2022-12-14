import React, {useState} from 'react'
import Navbar from '../Navbar'
import Sidebar from '../sidebar';
import {HeroContainer,
   HeroContent,
   HeroItems,
   HeroH1,
   HeroP,
   HeroBtn,
  } from './HeroElements';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
   <HeroContainer>
       <Navbar toggle={toggle} />
       <Sidebar isOpen={isOpen} toggle={toggle} /> 
       <HeroContent>
         <HeroItems>
           <HeroH1>Greatest Pizza Ever</HeroH1>
           <HeroP>Ready in 10 Minutes</HeroP>
           <HeroBtn>Place Order</HeroBtn>
         </HeroItems>
       </HeroContent>
   </HeroContainer>
  )
}

export default Hero;