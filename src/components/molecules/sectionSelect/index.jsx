import FileInput from '../../atoms/file';
import Select from '../../atoms/select'
import './index.scss'

const SectionSelect = ({ control }) => {

  const products = [
    { value: "product1", label: "Producto 1" },
    { value: "product2", label: "Producto 2" },
    { value: "product3", label: "Producto 3" },
    { value: "product4", label: "Producto 4" }
  ];

  const stores = [
    { value: "store1", label: "Tienda 1" },
    { value: "store2", label: "Tienda 2" },
    { value: "store3", label: "Tienda 3" },
    { value: "store4", label: "Tienda 4" }

  ];

  return (
    <section className='container__select'>
      <Select
        control={control}
        name="product"
        rules={{ required: "Escoja una opción" }}
        options={products}
        placeholder="Selecciona"
        label="Producto comprado (*)"
      />

      <Select
        control={control}
        name="store"
        rules={{ required: "La tienda es obligatoria" }}
        options={stores}
        placeholder="Selecciona"
        label="Tienda (*)"
      />
      <section>
        <FileInput
          control={control}
          name="file"
          rules={{ required: "Por favor selecciona un archivo" }}
          accept="image/jpeg, image/png, application/pdf, image/bmp, image/tiff"
          label="Adjunta tu boleta de pago (*)"
        />
        <p>*Solo se podrá adjuntar un archivo con peso menor a 10MB en los formatos JPG, PNG, BMP, TIF, PDF.</p>
      </section>

    </section>
  )
}

export default SectionSelect