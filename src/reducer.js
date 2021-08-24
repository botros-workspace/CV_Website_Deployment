const reducer = (state, action) => {
  if (action.type === 'SIDEBAR_OPEN') {
    return { ...state, isSidebarOpen: true }
  }
  if (action.type === 'SIDEBAR_CLOSE') {
    return { ...state, isSidebarOpen: false }
  }
  if (action.type === 'FILTER_DATA') {
    if (action.payload === 'all') {
      return { ...state, filteredProjects: state.projects }
    }

    return {
      ...state,
      filteredProjects: state.projects.filter(
        (item) => item.level === action.payload
      ),
    }
  }

  throw new Error(`No Matching "${action.type}" - action type`)
}
export default reducer
