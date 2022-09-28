import NavBar from "../components/NavBar";
import { useState } from "react";

const PokeApi = () => {
  const [pokemonId, setPokemonId] = useState('ditto');
  const baseURL = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
  fetch(baseURL)
  .then(response => response.json())
  .then(data => console.log(data));

  const handleClick = (e) => {
      e.preventDefault();
      console.log(e.target.value);
  }

  return (
    <>
      <NavBar />

      <form>
        <label>Ingresar un Pokemon: </label>
        <input
            type='text'
            placeholder="pikachu"
            
        />
        <input
            type='submit'
            onClick={handleClick}
            
            placeholder="pikachu"
        />
        

            
      </form>
      <h1>PokeAPI</h1>
    </>
  )
}

export default PokeApi;