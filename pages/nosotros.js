import Image from "next/image"
import Layout from "../components/layout"
import styles from '../styles/nosotros.module.css'

export default function Nosotros() {
  return (
    <Layout
      title={'Nosotros'}
      description='Sobre nosotros, GuitarLA, tienda de musica'
    >
        
        <main className="contenedor">
          <h2 className="heading">Nosotros</h2>

          <div className={styles.contenido}>
          <Image src='/img/nosotros.jpg' alt="Imagen sobre nosotros" width={1000} height={800}/>

            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quaerat voluptatem minus harum, nihil quisquam eius blanditiis similique qui consectetur corrupti recusandae aliquid! Fugit numquam expedita officia doloremque quaerat sapiente! Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus est quas mollitia, repudiandae fuga nulla illo doloremque eveniet, eaque dignissimos quod enim minus perspiciatis, corporis tenetur nobis? Eaque, debitis delectus.
                Porro accusamus illum, ipsa dolorem harum eveniet voluptatum fuga! Aut quia vitae quibusdam, suscipit dolorem recusandae veritatis, reprehenderit corrupti placeat corporis provident sunt totam quaerat facilis tenetur dolor nobis molestiae!
              </p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, qui fugit excepturi quidem repellendus dolore delectus nemo obcaecati consectetur eligendi perferendis nam assumenda quas rem, sed incidunt nesciunt laudantium ratione. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni quas soluta sint ut nihil cumque maxime enim facilis modi. Quae, dolores minima! Iure illo iste, repellat ea facere saepe aliquam!</p>
            </div>
          </div>
        </main>
    </Layout>
  )
}
