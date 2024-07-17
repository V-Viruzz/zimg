import Form from './components/Form/Form'
import SelectProps from './components/SelectProps/SelectProps'
import PreviewImage from './components/PreviewImage/PreviewImage'
import { ImageProvider } from './context/image'
import style from './App.module.css'
import '@fontsource-variable/outfit'
import Header from './components/Header/Header'
import FileInformation from './components/FileInformation/FileInformation'

function App () {
  return (
    <div className={style.containerApp}>
      <Header />

      <main className={style.main}>
        {/* <section className='section-descript'>
          <p>Change image format or resolution</p>
        </section> */}

        <ImageProvider>
          <PreviewImage />

          <section className={style.container}>
            <Form />
            <FileInformation />
            <SelectProps />
          </section>
        </ImageProvider>
      </main>
    </div>
  )
}

export default App
