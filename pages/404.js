import Link from "next/link"
import Layout from "../components/layout"

export default function Pagina404() {
  return (
    <Layout
        title='Pagina no encontrada'
    >
        <div>
            <p className="error">Pagina no encontrada</p>
        </div>
        <Link 
            href='/'
            className="error-enlace"
        >
            
                Ir a Inicio
            
        </Link>
    </Layout>
  )
}
