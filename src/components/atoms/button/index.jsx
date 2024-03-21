import './index.scss'

const ButtonForm = ({ type, value }) => {
  return (
    <section className="container__button" >
      <input type={type} value={value} className="container__button--primary"  />
    </section>
  )
}

export default ButtonForm