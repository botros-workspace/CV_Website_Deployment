import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'

function SingleProjectPage() {
  const { id } = useParams()
  const { projects } = useGlobalContext()

  const project = projects.filter((p) => p.id === parseInt(id))
  return (
    <Wrapper>
      <section>
        <div className='font section-center'>
          {project[0].deployed ? (
            <a href={project[0].url} target='_blank' className='btn  '>
              {'go to deployment '}
            </a>
          ) : null}
          <Link to='/projects' className='btn btn-b   move'>
            back
          </Link>
        </div>
      </section>
      <section className='single-movie'>
        <img src={project[0].image} alt={project[0].name} className='borders' />
        <div className='single-movie-info'>
          <div className='hero'>
            <h2>{project[0].name}</h2>
            <hr className='underline' />
          </div>

          <p>{project[0].desc}</p>
          <p className='info'>
            <span>Status :</span>
            {project[0].deployed ? 'Deployed' : 'Not Deployed'}
          </p>
          <p className='info'>
            <span>Langauge :</span>
            {project[0].languages}
          </p>
          <p className='info'>
            <span>Level :</span>
            {project[0].level}
          </p>
        </div>
      </section>
    </Wrapper>
  )
}
const Wrapper = styled.main`
  .move {
    float: right;
  }
  .borders {
    border: 2px solid var(--clr-grey-3);
    border-radius: 10px;
  }
  .hero {
    h2 {
      color: var(--clr-grey-3);
      padding-top: 2em;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
  }
  .shadow:hover {
    background: var(--clr-grey-3);
  }
  .single-movie {
    width: 90vw;
    max-width: var(--max-width);
    margin: 4rem auto;
    display: grid;
    gap: 2rem;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 600;
      min-width: 200px;
      color: var(--clr-grey-3);
    }
  }
  .underline {
    max-width: var(--max-width);
    border-bottom: 5px solid var(--clr-grey-6);
    border-radius: 100%;
  }
  .single-movie img {
    width: 100%;
    display: block;
  }
  .single-movie p {
    max-width: 35em;
    font-size: 1.2rem;
    margin-top: 1.5rem;
    line-height: 1.8;
  }
  .btn {
    margin-top: 40px;
    width: fit-content;
    font-size: 0.75em;
    font-weight: 700;
  }
  @media screen and (min-width: 992px) {
    .single-movie {
      grid-template-columns: 1fr 2fr;
    }
  }
  .page-error {
    text-align: center;
    padding: 2rem;
  }
  .btn-b {
    background: var(--clr-grey-6);
    color: var(--clr-grey-3);
    font-weight: 700;
    padding: 7.5px;
  }
  .btn-b:hover {
    color: var(--clr-white);
    background: var(--clr-grey-3);
  }
`

export default SingleProjectPage
