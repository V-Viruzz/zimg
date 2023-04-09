const API_URL = import.meta.env.VITE_API_URL

console.log(API_URL)
const postImages = async (formData) => {
  try {
    const response = await fetch(`${API_URL}/upload`, {
      method: 'POST',
      headers: {
        Origin: API_URL
      },
      body: formData
    })

    // console.log(apiUrl)

    if (!response.ok) {
      throw new Error('Error sending image')
    }

    const data = await response.json()
    console.log('Server response:', data)
    return data
  } catch (error) {
    console.error(error)
  }
}

export default postImages
