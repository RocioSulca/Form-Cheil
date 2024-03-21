import { Controller } from "react-hook-form";


const Select = ({
  control,
  name,
  rules,
  options,
  placeholder,
  label,
  className, // Prop para clases CSS personalizadas
}) => {
  return (
    <Controller
      control={control}
      render={({ field, fieldState }) => (
        <div>
          {label && (
            <label
              style={{
                fontSize: 12,
                fontWeight: 600
              }}
            >
              {label}
            </label>
          )}
          <div>
            <select
              style={{
                fontSize: 16,
                paddingVertical: 0,
                padding: '5px 10px',
                width: '100%',
                borderColor: fieldState.error ? 'red' : '#111111',
                borderRadius: 5,
              }}
              {...field} // Spread para pasar props del campo
            >
              {placeholder && (
                <option value="" disabled>
                  {placeholder}
                </option>
              )}
              {options.map((option) => (
                <option key={option.value} value={option.value} style={{width: '100px', backgroundColor: 'red'}}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          {fieldState.error && (
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
              }}
            >
              <p
                style={{
                  color: 'red',
                  fontSize: 12,
                  fontWeight: 500,
                }}
              >
                {fieldState.error.message}
              </p>
              {/* Aquí puedes agregar un ícono de error u otro indicador visual */}
            </div>
          )}
        </div>
      )}
      name={name}
      defaultValue=""
      rules={rules}
    />
  );
};

export default Select;
