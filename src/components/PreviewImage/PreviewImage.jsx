import { useState, useContext } from 'react'
import { ImageContext } from '../../context/image'
import './PreviewImage.css'

function PreviewImage () {
  const [hover, setHover] = useState(false)
  const { imagePreview, setImagePreview } = useContext(ImageContext)

  const handleHover = () => {
    setHover(!hover)
  }
  const handleClick = () => {
    window.localStorage.setItem('save-preview', imagePreview)
    const inputElement = document.getElementById('file-upload')

    // Restablece el valor del campo de entrada de tipo file
    inputElement.value = ''
    setImagePreview(null)

    handleHover()
  }

  const estilo = {
    display: hover ? 'block' : 'none'
  }
  return (
    <section className='section-image'>

      <div
        className='preview'
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        <div className='preview-conteiner-btn-exit'>
          {
          imagePreview
            ? <div className='btn-exit' style={estilo} onClick={handleClick}>×</div>
            : ''
          }
        </div>
        {
        imagePreview
          ? <img id='preview-selected-image' src={imagePreview.url} />
          : <h3>preview image</h3>
        }

      </div>
      <div className='image-info'>
        <p>
          {
            imagePreview
              ? `${imagePreview.name}`
              : ''
            }
        </p>
        <p>
          {
            imagePreview
              ? `${imagePreview.width}x${imagePreview.height}`
              : ''
            }
        </p>
        <p>
          {
            imagePreview
              ? `${imagePreview.size}`
              : ''
            }
        </p>
      </div>
    </section>
  )
}

export default PreviewImage
