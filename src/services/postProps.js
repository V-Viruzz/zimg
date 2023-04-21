const API_URL = import.meta.env.VITE_API_URL || process.env.VITE_API_URL

function postProps (props) {
  const isProps = props.width === undefined &&
   props.height === undefined &&
   props.format === undefined

  if (isProps) {
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

export default postProps
