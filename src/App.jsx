import { useForm } from 'react-hook-form'
import './index.scss'
import SectionInput from './components/molecules/sectionInput'
import SectionSelect from './components/molecules/sectionSelect'
import SectionCheckbox from './components/molecules/sectionCheckbox'
import ButtonForm from './components/atoms/button'

function App() {

  const { control, handleSubmit } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <main className='container'>
      <form onSubmit={handleSubmit(onSubmit)} className='container__form'>
        <section className='container__form--header'>
          <h1>Si ya realizaste tu compra, regístarte aquí</h1>
          <p>Todos los campos con (*) son obligatorios</p>
        </section>
        <section className='container__form--body'>
          <SectionInput control={control} />
          <SectionSelect control={control} />
          <SectionCheckbox control={control} />
          <p className='container__form--paragraph'>Este sitio esta protegido por reCAPTCHA. Aplican la Política de Privacidad de Google y los Términos del Servicio</p>
          <ButtonForm type='submit' value='REGISTRAR' />
        </section>
      </form>
    </main>
  )
}

export default App
