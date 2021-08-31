import React, { useState } from 'react'
import styled from 'styled-components'
import Skills from '../components/Skills'
import { about } from '../utils/constants'
const AboutPage = () => {
  const [index, setIndex] = useState(0)
  const [en, setEn] = useState(true)
  const [de, setDe] = useState(false)
  const [ar, setAr] = useState(false)
  const setActiveLink = (name, index) => {
    setIndex(index)
    setEn(false)
    setDe(false)
    setAr(false)
    if (name === 'en') setEn(true)
    if (name === 'de') setDe(true)
    if (name === 'ar') setAr(true)
  }
  return (
    <main>
      <Wrapper className=' section-center'>
        <article>
          <div className='title spaces'>
            <h2>About Me</h2>
            <hr />
            <div className='btn-container'>
              <button
                type='button'
                className={`${en ? 'filter-btn active' : 'filter-btn'}`}
                onClick={() => setActiveLink('en', 0)}
              >
                EN
              </button>
              <button
                type='button '
                className={`${de ? 'filter-btn active' : 'filter-btn'}`}
                onClick={() => setActiveLink('de', 1)}
              >
                DE
              </button>
              <button
                type='button'
                className={`${ar ? 'filter-btn active' : 'filter-btn'}`}
                onClick={() => setActiveLink('ar', 2)}
              >
                AR
              </button>
            </div>
          </div>
          <div className='section-center language-borders'>
            <h5>
              <b>Language Level:</b> {about[index].level}
            </h5>
          </div>
          <p>{about[index].text}</p>
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
  h2 {
    margin-bottom: 20px;
  }
  .language-borders {
    width: fit-content;
    padding: 1rem;
    margin-bottom: -15px;
    border: 3px solid var(--clr-grey-1);
    border-radius: 10px;
    box-shadow: 8px 8px 12px rgba(128, 128, 128, 0.8);
  }
  .underline {
    margin-bottom: 15px;
  }
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
    outline: none;
    border: none;
    &.active {
      outline: none;
      border-bottom: 4px solid var(--clr-orange-1);
    }
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
    margin-top: 70px;
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
