import Form from './components/Form/Form'
import SelectProps from './components/SelectProps/SelectProps'
import PreviewImage from './components/PreviewImage/PreviewImage'
import { ImageProvider } from './context/image'
import './App.css'

function App () {
  return (
    <div className='App'>
      <header>
        <h1>Zimg</h1>
      </header>

      <main>
        <section className='section-descript'>
          <p>Change image format or resolution</p>
        </section>

        <ImageProvider>
          <Form />
          <PreviewImage />
        </ImageProvider>

        <SelectProps />
      </main>
    </div>
  )
}

export default App
