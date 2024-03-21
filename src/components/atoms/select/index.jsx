import { Controller } from "react-hook-form";
import './index.scss'

const Select = ({
  control,
  name,
  rules,
  options,
  placeholder,
  label,
}) => {
  return (
    <Controller
      control={control}
      render={({ field, fieldState }) => (
        <section className="select__content">
          {label && (
            <label>
              {label}
            </label>
          )}
          <section>
            <select
            style={{
              borderColor: fieldState.error ? 'red' : '#111111',
            }}
              {...field}
            >
              {placeholder && (
                <option value="" disabled>
                  {placeholder}
                </option>
              )}
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </section>
          {fieldState.error && (
            <section className="select__content--error">
              <p>
                {fieldState.error.message}
              </p>
            </section>
          )}
        </section>
      )}
      name={name}
      defaultValue=""
      rules={rules}
    />
  );
};

export default Select;
