import { createContext, useState } from 'react'

export const ImageContext = createContext()

export function ImageProvider ({ children }) {
  const [imagePreview, setImagePreview] = useState(null)
  const [uploading, setUploading] = useState(false)
  const [loading, setLoading] = useState(false)

  return (
    <ImageContext.Provider value={{
      imagePreview,
      setImagePreview,
      uploading,
      setUploading,
      loading,
      setLoading
    }}
    >
      {children}
    </ImageContext.Provider>
  )
}
