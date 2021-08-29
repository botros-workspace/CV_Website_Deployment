import React, { useState } from 'react'
import styled from 'styled-components'
import { FaSearchLocation } from 'react-icons/fa'
import { SiMinutemailer } from 'react-icons/si'
import { CgPhone } from 'react-icons/cg'
import Info from '../components/Info'
import emailjs from 'emailjs-com'
require('dotenv').config()
function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [botton, setBotton] = useState('Send')
  const [send, setSend] = useState(false)
  const [alert, setAlert] = useState('Sending...')
  function sendEmail(e) {
    e.preventDefault()
    if (email === '') {
      setAlert('Email is required')
      setSend(true)
    } else if (message === '') {
      setAlert('Message is required')
      setSend(true)
    } else if (name === '') {
      setAlert('Name is required')
      setSend(true)
    } else {
      setSend(true)
      emailjs
        .sendForm(
          `${process.env.REACT_APP_SEVICE_KEY}`,
          `${process.env.REACT_APP_TEMPLATE_KEY}`,
          e.target,
          'user_gISlR3cQrFmd9vUlJxuHm'
        )
        .then(
          (result) => {
            setName('')
            setEmail('')
            setMessage('')
            setBotton('Message was sent, Thank you ')
            setSend(false)
          },
          (error) => {
            setName('')
            setEmail('')
            setMessage('')
            setBotton('There was an error, try later ')
            setSend(false)
          }
        )
    }
  }
  return (
    <Wrapper className=' borders'>
      <div className='info '>
        <Info />
      </div>

      <article>
        <div className='title spaces'>
          <h2>Contact</h2>
          <div className='underline'></div>
        </div>

        <form className='form location  col-sm-5 ' onSubmit={sendEmail}>
          <label className='space'>Name:</label>
          <input
            type='text'
            className='form-control'
            id='name'
            placeholder='Enter your Name'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label className='space'>Email:</label>

          <input
            type='email'
            className='form-control'
            id='email'
            placeholder='Enter your Email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className='space'>Message:</label>

          <textarea
            className='form-control'
            rows='5'
            id='message'
            name='message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <div className='space section-center'>{send && <h6>{alert}</h6>}</div>
          <button value='submit' className='btn space'>
            {botton}
          </button>
        </form>
      </article>
    </Wrapper>
  )
}
const Wrapper = styled.nav`
  height: 64rem;

  background-size: cover;

  @media (min-width: 400px) {
    .form {
      margin-top: -10%;
    }
    .title {
      h2 {
        margin-top: -30px;
      }
    }
  }
  .btn {
    width: 90%;
    background: var(--clr-grey-1);
    color: var(--clr-white);
  }
  .btn:hover {
    color: var(--clr-orange-1);
    background: var(--clr-grey-3);
  }
  background: var(--clr-grey-9);

  .space {
    margin-top: 15px;
  }
  .spaces {
    margin-bottom: 10px;
  }

  .location {
    position: absolute;
    left: 10%;
    top: 85%;
    width: 90%;
  }
  .form-control {
    width: 90%;
  }
  .info {
    padding-top: 8%;
  }
  span {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: var(--clr-primary-8);

    svg {
      font-size: 1.5rem;
      color: var(--clr-grey-3);
    }
  }

  @media (min-width: 580px) {
    .btn {
      width: 180%;
    }
    .title {
      h2 {
        margin-top: -30px;
        font-size: 30px;
      }
    }

    .location {
      position: absolute;
      left: 15%;
      top: 85%;
    }
    .form-control {
      width: 180%;
    }
  }
  @media (min-width: 760px) {
    .location {
      position: absolute;
      left: 15%;
      top: 88%;
    }
    .form {
      padding-top: 10%;
    }
  }

  @media (min-width: 994px) {
    margin-top: 3%;
    height: 40em;

    .btn {
      width: 90%;
    }
    .form {
      padding-top: 8%;
    }
    .location {
      position: absolute;
      left: 22%;
      top: 15%;
      width: 100%;
    }
    .info {
      position: absolute;
      width: 40%;
      margin: 0 5%;
      top: 25%;
    }
    .title {
      padding-top: 60px;
    }
    grid-template-columns: 1fr 1fr;
    .form {
      margin: -2% 30%;
    }
    .form-control {
      width: 90%;
    }
  }
`
export default ContactPage
