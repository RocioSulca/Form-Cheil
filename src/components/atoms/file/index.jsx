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
                fontSize: 12,
                fontWeight: 600
              }}
            >
              {label}
            </label>
          )}
          <div style={{ borderColor: '#111111', borderWidth: 1, borderStyle: 'solid', height: 30, borderRadius: 5 }}>
            <section style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', height: '100%', justifyContent: 'space-between' }}>
              <section style={{display: 'flex', alignItems:'center'}}>
                <input
                  type="file"
                  accept={accept}
                  style={{ position: 'absolute', opacity: 0, width: 110, height: 60, cursor: 'pointer' }}
                  onChange={(e) => field.onChange(e.target.files[0])}
                />
                <button type="button" style={{ padding: '2px 10px', cursor: 'pointer' }}>Examinar...</button>
                {field.value ? (
                  <span style={{ marginInline: '5px', fontSize: 12 }}>{field.value.name}</span>
                ) : (
                  <span style={{ marginInline: '5px', fontSize: 12 }}>No se ha seleccionado ningún archivo.</span>
                )}
              </section>
              <Tooltip text="Adjunta tu boleta">
                <img src={Icono} style={{ width: 20, height: 20, backgroundColor: 'white', borderRadius: '50%' }} />
              </Tooltip>
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
