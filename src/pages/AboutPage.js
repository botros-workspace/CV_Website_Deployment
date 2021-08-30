import React, { useState } from 'react'
import styled from 'styled-components'
import Skills from '../components/Skills'
import { about } from '../utils/constants'
const AboutPage = () => {
  const [text, setText] = useState(about[0].text)
  console.log(text)
  return (
    <main>
      <Wrapper className=' section-center'>
        <article>
          <div className='title spaces'>
            <h2>About Me</h2>
            <div className='btn-container'>
              <button
                type='button'
                className='filter-btn'
                onClick={() => setText(about[0].text)}
              >
                EN
              </button>
              <button
                type='button'
                className='filter-btn'
                onClick={() => setText(about[1].text)}
              >
                DE
              </button>
              <button
                type='button'
                className='filter-btn'
                onClick={() => setText(about[2].text)}
              >
                AR
              </button>
            </div>
          </div>
          <p>{text}</p>
        </article>
        <Skills />
      </Wrapper>
    </main>
  )
}
const Wrapper = styled.section`
  min-height: 38em;
  justify-content: center;
  align-items: center;

  text-align: center;
  .btn-container {
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .filter-btn {
    font-weight: 600;
    background: transparent;
    border-color: transparent;
    font-size: 1.1rem;
    text-transform: capitalize;
    margin: 0 0.5rem;
    letter-spacing: 1px;
    padding: 0.375rem 0.75rem;
    color: var(--clr-blue-1);
    cursor: pointer;
    transition: var(--transition);
    border-radius: 50%;
    border: none;
    &.active {
      border-bottom: 5px solid var(--clr-grey-6);
    }
  }
  .filter-btn.active {
  }
  .spaces {
    margin-bottom: 30px;
  }
  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
    text-align: center;
  }
  p {
    font-size: 1.2em;
    font-weight: 600;
    line-height: 2.2;
    max-width: 45em;
    margin: 80px auto;
    margin-top: 3rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
