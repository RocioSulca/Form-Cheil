import { Controller } from "react-hook-form"

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
          <section>
            {label && (
              <label
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  paddingBottom: 10
                }}
              >{label}</label>
            )}
            <section>
              <input
              type={type}
                style={{
                  borderRadius: 5,
                  borderWidth: 1,
                  padding: 5,
                  fontSize: 14,
                  paddingVertical: 0,
                  borderColor: fieldState.error ? 'red' : '#111111',
                  width: '100%'
                }}
                placeholder={placeholder}
                onChange={e => {
                  field.onChange(e.target.value)
                }}
                value={field.value}
              />
            </section>
            {fieldState.error && (
              <section
                style={{
                  display: 'flex',
                  alignItems: 'flex-start'
                }}
              >
                <p
                  style={{
                    color: 'red',
                    fontSize: 12,
                  fontWeight: 500,
                  }}
                >{fieldState.error.message}</p>
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

InputText.prototype = {
  // control: 
  // name,
  // rules,
  // placeholder,
  // label,
  type: 'text'
}

export default InputText