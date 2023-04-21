import { createContext, useState } from 'react'

export const ImageContext = createContext()

export function ImageProvider ({ children }) {
  const [imagePreview, setImagePreview] = useState(null)

  return (
    <ImageContext.Provider value={{
      imagePreview,
      setImagePreview
    }}
    >
      {children}
    </ImageContext.Provider>
  )
}
