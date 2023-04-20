import useImage from './hooks/useImage'
import Form from './components/Form/Form'
import SelectProps from './components/SelectProps/SelectProps'
import PreviewImage from './components/PreviewImage/PreviewImage'
import './App.css'

function App () {
  const { setImage, image } = useImage()

  return (
    <div className='App'>
      <header>
        <h1>Convertor</h1>

      </header>

      <main>
        <section className='section-descript'>
          <p>Change format or resolution of your image</p>
        </section>

        <Form
          image={image}
          setImage={setImage}
        />

        <PreviewImage
          image={image}
          setImage={setImage}
        />

        <SelectProps />

      </main>

    </div>
  )
}

export default App
