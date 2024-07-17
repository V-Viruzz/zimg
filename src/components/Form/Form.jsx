import useImageUploader from '../../hooks/useImageUploader'
import useImagePreview from '../../hooks/useImagePreview'
import LabelButton from '../LabelButton/LabelButton'
import postProps from '../../services/postProps'
import style from './Form.module.css'

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
    <div className={`${style.container} ${imagePreview !== null ? '' : `${style.space}`}`}>
      <form
        className={style.form}
        onSubmit={handleSubmit}
        encType='multipart/form-data'
      >
        <input
          className={style.fileUpload}
          name='file'
          type='file'
          id='file-upload'
          accept='image/*'
          onChange={handleChange}

        />
        <LabelButton image={imagePreview} />
      </form>
    </div>
  )
}

export default Form
