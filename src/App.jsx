import { useEffect, useState } from 'react';
import { Link } from "react-router-dom"
import './App.css'

function App() {

  const [pokemon, setPokemon] = useState();
  const [currentPokemon, setCurrentPokemon] = useState(1);

  useEffect(() => {

    const fetchData = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${currentPokemon}`);
      const data = await response.json();

      setPokemon(data);
      console.log(data);

    }


    fetchData()

  }, [currentPokemon])


  const previousPok = () => {
    if (currentPokemon > 1) {
      setCurrentPokemon(currentPokemon - 1)
    }
  }

  const nextPok = () => {
    setCurrentPokemon(currentPokemon + 1)
  }
  return (
    <>

      {pokemon && (
        <>
          <Link to={`/Monster/${currentPokemon}`}><img src={pokemon.sprites.front_default} /></Link>
          <div>
          <p>{pokemon.name}</p>
          </div>

        </>
      )}

      <div>
        <button onClick={previousPok} > ← </button>
        <button onClick={nextPok} > → </button>
      </div>


      <div>

        <Link to="/Home">Ir para Home</Link>
      </div>
    </>


  )
}

export default App
