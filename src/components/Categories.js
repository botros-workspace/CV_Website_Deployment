import React from 'react'
import styled from 'styled-components'

import { useGlobalContext } from '../context'
const Categories = () => {
  const { allCategories, filterData } = useGlobalContext()
  return (
    <Wrapper>
      <div className='btn-container'>
        {allCategories.map((category, index) => {
          return (
            <button
              type='button'
              className='filter-btn'
              key={index}
              onClick={() => filterData(category)}
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
    border-radius: 50%;
    border: none;
  }
  .filter-btn:hover {
  }
`
export default Categories
