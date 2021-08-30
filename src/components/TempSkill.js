import React from 'react'
import styled from 'styled-components'

import { IoBeerOutline } from 'react-icons/io5'
function Skills() {
  return (
    <Wrapper className='page section-center section '>
      <article className='header'>
        <h2>Skills</h2>
        <div className='under'></div>
        <div className='main-container  borders '>
          <div className='label '>
            <h3>Python:</h3>
          </div>
          <div className='level-container level-float '>
            <p className='level-text'>Advanced</p>

            <IoBeerOutline className='level-image  ' />
            <IoBeerOutline className='level-image  ' />
            <IoBeerOutline className='level-image  ' />
          </div>
        </div>
        <div className='main-container  borders'>
          <div className='label '>
            <h3>C++:</h3>
          </div>
          <div className='level-container level-float '>
            <p className='level-text'>Intermediate</p>
            <IoBeerOutline className='level-image  ' />
            <IoBeerOutline className='level-image  ' />
          </div>
        </div>
        <div className=''>
          <div className='main-container  one-move borders'>
            <div className='label '>
              <h3>Java:</h3>
            </div>
            <div className='level-container level-float '>
              <p className='level-text'>Advanced</p>
              <IoBeerOutline className='level-image  ' />
              <IoBeerOutline className='level-image  ' />
              <IoBeerOutline className='level-image  ' />
            </div>
          </div>
          <div className='main-container two-move borders'>
            <div className='label '>
              <h3>JS:</h3>
            </div>
            <div className='level-container  level-float '>
              <p className='level-text'>Intermediate</p>
              <IoBeerOutline className='level-image  ' />
              <IoBeerOutline className='level-image  ' />
            </div>
          </div>
        </div>
      </article>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  min-height: 45em;
  position: relative;
  .level-container {
    width: 50%;
    margin-top: 16px;
  }
  .level-float {
    float: right;
    transform: translateY(-95px);
  }
  .label {
    font-size: 1.8rem;
    justify-content: center;
    align-items: center;

    margin: 30px 10%;
    h3 {
      font-weight: 640;
      font-size: 26px;
    }
  }
  .level-text {
    font-size: 1.5em;
    font-weight: 635;
    color: var(--clr-grey-3);
  }
  .main-container {
    margin: 40px auto;
    height: 8em;
    width: 90%;
  }
  .borders {
    background: var(--clr-grey-9);
    border: 5px solid var(--clr-grey-1);
    border-radius: 100px;
  }
  .level-image {
    font-size: 1.5rem;
    font-weight: 600;
    margin-left: 8px;
    color: var(--clr-orange-1);
    border-radius: 10%;
  }
  .header {
    h2 {
      justify-content: center;
      align-items: center;
      text-align: center;
      margin-bottom: 1rem;
      color: var(--clr-grey-1);
      font-weight: 630;
    }
    .under {
      margin-bottom: 5rem;
      border-bottom: 5px solid var(--clr-grey-6);
      border-radius: 100%;
    }
  }
  @media screen and (min-width: 900px) {
    height: 25em;
    .label {
      h3 {
        font-weight: 700;
        font-size: 30px;
      }
    }
    .level-text {
      font-size: 1.5em;
      font-weight: 700;
    }
    .level-image {
      font-size: 2rem;
    }
    .main-container {
      padding: 10px;
      width: 40%;
      margin: 50px 5%;
    }
    .one-move {
      margin: 0 auto;
      width: 40%;
      position: absolute;
      right: 6%;
      top: 37.5%;
    }
    .two-move {
      margin: 0 auto;
      width: 40%;
      position: absolute;
      right: 6%;
      top: 62.4%;
    }
  }
`

export default Skills
