import { useForm } from 'react-hook-form'
import './index.scss'
import Checkbox from './components/atoms/checkbox'
import SectionInput from './components/molecules/sectionInput'
import SectionSelect from './components/molecules/sectionSelect'


function App() {

  const { control, handleSubmit } = useForm()
  // const [isChecked, setIsChecked] = useState(false);

  const onSubmit = (data) => {
    console.log(data)
  }



  return (
    // <section className='form-view'>
    //   <header>
    //       <h2>Si ya realizaste tu compra, regístarte aquí</h2>
    //       <h6>Todos los campos con (*) son obligatorios</h6>
    //     </header>
    //   <main>
    //       <form onSubmit={handleSubmit(onSubmit)}>

    //         <SectionInput control={control}/>
    //         <SectionSelect control={control}/>

    //         <Checkbox
    //           control={control}
    //           label="Acepto la POLÍTICA DE PRIVACIDAD (*)"
    //           name="privacy"
    //           value="privacy"
    //           // onChange={(checked) => setIsChecked(checked)}
    //           // checked={isChecked}
    //           rules={{ required: "El campo es obligatorio" }}
    //         />
    //         <Checkbox
    //           control={control}
    //           label="Acepto los Términos y condiciones (*)"
    //           name="terms"
    //           value="terms"
    //           // onChange={(checked) => setIsChecked(checked)}
    //           // checked={isChecked}
    //           rules={{ required: "El campo es obligatorio" }}
    //         />
    //         <Checkbox
    //           control={control}
    //           label="Deseo recibir información de promociones Samsung"
    //           name="promotion"
    //           value="promotion"
    //         // onChange={(checked) => setIsChecked(checked)}
    //         // checked={isChecked}
    //         />


    //         <p style={{ textAlign: 'center', fontSize: 14, fontWeight: 600 }}>Este sitio esta protegido por reCAPTCHA. Aplican la Política de Privacidad de Google y los Términos del Servicio</p>
    //         <section style={{ textAlign: 'center' }}>
    //           <input type='submit' value='REGISTRAR' style={{ backgroundColor: '#111111', color: 'white' ,border: 'none', padding: '10px 70px', borderRadius: 20, fontSize: 12 }} />
    //         </section>
    //       </form>
    //     </main>

    // </section>
    <main className='container'>

      <form onSubmit={handleSubmit(onSubmit)} className='container__form'>
        <section className='container__form--header'>
          <h1>Si ya realizaste tu compra, regístarte aquí</h1>
          <p>Todos los campos con (*) son obligatorios</p>
        </section>
        <section className='container__form--body'>
          <SectionInput control={control} />
          <SectionSelect control={control} />
          <section className='container__form--checkbox'>
            <Checkbox
              control={control}
              label="Acepto la POLÍTICA DE PRIVACIDAD (*)"
              name="privacy"
              value="privacy"
              // onChange={(checked) => setIsChecked(checked)}
              // checked={isChecked}
              rules={{ required: "El campo es obligatorio" }}
            />
            <Checkbox
              control={control}
              label="Acepto los Términos y condiciones (*)"
              name="terms"
              value="terms"
              // onChange={(checked) => setIsChecked(checked)}
              // checked={isChecked}
              rules={{ required: "El campo es obligatorio" }}
            />
            <Checkbox
              control={control}
              label="Deseo recibir información de promociones Samsung"
              name="promotion"
              value="promotion"
            // onChange={(checked) => setIsChecked(checked)}
            // checked={isChecked}
            />
          </section>

          <p style={{ textAlign: 'center', fontSize: 14, fontWeight: 600, paddingBlock: 20 }}>Este sitio esta protegido por reCAPTCHA. Aplican la Política de Privacidad de Google y los Términos del Servicio</p>
          <section style={{ textAlign: 'center' }}>
            <input type='submit' value='REGISTRAR' style={{ backgroundColor: '#111111', color: 'white', border: 'none', padding: '10px 70px', borderRadius: 20, fontSize: 12 }} />
          </section>
        </section>
      </form>
    </main>
  )
}

export default App
