import { useContext } from 'react'
import { ImageContext } from '../context/image'

const byteToMb = (bytes) => {
  const kb = bytes / 1024
  const mb = kb / 1024
  const result = kb >= 1024 ? `${mb.toFixed(2)} mb` : `${kb.toFixed(2)} kb`
  return result
}

const nameShort = (name) => {
  const nameOnly = name.split('.')[0]
  const format = name.split('.').pop()
  const fit = nameOnly.substr(0, 5)

  return nameOnly.length > 6 ? `${fit}.${format}` : `${nameOnly}.${format}`
}

function useImagePreview () {
  const { imagePreview, setImagePreview } = useContext(ImageContext)

  const setImagePreviewNewFile = (file) => {
    const size = byteToMb(file.size)
    const name = nameShort(file.name)

    const url = URL.createObjectURL(file)
    const img = new window.Image()
    img.src = url
    img.onload = function () {
      const width = this.naturalWidth
      const height = this.naturalHeight

      setImagePreview({ width, height, name, url, size })
    }
  }

  return {
    imagePreview,
    setImagePreviewNewFile
  }
}

export default useImagePreview
