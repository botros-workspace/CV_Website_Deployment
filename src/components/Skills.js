import React from 'react'
import styled from 'styled-components'
import { IoBeerOutline } from 'react-icons/io5'
function Skills() {
  return (
    <Wrapper>
      <article className='header'>
        <h2>Skills & Interest</h2>
        <div className='under'></div>
      </article>
      <div className='main-container'>
        <div className='skills-conatiner'>
          <section className='container borders'>
            <div className='title'>
              <h2>Skills</h2>
              <div className='under'></div>
            </div>
            <div className='skill'>
              <h4>Python : </h4>
              <span>
                <IoBeerOutline className='level-image  ' />
                <IoBeerOutline className='level-image  ' />
                <IoBeerOutline className='level-image  ' />
                <p className='level-text'>Advanced</p>
              </span>
            </div>
            <div className='skill'>
              <h4>C++ : </h4>
              <span>
                <IoBeerOutline className='level-image  ' />
                <IoBeerOutline className='level-image  ' />
                <p className='level-text'>Intermediate</p>
              </span>
            </div>
            <div className='skill'>
              <h4>Java : </h4>
              <span>
                <IoBeerOutline className='level-image  ' />
                <IoBeerOutline className='level-image  ' />
                <IoBeerOutline className='level-image  ' />
                <p className='level-text'>Advanced</p>
              </span>
            </div>
            <div className='skill'>
              <h4>JS : </h4>
              <span>
                <IoBeerOutline className='level-image  ' />
                <IoBeerOutline className='level-image  ' />
                <p className='level-text'>Intermediate</p>
              </span>
            </div>
          </section>
        </div>
        <div className='interest-container'>
          <section className='container  borders'>
            <div className='title'>
              <h2>Interests</h2>
              <div className='under'></div>
            </div>
            <ul className='interest-list'>
              <li>- Machine Learning</li>
              <li>- Statistics</li>
              <li>- Mathematics</li>
              <li>- Web Developing</li>
              <li>- Physics</li>
            </ul>
          </section>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.main`
  .level-text {
    margin: 0 auto;
  }
  li {
    font-size: 16px;
    font-weight: 400;
    margin-top: 50px;
    color: var(--clr-white);
  }
  .container {
    padding-bottom: 50px;
    height: auto;
    width: 90%;
    margin-bottom: 40px;
    h2 {
      color: var(--clr-white);
    }
  }
  .skill {
    display: flex;
    margin-top: 12%;
    justify-content: space-evenly;
    h4 {
      color: var(--clr-white);
    }
  }
  .level-image {
    font-size: 1.5rem;
    font-weight: 600;
    margin-left: 8px;
    color: var(--clr-orange-1);
    border-radius: 10%;
  }
  .borders {
    background: var(--clr-grey-1);
    border: 5px solid var(--clr-grey-1);
    border-radius: 10px;
  }
  .under {
    margin-bottom: 5rem;
    border-bottom: 5px solid var(--clr-grey-6);
    border-radius: 100%;
  }
  @media screen and (min-width: 1200px) {
    .main-container {
      display: flex;
      gap: 15%;
      margin-bottom: 30px;
    }
    .title {
      margin-top: -15%;
    }
    .container {
      display: block;

      width: 500px;
      padding: 10%;
      margin-top: -30px;

      height: 630px;
    }
    li {
      font-size: 20px;
    }
  }
`
export default Skills
