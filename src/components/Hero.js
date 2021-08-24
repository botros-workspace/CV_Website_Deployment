import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import mainPic from '../assets/img/main.jpg'

const Hero = () => {
  return (
    <Wrapper className='section-center'>
      <article className='content'>
        <h1>I'm David</h1>
        <p>A Web Developer & UI/UX Designer for Web & Mobile</p>
        <Link to='/contact' className='btn hero-btn'>
          Contact me
        </Link>
      </article>
      <article className='img-container'>
        <img src={mainPic} alt='main photo' className='main-img' />
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1.1rem;

      font-weight: 600;
      font-size: 1.1em;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 80%;
      height: 450px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }

    .img-container::before {
      content: '';
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-grey-3);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`

export default Hero
