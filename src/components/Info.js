import React, { useState } from 'react'
import styled from 'styled-components'
import { FaEnvelopeOpen, FaSearchLocation, FaPhone } from 'react-icons/fa'
import mainPic from '../assets/img/main.jpg'
function App() {
  const [value, setValue] = useState('botros-workspace@hotmail.com')
  const [title, setTitle] = useState('E-mail')

  const handleValue = (e) => {
    if (e.target.classList.contains('icon')) {
      if (e.target.dataset.label === 'phone') {
        setTitle('Phone')
        setValue('+43-67761751520')
      }

      if (e.target.dataset.label === 'street') {
        setTitle('Address')
        setValue('Sebastianplatz 5/1/6, 1030 Wien')
      }
      if (e.target.dataset.label === 'email') {
        setTitle('E-mail')
        setValue('botros-workspace@hotmail.com')
      }
    }
  }
  return (
    <Wrapper className='  section-center'>
      <main className=''>
        <div className=' bcg-black'></div>
        <div className=''>
          <div className='container borders'>
            <img src={mainPic} alt='main pic' className='user-img' />
            <p className='user-title'>{title}</p>
            <p className='user-value'>{value}</p>
            <div className='values-list'>
              <button
                className='icon'
                data-label='email'
                onMouseOver={handleValue}
              >
                <FaEnvelopeOpen />
              </button>

              <button
                className='icon'
                data-label='street'
                onMouseOver={handleValue}
              >
                <FaSearchLocation />
              </button>
              <button
                className='icon'
                data-label='phone'
                onMouseOver={handleValue}
              >
                <FaPhone />
              </button>
            </div>
          </div>
        </div>
      </main>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  height: 29em;
  width: 90%;
  .section {
    padding: 5rem 0;
  }

  .section-center {
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
  }

  /* container */

  .container {
    background: var(--clr-white);
    border-radius: var(--radius);
    position: relative;
    text-align: center;

    padding: 1.5rem;
    box-shadow: var(--dark-shadow);
  }

  .container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 130px;
    background: var(--clr-grey-1);
    border-top-left-radius: var(--radius);
    border-top-right-radius: var(--radius);
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  }
  .container img {
    width: 150px;
    height: 150px;
    position: relative;
    border-radius: 50%;
    padding: 5px;
    background: var(--clr-white);
    border: 1px solid rgba(0, 0, 0, 0.25);
    margin-bottom: 2rem;
    box-shadow: var(--dark-shadow);
  }

  .user-title {
    font-size: 18px;
    margin-bottom: 0;
  }
  .user-value {
    color: var(--clr-grey-1);
    font-size: 15px;
  }
  .values-list {
    display: flex;
    grid-template-columns: repeat(6, 1fr);
    justify-content: space-evenly;
    gap: 2rem;
  }
  .icon {
    background: transparent;
    border: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--clr-grey-5);
    transition: var(--transition);
  }
  .icon:hover {
    color: var(--clr-orange-1);
  }
  .active {
    color: var(--clr-primary-5);
  }
  .btn {
    margin: 0 auto;
    margin-top: 1.5rem;
  }

  @media screen and (min-width: 800px) {
    .container {
      width: 80%;
    }
    .user-value {
      font-size: 28px;
    }
    .icon {
      font-size: 2rem;
    }
  }
  @media screen and (min-width: 992px) {
    height: 23rem;
    position: relative;
    bottom: 30px;
    right: -10%;
    .user-title {
      font-weight: 600;
      font-size: 20px;
    }
    .user-value {
      font-size: 18px;
    }
    .container {
      width: 100%;
    }
  }
  @media screen and (min-width: 1300px) {
    position: relative;
    bottom: 60px;
    .user-value {
      font-size: 24px;
    }
  }
`
export default App
