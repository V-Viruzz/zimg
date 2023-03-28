import { useState, useEffect } from 'react'
import './App.css'

function App () {
  const [image, setImageDate] = useState(null)
  const [imageFrom, setImageFrom] = useState(null)
  const [propsImage, setPropsImage] = useState(null)
  const [hover, setHover] = useState(false)

  const postImages = async (formData) => {
    try {
      const response = await fetch('http://localhost:3000/upload', {
        method: 'POST',
        body: formData
      })

      if (!response.ok) {
        throw new Error('Error sending image')
      }

      const data = await response.json()
      setPropsImage(prevState => ({
        ...prevState,
        filename: data.filename
      }))
      console.log('Server response:', data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (!imageFrom) return

    const formData = new FormData()
    formData.append('file', imageFrom)

    postImages(formData)
  }, [imageFrom])

  const handleChange = event => {
    const [file] = event.target.files
    const format = file.type.split('/')[1]
    setImageFrom(event.target.files[0])
    setPropsImage(prevState => ({
      ...prevState,
      format
    }))
    const name = file.name
    const url = URL.createObjectURL(file)
    const img = new window.Image()
    img.src = url
    img.onload = function () {
      const width = this.naturalWidth
      const height = this.naturalHeight

      setImageDate({ width, height, name, url })
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (propsImage.width === undefined && propsImage.height === undefined && propsImage.format === undefined) {
      console.log('no props image')
      return
    }

    const props = JSON.stringify(propsImage)
    fetch('http://localhost:3000/props', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: props
    })
  }
  const handleHover = () => {
    console.log('El mouse está sobre el componente!')
    setHover(!hover)
  }
  const estilo = {
    display: hover ? 'block' : 'none'
  }

  const LabelButton = () => {
    if (image) {
      return (
        <button type='submit'>Convert</button>
      )
    }

    return (
      <label
        htmlFor='file-upload'
        onClick={null}
      >Select file
      </label>
    )
  }

  return (
    <div className='App'>
      <header>
        <h1>Convertor</h1>

      </header>

      <main>
        <section className='section-descript'>
          <p>Change format or resolution of your image</p>
        </section>
        <section>
          <form onSubmit={handleSubmit} encType='multipart/form-data'>

            <input name='file' type='file' id='file-upload' accept='image/*' onChange={handleChange} />
            <LabelButton />
          </form>

        </section>

        <section className='section-image'>

          <div
            className='preview'
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}

          >
            <div className='preview-conteiner-btn-exit'>
              {
              image
                ? <div className='btn-exit' style={estilo} onClick={() => setImageDate(null)}>×</div>
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
              : 'name'
            }
            </p>
            <p>
              {
            image
              ? `${image.width}x${image.height}`
              : '0x0'
            }
            </p>
          </div>

        </section>

        <section className='section-promps'>
          <div>
            <select
              name='select' required onChange={(event) => setPropsImage(prevState => ({
                ...prevState,
                format: event.target.value
              }))}
            >
              <option value={null}>Format</option>
              <option value='png'>PNG</option>
              <option value='jpeg'>JPEG</option>
              <option value='webp'>WEBP</option>
              <option value='gif'>GIF</option>
              <option value='tiff'>TIFF</option>
              <option value='avif'>AVIF</option>
              <option value='jxl'>JXL</option>
              <option value='raw'>RAW</option>
            </select>
          </div>

          <div><input
            type='text' onChange={(event) => setPropsImage(prevState => ({
              ...prevState,
              width: parseInt(event.target.value)

            }))}
               />
          </div>
          <div><input
            type='text' onChange={(event) => setPropsImage(prevState => ({
              ...prevState,
              height: parseInt(event.target.value)

            }))}
               />
          </div>

        </section>

      </main>

    </div>
  )
}

export default App
