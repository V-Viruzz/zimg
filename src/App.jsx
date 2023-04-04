import useImage from './hooks/useImage'
import Preview from './components/Preview/Preview'
import Form from './components/Form/Form'
import SelectProps from './components/SelectProps/SelectProps'
import './App.css'

function App () {
  const { setImage, image, setSelectProps, selectProps } = useImage()

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
          setSelectProps={setSelectProps}
          selectProps={selectProps}
          image={image}
          setImage={setImage}
        />

        <Preview
          image={image}
          setImage={setImage}
        />

        <SelectProps
          setSelectProps={setSelectProps}
        />

      </main>

    </div>
  )
}

export default App
