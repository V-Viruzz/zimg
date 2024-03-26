import { useContext } from 'react'
import { ImageContext } from '../../context/image'

function LabelButton ({ image }) {
  const { uploading } = useContext(ImageContext)

  if (image) {
    return (
      <button
        className={`form-button convert-button ${uploading ? 'form-button-uploading' : null}`}
        type='submit'
        disabled={!uploading}
      >Convert
      </button>
    )
  }

  return (
    <label
      className={`form-button ${uploading ? 'form-button-uploading' : null}`}
      htmlFor='file-upload'
      onClick={null}
    >Select file
    </label>
  )
}

export default LabelButton
