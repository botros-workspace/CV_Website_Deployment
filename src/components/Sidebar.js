import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logo from '../assets/img/logo_dark.PNG'
import { links } from '../utils/constants'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from '../context'
function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useGlobalContext()
  return (
    <SidebarContainer>
      <aside
        className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}
      >
        <div className='sidebar-header'>
          <img src={logo} className='logo' alt='botrosworkspace' />
          <button className='close-btn' onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className='links'>
          {links.map(({ id, text, url }) => {
            return (
              <li key={id}>
                <Link to={url} onClick={closeSidebar}>
                  {text}
                </Link>
              </li>
            )
          })}
        </ul>
      </aside>
    </SidebarContainer>
  )
}
const SidebarContainer = styled.div`
  text-align: center;
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    opacity: 0.8;
    color: var(--clr-orange-1);
    transition: var(--transition);
    cursor: pointer;
    margin-top: 0.2rem;
  }
  .close-btn:hover {
    color: var(--clr-grey-1);
  }
  .logo {
    justify-self: center;
    height: 45px;
  }
  .links {
    margin-bottom: 2rem;
    padding-left: 1rem;
  }
  .links a {
    display: block;
    text-align: left;
    font-size: 1.1rem;
    font-weight: bold;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: var(--clr-grey-3);
    transition: var(--transition);
    letter-spacing: var(--spacing);
  }

  .links a:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
    background: var(--clr-grey-10);
    color: var(--clr-grey-2);
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-white);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .cart-btn-wrapper {
    margin: 2rem auto;
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`

export default Sidebar
