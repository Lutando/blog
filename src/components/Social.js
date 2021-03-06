import React from 'react'
import styled from 'react-emotion'
import Ionicon from 'react-ionicons'

const Wrapper = styled.section`
  margin: 1rem auto 0;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    margin: 0;
  }
`
const SocialIcon = styled.div`
  display: inline-block;
  padding: 0 0.5rem;
  &:first-child {
    padding-left: 0;
  }
  &:last-child {
    padding-right: 0;
  }
`

const Social = props => {
  return (
    <Wrapper>
      <SocialIcon>
        <a href="https://github.com/Lutando/" alt="github">
          <Ionicon className="icon" fontSize="35px" icon="logo-github" />
        </a>
      </SocialIcon>
      <SocialIcon>
        <a href="https://instagram.com/lutz.so.not/" alt="instagram">
          <Ionicon className="icon" fontSize="35px" icon="logo-instagram" />
        </a>
      </SocialIcon>
      <SocialIcon>
        <a href="https://twitter.com/LutandoNgqakaza/" alt="twitter">
          <Ionicon className="icon" fontSize="35px" icon="logo-twitter" />
        </a>
      </SocialIcon>
      <SocialIcon>
        <a href="https://www.linkedin.com/in/lutandongqakaza/" alt="linkedin">
          <Ionicon className="icon" fontSize="35px" icon="logo-linkedin" />
        </a>
      </SocialIcon>
      <SocialIcon>
        <a href="https://www.facebook.com/cr4zymonkey" alt="facebook">
          <Ionicon className="icon" fontSize="35px" icon="logo-facebook" />
        </a>
      </SocialIcon>
    </Wrapper>
  )
}

export default Social
