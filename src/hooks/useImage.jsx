import { useState } from 'react'

function useImage () {
  const [image, setImage] = useState(null)
  const [selectProps, setSelectProps] = useState(null)

  return {
    image,
    setImage,
    selectProps,
    setSelectProps

  }
}

export default useImage
