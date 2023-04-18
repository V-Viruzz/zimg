import { useState } from 'react'
import './PreviewImage.css'

function PreviewImage ({ image, setImage }) {
  const [hover, setHover] = useState(false)

  const handleHover = () => {
    setHover(!hover)
  }
  const handleClick = () => {
    window.localStorage.setItem('save-preview', image)
    const inputElement = document.getElementById('file-upload')

    // Restablece el valor del campo de entrada de tipo file
    inputElement.value = ''
    setImage(null)

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
          image
            ? <div className='btn-exit' style={estilo} onClick={handleClick}>×</div>
            : ''
          }
        </div>
        {
        image
          ? <img id='preview-selected-image' src={image.url} />
          : <h3>preview image</h3>
        }

      </div>
      <div className='image-info'>
        <p>
          {
            image
              ? `${image.name}`
              : 'image.jpg'
            }
        </p>
        <p>
          {
            image
              ? `${image.width}x${image.height}`
              : '720x400'
            }
        </p>
      </div>
    </section>
  )
}

export default PreviewImage
