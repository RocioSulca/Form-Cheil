import { Controller } from "react-hook-form";
import Tooltip from '../tooltip/index'
import Icono from '../../../assets/icon/icon-info.svg'
import './index.scss'

const FileInput = ({
  control,
  name,
  rules,
  accept,
  label,
}) => {
  return (
    <Controller
      control={control}
      render={({ field }) => (
        <section className='file'>
          {label && (
            <label>
              {label}
            </label>
          )}
          <section className="file__content">
            <section className="file__content--main">
              <section className="file__content--group">
                <input
                  type="file"
                  accept={accept}
                  onChange={(e) => field.onChange(e.target.files[0])}
                />
                <button type="button">Examinar...</button>
                {field.value ? (
                  <span>{field.value.name}</span>
                ) : (
                  <span>No se ha seleccionado ningún archivo.</span>
                )}
              </section>
              <Tooltip text="Adjunta tu boleta">
                <img src={Icono} />
              </Tooltip>
            </section>
          </section>
        </section>
      )}
      name={name}
      rules={rules}
    />
  );
};

export default FileInput;
