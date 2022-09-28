import { Link } from "react-router-dom";

const Indice = () => {
  return (
    <>
      <div>
        <Link to="/" >Home</Link>   
        <Link to="/pokeapi" >PokeAPI</Link> 
      </div>

      <h1>Indice</h1>
    </>
  )
}

export default Indice;