import { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom"
import './App.css'

function Monster() {

  const [pokemon, setPokemon] = useState();
  let {id} = useParams();

  useEffect(() => {

    const fetchData = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();

      setPokemon(data);
      console.log(data);

    }


    fetchData()

  }, [])


  return (
    <>

      {pokemon && (
        <>
          <img src={pokemon.sprites.front_default} />
          <div className='pokeInfos'>
          <p>Nome: {pokemon.name.toUpperCase()}</p>
          <p>Peso: {pokemon.weight} lb</p>
          <p>Altura: {pokemon.height} inches</p>
          <p>Base Experience: {pokemon.base_experience}</p>
          </div>
        </>
      )}

      <div>
        <Link to="/Pokemon">Voltar</Link>
      </div>
    </>


  )
}

export default Monster