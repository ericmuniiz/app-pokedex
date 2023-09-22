import { Link } from "react-router-dom"

 function Home() {
    return (
        <div>
            <h1>Bem-vindo(a) à Home</h1>
            <Link to="/Contatos">Ir para contatos</Link>
            <div>
            <Link to="/Pokemon">Ir para Pokedex</Link>
            </div>
           
        </div>
    )
}

export default Home