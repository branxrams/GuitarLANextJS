import Image from "next/image";
import styles from "../../styles/guitarras.module.css";
import Layout from "../../components/layout";
import { useState } from "react";

export default function Producto({ guitarra, agregarCarrito }) {

  const [cantidad, setCantidad] = useState(0);

  const { description, image, name, price, url } = guitarra[0].attributes;

  const handleSubmit = e => {
    e.preventDefault()

    if (cantidad < 1) {
      alert('cantidad no valida')
      return
    }

    const guitarraSeleccionada = {
      id: guitarra[0].id,
      imagen: image.data?.attributes.url,
      name,
      price,
      cantidad
    }
    
    //pansando la informacion al context
    agregarCarrito(guitarraSeleccionada)
  }

  return (
    <Layout title={`Guitarra ${name}`}>
      <div className={styles.guitarra}>
        <Image
          src={image.data?.attributes.url}
          width={600}
          height={400}
          alt={name}
        />

        <div className={styles.contenido}>
          <h3>{name}</h3>
          <p className={styles.descripcion}>{description}</p>
          <p className={styles.precio}>${price}</p>

          <form onSubmit={handleSubmit} className={styles.formulario}>
            <label htmlFor="cantidad">Cantidad</label>
            <select
              onChange={ e => setCantidad(Number(e.target.value))}
              id="cantidad">
              <option value="0">-- Selecione --</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>

            <input type="submit" value={'Agregar al carrito'} />
          </form>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const respuesta = await fetch(`${process.env.API_URL}/guitars`);
  const { data } = await respuesta.json();

  const paths = data.map((guitarra) => ({
    params: {
      url: guitarra.attributes.url,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { url } }) {
  const respuesta = await fetch(
    `${process.env.API_URL}/guitars?filters[url]=${url}&populate=image`
  );

  const { data: guitarra } = await respuesta.json();

  return {
    props: {
      guitarra,
    },
  };
}
