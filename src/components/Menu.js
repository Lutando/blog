import React from 'react'
import Link from 'gatsby-link'
import styled from 'react-emotion'
import { push as Menu } from 'react-burger-menu'
import Social from '../components/Social'

const Nav = styled.nav`
  background: var(--color-base);
  opacity: 0.975;
  backdrop-filter: blur(50px);
  width: 100%;
  height: 3.5rem;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 11;
  transition: 0.5s ease;
`
const Title = styled(Link)`
  text-decoration: none;
  display: inline-block;
  h1 {
    text-transform: uppercase;
    font-size: 1.2rem;
    padding: 1.25rem 2rem;
  }
`
const Header = styled.header`
  width: 3.5rem;
  height: 3.5rem;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 10;
  transition: 0.5s ease;
  opacity: ${props => (props.isOpen ? '0' : '1')};
  div {
    .bm-menu {
      padding: 2rem 0;
    }
    .bm-cross {
      height: 2rem !important;
      width: 0.35rem !important;
    }
    .bm-cross-button {
      height: 2rem !important;
      width: 2rem !important;
      top: 0.5rem !important;
      right: 2rem !important;
    }
    .bm-burger-bars {
      height: 0.35rem;
    }
    .bm-burger-button {
      position: relative;
      width: 1.5rem;
      height: 1.5rem;
      top: 1rem;
    }
  }
`

const MenuMobile = styled(Menu)`
  padding: 4rem 0;
  z-index: 12;
  text-align: left;
  ul {
    display: flex;
    justify-content: space-between;
    padding: 1.5rem 0;
  }
  li {
    display: block;
    margin: 0;
    padding: 0.618rem 0;
  }
  a {
    text-decoration: none;
    padding: 0.25rem;
    @media screen and (min-width: ${props => props.theme.responsive.medium}) {
      padding: 1rem;
      color: var(--color-secondary) !important;
    }
  }
  img {
    display: inline-block;
  }
  section {
    margin: 0;
    div {
      padding: 0;
    }
  }
  svg {
    transition: all 0.2s;
  }
`

const Navigation = () => {
  return (
    <Nav>
      <Title to="/">
        <h1>Lutando Ngqakaza</h1>
      </Title>
      <Header>
        <MenuMobile
          right
          isOpen={false}
          pageWrapId={'page-wrap'}
          outerContainerId={'outer-container'}
        >
          <ul>
            <li>
              <h2>
                <Link to="/">Home</Link>
              </h2>
            </li>
            <li>
              <h2>
                <Link to="/blog">Blog</Link>
              </h2>
            </li>
            <li>
              <h2>
                <Link to="/resume">Resume</Link>
              </h2>
            </li>
            <li>
              <h2>
                <Link to="/contact">Contact</Link>
              </h2>
            </li>
            <li>
              <Social />
            </li>
          </ul>
        </MenuMobile>
      </Header>
    </Nav>
  )
}

export default Navigation
