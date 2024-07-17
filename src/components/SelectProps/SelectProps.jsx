import { useState, useContext } from 'react'
import { PropsContext } from '../../context/props'
import style from './SelectProps.module.css'

function SelectProps () {
  const [width, setWidth] = useState('')
  const [height, setHeight] = useState('')
  const { setSelectProps } = useContext(PropsContext)

  const handleWidthChange = (event) => {
    const date = parseInt(event.target.value)
    if (isNaN(date)) return
    setWidth(date)
    setSelectProps(prevState => ({
      ...prevState,
      width: date
    }))
  }

  const handleHeightChange = (event) => {
    const date = parseInt(event.target.value)
    if (isNaN(date)) return
    setHeight(date)
    setSelectProps(prevState => ({
      ...prevState,
      height: date
    }))
  }

  return (
    <div className={style.sectionProps}>
      <div>
        <select
          required
          name='select'
          onChange={(event) => setSelectProps(prevState => ({
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

      <div>
        <input
          placeholder='Width'
          value={width}
          type='text' onChange={handleWidthChange}
        />
      </div>
      <div>
        <input
          placeholder='Height'
          value={height}
          type='text' onChange={handleHeightChange}
        />
      </div>

    </div>
  )
}

export default SelectProps
