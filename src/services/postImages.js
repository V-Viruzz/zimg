const postImages = async (formData) => {
  try {
    const response = await fetch('http://localhost:3000/upload', {
      method: 'POST',
      headers: {
        Origin: 'http://localhost:3000'
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
