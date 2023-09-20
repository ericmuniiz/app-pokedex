import { useEffect, useState } from 'react';
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
      if(currentPokemon > 1){
      setCurrentPokemon(currentPokemon - 1)
      }
    }

   const nextPok = () => {
      setCurrentPokemon(currentPokemon + 1)
    }
  return (
    <>
    
    <img src={pokemon.sprites.front_default}/> 
    <p>{pokemon.name}</p>
    
    <button onClick = {previousPok} > ← </button>
    <button onClick = {nextPok} > → </button>
    </>
    
    
  )
}

export default App
