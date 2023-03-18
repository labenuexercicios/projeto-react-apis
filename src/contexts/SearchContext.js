import React, { createContext, useState, useEffect } from 'react'

export const SearchContext = createContext()

const SearchProvider = ({ children }) => {
  const [nameSearch, setNameSearch] = useState(
    localStorage.getItem('nameSearch') || ''
  )
  const [typeFilter, setTypeFilter] = useState(
    localStorage.getItem('typeFilter') || ''
  )
  const [order, setOrder] = useState(localStorage.getItem('order') || '')
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    localStorage.setItem('typeFilter', typeFilter)
    localStorage.setItem('nameSearch', nameSearch)
    localStorage.setItem('order', order)
  }, [typeFilter, nameSearch, order])

  const filterByName = pokemon => {
    return pokemon.name.toLowerCase().includes(nameSearch.toLowerCase())
  }

  const resetFilterByName = () => {
    setNameSearch('')
  }

  const filterByType = pokemon => {
    const types = pokemon.types
    const typeNames = types.map(type => type.type.name)
    return typeFilter === '' || typeNames.includes(typeFilter)
  }

  const sortPokes = () => {
    return (a, b) => {
      if (order === 'crescente') {
        if (a.name < b.name) return -1
        if (a.name > b.name) return 1
        return 0
      } else if (order === 'decrescente') {
        if (a.name < b.name) return 1
        if (a.name > b.name) return -1
        return 0
      }
      return 0
    }
  }

  const resetTypesSort = () => {
    setTypeFilter('')
    setOrder('')
  }

  return (
    <SearchContext.Provider
      value={{
        nameSearch,
        setNameSearch,
        filterByName,
        resetFilterByName,
        typeFilter,
        setTypeFilter,
        filterByType,
        order,
        setOrder,
        sortPokes,
        resetTypesSort,
        currentPage,
        setCurrentPage
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}
export default SearchProvider
