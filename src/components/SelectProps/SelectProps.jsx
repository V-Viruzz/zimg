import { useState } from 'react'
import './SelectProps.css'

function SelectProps ({ setSelectProps }) {
  const [width, setWidth] = useState('')
  const [height, setHeight] = useState('')
  return (
    <section className='section-props'>
      <div>
        <select
          name='select' required onChange={(event) => setSelectProps(prevState => ({
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
        placeholder='width'
        value={width}
        type='text' onChange={(event) => {
          const date = parseInt(event.target.value)
          if (isNaN(date)) return
          setWidth(date)
          setSelectProps(prevState => ({
            ...prevState,
            width: date

          }))
        }}
           />
      </div>
      <div><input
        placeholder='height'
        value={height}
        type='text' onChange={(event) => {
          const date = parseInt(event.target.value)
          if (isNaN(date)) return
          setHeight(date)
          setSelectProps(prevState => ({
            ...prevState,
            height: date

          }))
        }}
           />
      </div>

    </section>
  )
}

export default SelectProps
