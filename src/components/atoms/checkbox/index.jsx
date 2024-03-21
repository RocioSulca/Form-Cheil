
// const Checkbox = ({ label, onChange, name, value, checked }) => {


//     const handleCheckboxChange = (e) => {
//         onChange && onChange(e.target.checked);
//       };

//   return (
//     <div className="topping" style={{ marginTop: 10, verticalAlign: 'text-bottom', position: 'relative' }}>
//       <input
//         type="checkbox"
//         id="topping"
//         name={name}
//         value={value}
//         checked={checked}
//         onChange={handleCheckboxChange}
//         style={{ marginRight: '5px' }}
//       />
//       <label htmlFor="topping">{label}</label>
//     </div>
//   );
// };

// export default Checkbox;

import { Controller } from "react-hook-form";
import './index.scss'

const Checkbox = ({
  control,
  name,
  rules,
  label,
  className, // Prop para clases CSS personalizadas
}) => {
  return (
    <Controller
      control={control}
      render={({ field, fieldState }) => (

        <div style={{ display: 'flex', alignItems: 'center', gap: 6, justifyContent: 'flex-start' }}>
          <input
            type="checkbox"
            onChange={field.onChange}
            onBlur={field.onBlur}
            value={field.value}
            name={field.name}
            checked={field.value}
            className={className} // Si quieres añadir la clase al input
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          />
          <section>
            <label
              style={{
                fontSize: 12,
                fontWeight: 600
              }}
            >
              {label}
            </label>

            {fieldState.error && (
              <p
                style={{
                  color: 'red',
                  fontSize: 12,
                  fontWeight: 500,

                }}
              >
                {fieldState.error.message}
              </p>
            )}
          </section>
        </div>
      )}
      name={name}
      defaultValue={false}
      rules={rules}
    />
  );
};

export default Checkbox;

