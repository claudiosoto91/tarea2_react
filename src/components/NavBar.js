import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark p-3 fs-3">
        <div className="container-fluid d-flex justify-content-center ">
            <div className="ms-5 ">
                <NavLink 
                    className="text-decoration-none"
                    to='/'>Home
                </NavLink>
            </div>
            <div className="ms-5">
                <NavLink
                className="text-decoration-none"
                to='/indice'>Indice
                </NavLink>
            </div>
            <div className="ms-5">
                <NavLink
                className="text-decoration-none"
                to='/pokeapi'>PokeAPI
                </NavLink>
            </div>
        </div>
    </nav>
  )
}

export default NavBar