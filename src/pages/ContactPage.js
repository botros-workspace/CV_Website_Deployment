import React, { useState } from 'react'
import styled from 'styled-components'
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
      <Wrapper className='section-center'>
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
  min-height: 40em;
  .space {
    margin-top: 15px;
  }
  .spaces {
    margin-top: 40px;
    margin-bottom: 20px;
  }

  @media (min-width: 992px) {
    min-height: 35em;
    grid-template-columns: 1fr 1fr;
    .form {
      margin: 0 30%;
    }
  }
`
export default ContactPage
