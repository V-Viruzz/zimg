import useImageUploader from '../../hooks/useImageUploader'
import useImagePreview from '../../hooks/useImagePreview'
import LabelButton from '../LabelButton/LabelButton'
import postProps from '../../services/postProps'
import './Form.css'

function Form () {
  const { props, uploadImage } = useImageUploader(null)
  const { imagePreview, setImagePreviewNewFile } = useImagePreview()

  const handleChange = event => {
    const [file] = event.target.files
    uploadImage(file)
    setImagePreviewNewFile(file)
  }

  const handleSubmit = event => {
    event.preventDefault()
    postProps(props)
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
