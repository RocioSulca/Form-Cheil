import { Controller } from "react-hook-form";
import './index.scss'

const Checkbox = ({
  control,
  name,
  rules,
  label,
}) => {
  return (
    <Controller
      control={control}
      render={({ field, fieldState }) => (

        <section className="container__check">
          <input
            type="checkbox"
            onChange={field.onChange}
            onBlur={field.onBlur}
            value={field.value}
            name={field.name}
            checked={field.value}
          />
          <section>
            <label>
              {label}
            </label>

            {fieldState.error && (
              <p>
                {fieldState.error.message}
              </p>
            )}
          </section>
        </section>
      )}
      name={name}
      defaultValue={false}
      rules={rules}
    />
  );
};

export default Checkbox;

