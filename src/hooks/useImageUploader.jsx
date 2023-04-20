
import { useEffect, useContext, useState } from 'react'
import postImages from '../services/postImages'
import { PropsContext } from '../context/props'

function useImageUploader (file) {
  const [fileImage, setFileImage] = useState(file)
  const { selectProps, setSelectProps } = useContext(PropsContext)

  useEffect(() => {
    if (!fileImage) return

    const format = fileImage.type.split('/')[1]
    const formData = new FormData()
    formData.append('file', fileImage)

    postImages(formData)
      .then(data => {
        setSelectProps(prevState => ({
          ...prevState,
          filename: data.filename,
          id: data.id,
          format
        }))
      })
  }, [fileImage])

  return { setFileImage, props: selectProps }
}

export default useImageUploader
