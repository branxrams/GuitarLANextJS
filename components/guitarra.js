import Image from "next/image";
import Link from "next/link";
import styles from "../styles/guitarras.module.css";

export default function Guitarra({ guitarra }) {
  const { description, image, name, price, url } = guitarra
  return (
    <div className={styles.guitarra}>
      <Image
        src={image.data?.attributes.formats.medium.url}
        width={600}
        height={400}
        alt={name}
      />

      <div className={styles.contenido}>
        <h3>{name}</h3>
        <p className={styles.descripcion}>{description}</p>
        <p className={styles.precio}>${price}</p>
      </div>
      <Link href={`/guitarras/${url}`} className={styles.enlace}>
        Ver producto
      </Link>
    </div>
  );
}
