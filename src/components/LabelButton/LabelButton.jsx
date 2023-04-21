import React from 'react'

function LabelButton ({ image }) {
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

export default LabelButton
