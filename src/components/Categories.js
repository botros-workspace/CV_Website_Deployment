import React, { useState } from 'react'
import styled from 'styled-components'

import { useGlobalContext } from '../context'
const Categories = () => {
  const { projects_level, allCategories, filterData } = useGlobalContext()
  const [type, setType] = useState(projects_level || 'all')
  const handle = (category) => {
    filterData(category)
    setType(category)
  }
  return (
    <Wrapper>
      <div className='btn-container'>
        {allCategories.map((category, index) => {
          return (
            <button
              type='button'
              className={`${
                category === type ? 'filter-btn active' : 'filter-btn'
              }`}
              key={index}
              onClick={() => handle(category)}
            >
              {category}
            </button>
          )
        })}
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.nav`
  .btn-container {
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .filter-btn {
    font-weight: 600;
    background: transparent;
    border-color: transparent;
    font-size: 1.1rem;
    text-transform: capitalize;
    margin: 0 0.5rem;
    letter-spacing: 1px;
    padding: 0.375rem 0.75rem;
    color: var(--clr-blue-1);
    cursor: pointer;
    transition: var(--transition);

    border: none;
    outline: none;
    &.active {
      outline: none;
      border-bottom: 4px solid var(--clr-orange-1);
    }
  }
  .filter-btn:hover {
  }
`
export default Categories
