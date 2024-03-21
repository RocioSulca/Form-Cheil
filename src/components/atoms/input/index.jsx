import { Controller } from "react-hook-form"
import './index.scss'

const InputText = ({
  control,
  name,
  rules,
  placeholder,
  label,
  type
}) => {
  return (
    <Controller
      control={control}
      render={({ field, fieldState }) => (
        <>
          <section className="input__content">
            {label && (
              <label>{label}</label>
            )}
            <section>
              <input
              type={type}
                placeholder={placeholder}
                onChange={e => {
                  field.onChange(e.target.value)
                }}
                value={field.value}
                style={{borderColor: fieldState.error ? 'red' : '#111111',}}
              />
            </section>
            {fieldState.error && (
              <section className="input__content--error">
                <p>{fieldState.error.message}</p>
              </section>
            )}
          </section>
        </>
      )}
      name={name}
      defaultValue=''
      rules={rules}
    />
  )
}


export default InputText