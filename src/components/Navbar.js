import React from 'react'
import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import logo from '../assets/img/logo_dark.PNG'
import { links } from '../utils/constants'
import { useGlobalContext } from '../context'
function Navbar() {
  const { openSidebar } = useGlobalContext()
  return (
    <NavContainer>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/'>
            <img src={logo} alt='botros-workspace' />
          </Link>
          <button type='button' className='nav-toggle' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          {links.map((link) => {
            const { id, text, url } = link
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    </NavContainer>
  )
}

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 35px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-grey-1);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-toggle:hover {
    opacity: 0.8;
    color: var(--clr-orange-1);
  }
  .nav-links {
    padding-top: 40px;
    display: none;
    color: var(--clr-grey-3);
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    height: 3rem;
    .nav-header {
      img {
        padding-top: 30px;
      }
    }
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      margin-left: 500px;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-grey-3);
        font-size: 1.1rem;
        font-weight: bold;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        text-decoration: none;
      }
      a:hover {
        border-bottom: 4px solid var(--clr-grey-6);
      }
    }
  }
`

export default Navbar
