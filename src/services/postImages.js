// const API = 'http://localhost:3000'
const API = 'https://zimg-jxvq6bbx1-viruzzz0.vercel.app'

const postImages = async (formData) => {
  try {
    const response = await fetch(`${API}/upload`, {
      method: 'POST',
      headers: {
        Origin: API
      },
      body: formData
    })

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
