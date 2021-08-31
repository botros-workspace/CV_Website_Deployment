import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaEnvelopeOpen, FaSearchLocation, FaPhone } from 'react-icons/fa'
import mainPic from '../assets/img/main.png'

const Hero = () => {
  const [value, setValue] = useState('')
  const [title, setTitle] = useState('')
  const [alert, setAlert] = useState(true)
  const [msg, setMsg] = useState('')
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

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 1000)
    return () => clearTimeout(timeout)
  }, [alert])
  return (
    <Wrapper className='section-center'>
      <article className='content'>
        <div className='underline'></div>
        <h1>I'm David</h1>
        <p>A Web Developer & UI/UX Designer for Web & Mobile</p>

        <div className='container '>
          <div className='values-list'>
            <button
              className='icon '
              data-label='email'
              onMouseOver={handleValue}
              onClick={() => {
                setAlert(true)
                setTitle('E-mail')
                setValue('botros-workspace@hotmail.com')
                setMsg('Email was copied')
                navigator.clipboard.writeText('botros-workspace@hotmail.com')
              }}
            >
              <FaEnvelopeOpen />
            </button>

            <button
              className='icon'
              data-label='street'
              onMouseOver={handleValue}
              onClick={() => {
                setAlert(true)
                setTitle('Address')
                setValue('Sebastianplatz 5/1/6, 1030 Wien')
                setMsg('Address was copied')
                navigator.clipboard.writeText('Sebastianplatz 5/1/6, 1030 Wien')
              }}
            >
              <FaSearchLocation />
            </button>
            <button
              className='icon'
              data-label='phone'
              onMouseOver={handleValue}
              onClick={() => {
                setAlert(true)
                setTitle('Phone')
                setValue('+43-67761751520')
                setMsg('Phone was copied')
                navigator.clipboard.writeText('+4367761751520')
              }}
            >
              <FaPhone />
            </button>
          </div>
          {title !== '' && <hr />}
          <p className='user-title'>{title}</p>
          <p className='user-value'>{value}</p>
        </div>
        <div className='alert  '>{alert && <h5>{msg}</h5>}</div>
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
  .alert {
    width: 80%;
    margin: 0 auto;
    padding: 0;
    padding-left: 22%;
    color: var(--clr-orange-1);
  }
  .borders {
    background: var(--clr-grey-9);
    border: 10px solid var(--clr-grey-1);
    border-radius: 100px;
  }
  .user-title {
    font-size: 18px;
    margin-bottom: 0;
  }
  .user-value {
    color: var(--clr-grey-1);
    font-size: 15px;
  }
  .icon {
    background: transparent;
    border: 5px solid var(--clr-white);

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
  .container {
    text-align: center;

    width: 80%;
    padding: 0.5rem;
  }
  .values-list {
    display: flex;

    justify-content: space-evenly;
    gap: 0rem;
  }

  .underline {
    width: 6rem;
    height: 0.25rem;
    background: #49a6e9;
    background: var(--clr-grey-6);
    margin-bottom: 10px;
    margin-right: auto;
  }
  .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 1rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    .alert {
      padding-left: 24%;
    }

    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.3rem 0.8rem;
      font-size: 0.8rem;

      font-weight: 600;
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
      width: 80%;
      height: 80%;
      border: 7px solid var(--clr-grey-1);
      border-radius: 100px;
      bottom: -8%;
      left: 8%;
      border-radius: var(--radius);
      box-shadow: 18px 18px 8px rgba(128, 128, 128, 1);
    }
  }
`

export default Hero
