import React from 'react'
import styled from 'styled-components'

const AboutPage = () => {
  return (
    <main>
      <Wrapper className='page section-center'>
        <article>
          <div className='title spaces'>
            <h2>About Me</h2>
            <div className='underline'></div>
          </div>
          <p>
            I am a passionate, ambitious and hardworking developer, always
            trying to learn and improve myself. Furthermore, I consider myself a
            Team Player and creative in my approach to solve problems. A key
            strength of mine is communication; building strong relationships
            with people in order to deliver the best results. For the last 5
            years I've been developing my skills by learning the coding
            standards and concepts, regardless of the language itself. I worked
            on different projects using different programming languages and
            frameworks, alone and in teams, in which I've learned how to
            collaborate on code, be consistent in the my style of coding and how
            to maintain a code base of a project.
          </p>
        </article>
      </Wrapper>
    </main>
  )
}
const Wrapper = styled.section`
  display: flex;
  min-height: 38em;
  justify-content: center;
  align-items: center;
  text-align: center;
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
    font-weight: 700;
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
