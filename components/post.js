import Image from "next/image";
import Link from "next/link";
import { formatearFecha } from "../utils/helpers";
import styles from "../styles/blog.module.css";

export default function Post({ post }) {
  const { content, image, title, url, publishedAt } = post;

  return (
    <article>
      <Image
        src={image.data.attributes.formats.medium.url}
        width={600}
        height={400}
        alt={`imagen blog ${title}`}
      />

      <div className={styles.contenido}>
        <h3>{title}</h3>
        <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
        <p className={styles.resumen}>{content}</p>

        <Link href={`/blog/${url}`} className={styles.enlace}>
          Leer Post
        </Link>
      </div>
    </article>
  );
}
