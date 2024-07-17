const API_URL = import.meta.env.VITE_API_URL || process.env.VITE_API_URL

const postImages = async (formData) => {
  try {
    const response = await fetch(`${API_URL}/upload`, {
      method: 'POST',
      headers: {
        Origin: API_URL
      },
      body: formData
    })

    if (!response.ok) {
      throw new Error('Error sending image')
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
  }
}

export default postImages
