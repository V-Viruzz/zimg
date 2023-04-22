
import postImages from '../services/postImages'
import { useEffect, useContext, useState } from 'react'
import { PropsContext } from '../context/props'
import { ImageContext } from '../context/image'

function useImageUploader (file) {
  const [fileImage, setFileImage] = useState(file)
  const { selectProps, setSelectProps } = useContext(PropsContext)
  const { setUploading } = useContext(ImageContext)

  useEffect(() => {
    if (!fileImage) return

    const format = fileImage.type.split('/')[1]
    const formData = new FormData()
    formData.append('file', fileImage)
    setUploading(true)
    postImages(formData)
      .then(data => {
        setSelectProps(prevState => ({
          ...prevState,
          filename: data.filename,
          id: data.id,
          format
        }))
        setUploading(false)
      })
  }, [fileImage])

  return { uploadImage: setFileImage, props: selectProps }
}

export default useImageUploader
