
import { Routes, Route, } from "react-router-dom";
import Home from './pages/HomePage';
import Indice from "./pages/Indice";
import NotFound from './pages/NotFoundPage';
import PokeApi from './pages/PokeApi';

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/indice' element={<Indice />} />
            <Route path='/pokeapi' element={<PokeApi />} />
            <Route path='*' element={<NotFound />} />
        </Routes>

    </div>
  );
}

export default App;