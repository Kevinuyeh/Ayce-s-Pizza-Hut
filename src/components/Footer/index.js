import React from 'react'
import {
    FaFacebook,
    FaInstagram,
    FaWhatsapp,
    FaTwitter,
    FaLinkedin
} from 'react-icons/fa'
import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    FooterH1,
    FooterH2,
    SocialLogo,
    SocialIcons,
    SocialIconLink
} from './FooterElements';


const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to= "/">Ayce's Pizza Delight</SocialLogo>
                    <FooterH1>+234 7051334020</FooterH1>
                    <FooterH2>+234 8101475780</FooterH2>
                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank"
                        aria-label="Facebook" rel="noopener noreferrer">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank"
                        aria-label="FaInstagram" rel="noopener noreferrer">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank"
                        aria-label="FaWhatsapp" rel="noopener noreferrer">
                            <FaWhatsapp />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank"
                        aria-label="FaTwitter" rel="noopener noreferrer">
                            <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank"
                        aria-label="FaLinkedin" rel="noopener noreferrer">
                            <FaLinkedin />
                       
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer