import Checkbox from '../../atoms/checkbox'
import './index.scss'

const SectionCheckbox = ({ control }) => {
  return (
    <section className='container__checkbox'>
      <Checkbox
        control={control}
        label="Acepto la POLÍTICA DE PRIVACIDAD (*)"
        name="privacy"
        value="privacy"
        rules={{ required: "El campo es obligatorio" }}
      />
      <Checkbox
        control={control}
        label="Acepto los Términos y condiciones (*)"
        name="terms"
        value="terms"
        rules={{ required: "El campo es obligatorio" }}
      />
      <Checkbox
        control={control}
        label="Deseo recibir información de promociones Samsung"
        name="promotion"
        value="promotion"
      />
    </section>
  )
}

export default SectionCheckbox