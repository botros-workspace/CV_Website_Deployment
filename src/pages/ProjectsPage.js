import React, { useState } from 'react'
import styled from 'styled-components'
import Categories from '../components/Categories'
import { useGlobalContext } from '../context'
import { Link } from 'react-router-dom'
import { GoFileSymlinkFile } from 'react-icons/go'
function ProjectsPage() {
  const { filteredProjects } = useGlobalContext()

  return (
    <Wrapper>
      <div className='hero'>
        <h3>Projects</h3>
        <div className=' section-center'>
          <hr className='underline' />
        </div>
      </div>
      <div className=' section-center'>
        <Categories />
      </div>
      <div className='container '>
        <section className='photos '>
          <div className='photos-center '>
            {filteredProjects.map((project) => {
              return (
                <div>
                  <article className='photo borders' key={project.id}>
                    <img src={project.image} alt={project.name} />
                    <div className='photo-info '>
                      <div className='text'>
                        <h4>
                          Project name:{' '}
                          <p className='text-reduce'>{project.name}</p>
                        </h4>
                        <h4>
                          Language used:{' '}
                          <p className='text-reduce'>{project.languages}</p>
                        </h4>
                      </div>
                      <Link to={`/project/${project.id}`}>
                        <div className='icon'>
                          <GoFileSymlinkFile />
                        </div>
                      </Link>
                    </div>
                  </article>
                </div>
              )
            })}
          </div>
        </section>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  min-height: 35em;
  div {
    .borders {
      border: 3px solid var(--clr-grey-3);
      border-radius: 10px;
    }
    .text {
      h4 {
        color: var(--clr-orange-1);
        font-size: 1.1em;
        font-weight: 700;
      }
    }
    .text-reduce {
      margin-top: 5px;
      font-weight: 450;
    }
  }

  .icon {
    font-size: 3rem;
    background: transparent;
    border-color: transparent;
    transition: var(--transition);
    cursor: pointer;
    color: var(--clr-orange-1);
    margin-top: 0.2rem;
  }
  .icon:hover {
    color: var(--clr-grey-7);
  }

  .underline {
    max-width: var(--max-width);
    border-bottom: 5px solid var(--clr-orange-1);
    border-radius: 100%;
  }
  .hero {
    min-height: 10em;
    min-width: 100%;

    h3 {
      color: var(--clr-black);
      padding-top: 2em;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
  }
`

export default ProjectsPage
