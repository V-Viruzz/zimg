import { useState, useContext } from 'react'
import { ImageContext } from '../../context/image'
import style from './PreviewImage.module.css'
import CloseIcon from '../Icons/CloseIcon'

function PreviewImage () {
  const [hover, setHover] = useState(false)
  const { imagePreview, setImagePreview, uploading } = useContext(ImageContext)

  const handleHover = () => setHover(!hover)

  const handleClick = () => {
    window.localStorage.setItem('save-preview', imagePreview)
    const inputElement = document.getElementById('file-upload')

    // Restablece el valor del campo de entrada de tipo file
    inputElement.value = ''
    setImagePreview(null)

    handleHover()
  }

  const Information = () => {
    return (
      <>
        {
          imagePreview
            ? <p>{imagePreview.name} </p>
            : ''
        }

        {
          imagePreview
            ? <p>{imagePreview.width}x{imagePreview.height}</p>
            : ''
        }

        {
          imagePreview
            ? <p>{imagePreview.size}</p>
            : ''
        }
      </>
    )
  }

  return (
    <section className={style.sectionImage}>

      <div
        className={style.preview}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        <div className={`${style.buttonContainer} ${imagePreview === null ? `${style.hidden}` : ''}`}>
          <div className={style.btnExit} onClick={handleClick}>
            <CloseIcon />
          </div>
        </div>
        {
          imagePreview
            ? <img id='preview-selected-image' src={imagePreview.url} />
            : <p>Preview</p>
        }

      </div>
      <div className={style.information}>
        {
          uploading
            ? <p>uploading file...</p>
            : <Information />
        }
      </div>
    </section>
  )
}

export default PreviewImage
