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
    <main>
      <Wrapper className='page-100 section '>
        <Info />
        <div className='contact section-center'>
          <div>
            <div className='services-center'>
              <article className='service'>
                <span className='icon'>
                  <FaSearchLocation />
                </span>
                <h4>Address</h4>
                <p>Sebastianplatz 5/1/6, 1030 Wien</p>
              </article>
              <article className='service'>
                <span className='icon'>
                  <SiMinutemailer />
                </span>
                <h4>Email</h4>
                <p>botros-workspace@hotmail.com</p>
              </article>
              <article className='service'>
                <span className='icon'>
                  <CgPhone />
                </span>
                <h4>Phone</h4>
                <p>+4367761751520</p>
              </article>
            </div>
          </div>
        </div>
        <article>
          <div className='title spaces'>
            <h2>Contact</h2>
            <div className='underline'></div>
          </div>

          <form className='form col-sm-5 ' onSubmit={sendEmail}>
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
            <div className='space section-center'>
              {send && <h6>{alert}</h6>}
            </div>
            <button value='submit' className='btn space'>
              {botton}
            </button>
          </form>
        </article>
      </Wrapper>
    </main>
  )
}
const Wrapper = styled.nav`
  height: 60em;
  background-size: cover;
  .btn {
    width: 100%;
    background: var(--clr-primary-7);
    color: var(--clr-white);
  }
  background: var(--clr-grey-9);
  .contact {
    width: 40%;
    height: 12em;
    padding-top: 2%;
  }

  .space {
    margin-top: 15px;
  }
  .spaces {
    margin-top: 40px;
    margin-bottom: 20px;
  }
  .services-center {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }
  .service:hover {
  }
  .service {
    opacity: 0.99;
    text-align: center;
    border-radius: 10px;
    h4 {
      font-size: 20px;
    }
    p {
      font-size: 11px;
    }
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
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }
  }
  @media (min-width: 992px) {
    min-height: 35em;
    .title {
      padding-top: 60px;
    }
    grid-template-columns: 1fr 1fr;
    .form {
      margin: 0 30%;
    }
  }
`
export default ContactPage
