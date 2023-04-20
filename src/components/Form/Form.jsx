import useImageUploader from '../../hooks/useImageUploader'
import useImagePreview from '../../hooks/useImagePreview'
import LabelButton from '../LabelButton/LabelButton'
import './Form.css'

const API_URL = import.meta.env.VITE_API_URL || process.env.VITE_API_URL

function Form () {
  const { setFileImage, props } = useImageUploader(null)
  const { imagePreview, setImagePreviewNewFile } = useImagePreview()

  const handleChange = event => {
    const [file] = event.target.files
    setFileImage(file)
    setImagePreviewNewFile(file)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (props.width === undefined && props.height === undefined && props.format === undefined) {
      const msg = 'Pass at least one parameter'
      window.alert(msg, 'Alert Title')
      console.log('no props image')
      return
    }

    const propsPost = JSON.stringify(props)
    fetch(`${API_URL}/props`, {
      method: 'POST',
      headers: {
        Origin: API_URL,
        'Content-Type': 'application/json'
      },
      body: propsPost
    })
      .then(res => res.blob())
      .then(blob => {
        console.log(blob.size)
        const url = window.URL.createObjectURL(new window.Blob([blob]))
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', `my-image.${props.format}`)
        document.body.appendChild(link)
        link.click()
      })
      .catch(err => console.error(err))
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
        <LabelButton image={imagePreview} />
      </form>

    </section>
  )
}

export default Form
