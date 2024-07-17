import React, { useContext } from 'react'
import { ImageContext } from '../../context/image'
import style from './FileInformation.module.css'

export default function FileInformation () {
  const { imagePreview } = useContext(ImageContext)

  return (
    <>
      {imagePreview && (
        <div className={style.fileInformation}>
          <p>{imagePreview.name}</p>
          <p>{imagePreview.size}</p>
          <p>{imagePreview.width}x{imagePreview.height}</p>
        </div>
      )}
    </>
  )
}
