import React, { useContext, useReducer } from 'react'
import data from './assets/data'
import reducer from './reducer'
const allCategories = ['all', ...new Set(data.map((item) => item.level))]
const initialState = {
  isSidebarOpen: false,
  loading: false,
  projects: data,
  filteredProjects: data,
  projects_level: 'all',
}

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const filterData = (category) => {
    dispatch({ type: 'FILTER_DATA', payload: category })
  }

  const openSidebar = () => {
    dispatch({ type: 'SIDEBAR_OPEN' })
  }
  const closeSidebar = () => {
    dispatch({ type: 'SIDEBAR_CLOSE' })
  }
  return (
    <AppContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
        allCategories,
        filterData,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(AppContext)
}
