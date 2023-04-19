import { useEffect, useState } from 'react'
import postImages from '../../services/postImages'
import './Form.css'

const API_URL = import.meta.env.VITE_API_URL || process.env.VITE_API_URL

function Form ({ setSelectProps, selectProps, setImage, image }) {
  const [fileImage, setFileImage] = useState(null)

  useEffect(() => {
    if (!fileImage) return

    const formData = new FormData()
    formData.append('file', fileImage)

    postImages(formData)
      .then(data => {
        setSelectProps(prevState => ({
          ...prevState,
          filename: data.filename,
          id: data.id
        }))
      })
  }, [fileImage])

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

  const handleChange = event => {
    const [file] = event.target.files
    const size = byteToMb(file.size)
    const format = file.type.split('/')[1]
    setFileImage(event.target.files[0])
    setSelectProps(prevState => ({
      ...prevState,
      format
    }))
    const name = nameShort(file.name)
    const url = URL.createObjectURL(file)
    const img = new window.Image()
    img.src = url
    img.onload = function () {
      const width = this.naturalWidth
      const height = this.naturalHeight

      setImage({ width, height, name, url, size })
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (selectProps.width === undefined && selectProps.height === undefined && selectProps.format === undefined) {
      const msg = 'Pass at least one parameter'
      window.alert(msg, 'Alert Title')
      console.log('no props image')
      return
    }

    const props = JSON.stringify(selectProps)
    fetch(`${API_URL}/props`, {
      method: 'POST',
      headers: {
        Origin: API_URL,
        'Content-Type': 'application/json'
      },
      body: props
    })
      .then(res => res.blob())
      .then(blob => {
        console.log(blob.size)
        const url = window.URL.createObjectURL(new window.Blob([blob]))
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', `my-image.${selectProps.format}`)
        document.body.appendChild(link)
        link.click()
      })
      .catch(err => console.error(err))
  }

  const LabelButton = () => {
    if (image) {
      return (
        <button className='form-button convert-button' type='submit'>Convert</button>
      )
    }

    return (
      <label
        className='form-button'
        htmlFor='file-upload'
        onClick={null}
      >Select file
      </label>
    )
  }

  return (
    <section className='section-input'>
      <form onSubmit={handleSubmit} encType='multipart/form-data'>

        <input
          name='file'
          type='file'
          id='file-upload'
          accept='image/*'
          onChange={handleChange}

        />
        <LabelButton />
      </form>

    </section>
  )
}

export default Form
