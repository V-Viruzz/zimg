
import { useEffect } from 'react'

function useFetch (url) {
  const postImages = async (formData) => {
    try {
      const response = await fetch('http://localhost:3000/upload', {
        method: 'POST',
        body: formData
      })

      if (!response.ok) {
        throw new Error('Error sending image')
      }

      const data = await response.json()
      setPropsImage(prevState => ({
        ...prevState,
        filename: data.filename
      }))
      console.log('Server response:', data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (!imageFrom) return

    const formData = new FormData()
    formData.append('file', imageFrom)

    postImages(formData)
  }, [imageFrom])
}

export default useFetch
