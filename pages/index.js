import Post from "../components/post";
import Guitarra from "../components/guitarra";
import Layout from "../components/layout";
import Curso from "../components/curso";
import styles from "../styles/grid.module.css";

export default function Home({ guitarras, posts, curso }) {
  return (
    <>
      <Layout
        title={"Inicio"}
        description={"Blog de musica, venta de guitarras y mas"}
      >
        <main className="contenedor">
          <h1 className="heading">Nuestra Coleccion</h1>
          <div className={styles.grid}>
            {guitarras.map((guitarra) => (
              <Guitarra key={guitarra.id} guitarra={guitarra.attributes} />
            ))}
          </div>
        </main>
        <Curso curso={curso.attributes} />
        <section className="contenedor">
          <h2 className="heading">Blog</h2>
          <div className={styles.grid}>
            {posts.map((post) => (
              <Post key={post.id} post={post.attributes} />
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const urlGuitarras = `${process.env.API_URL}/guitars?populate=image`;
  const urlPost = `${process.env.API_URL}/posts?populate=image`;
  const urlCurso = `${process.env.API_URL}/grade?populate=image`;

  const [resGuitarras, resPosts, resCurso] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlPost),
    fetch(urlCurso),
  ]);

  const [{ data: guitarras }, { data: posts }, { data: curso }] =
    await Promise.all([resGuitarras.json(), resPosts.json(), resCurso.json()]);

  return {
    props: {
      guitarras,
      posts,
      curso,
    },
  };
}
