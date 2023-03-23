import React, { createContext} from 'react'

export const FaviconContext = createContext()

const FaviconProvider = ({ children }) => {

    function updateFavicon(iconUrl) {
        document.querySelector('link[rel="icon"]').href = iconUrl;
      }
      
  return (
    <FaviconContext.Provider value={{ updateFavicon }} >
      {children}
    </FaviconContext.Provider>
  )
}
export default FaviconProvider
