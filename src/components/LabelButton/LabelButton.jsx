import { useContext } from 'react'
import { ImageContext } from '../../context/image'
import style from './LabelButton.module.css'

function LabelButton ({ image }) {
  const { uploading } = useContext(ImageContext)

  if (image) {
    return (
      <button
        className={`${style.formButton} ${style.convertButton} ${uploading ? `${style.formButtonUploading}` : ''}`}
        type='submit'
      >Convert
      </button>
    )
  }

  return (
    <label
      className={`${style.formButton} ${uploading ? `${style.formButtonUploading}` : ''}`}
      htmlFor='file-upload'
      onClick={null}
    >Select file
    </label>
  )
}

export default LabelButton
