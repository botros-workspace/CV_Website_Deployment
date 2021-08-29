import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <Container>
      <h5>
        &copy; {new Date().getFullYear()}
        <span> David Botros </span>
      </h5>
      <h5>All rights reserved</h5>
    </Container>
  )
}
const Container = styled.footer`
  height: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--clr-grey-1);
  text-align: center;
  span {
    color: var(--clr-orange-1);
  }
  h5 {
    color: var(--clr-white);
    margin: 0.1rem;

    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  @media (min-width: 776px) {
    flex-direction: row;
    h5 {
      font-size: 20px;
      font-weight: 300;
      text-transform: none;
      line-height: 1.25;
    }
  }
`
export default Footer
