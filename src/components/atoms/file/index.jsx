import { Controller } from "react-hook-form";
import Tooltip from '../tooltip/index'
import Icono from '../../../assets/icon/icon-info.svg'

const FileInput = ({
  control,
  name,
  rules,
  accept,
  label,
  placeholder,
  className,
}) => {
  return (
    <Controller
      control={control}
      render={({ field }) => (
        <div className={className}>
          {label && (
            <label
              style={{
                fontSize: 14,
                fontWeight: 600
              }}
            >
              {label}
            </label>
          )}
          <div style={{ borderColor: '#111111', borderWidth: 1, borderStyle: 'solid', height: 40, borderRadius: 5 }}>
            <section style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', height: '100%', justifyContent: 'space-between' }}>
              <section style={{}}>
                <input
                  type="file"
                  accept={accept}
                  style={{ position: 'absolute', opacity: 0, width: 110, height: 60, cursor: 'pointer' }}
                  onChange={(e) => field.onChange(e.target.files[0])}
                />
              <button type="button" style={{ padding: '5px 10px', cursor: 'pointer' }}>Examinar...</button>
              </section>
              {field.value ? (
                <span style={{ marginLeft: '10px'}}>{field.value.name}</span>
              ) : (
                <span style={{ marginLeft: '10px', fontSize: 12 }}>No se ha seleccionado ningún archivo.</span>
              )}
              {/* <section style={{ backgroundColor: 'red', height: '100%' }}> */}
              <Tooltip text="Adjunta tu boleta">

                <img src={Icono} style={{ width: 20, height: 20, backgroundColor: 'white', borderRadius: '50%' }} />
              </Tooltip>
              {/* </section> */}
            </section>
          </div>
        </div>
      )}
      name={name}
      rules={rules}
    />
  );
};

export default FileInput;
