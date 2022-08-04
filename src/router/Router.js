import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PokemonDetails from '../components/details/PokemonDetails';
import Layout from '../layouts/Layout';
import Abilities from '../pages/Abilities';
import Main from '../pages/Main';
import Pokemons from '../pages/Pokemons';
import AbilityDetails from '../components/details/AbilityDetails';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Layout/> }>
          <Route index element={ <Main/> }/>
          <Route path="pokemons" >
            <Route index element={ <Pokemons/> }/>
            <Route path=':pokeCode' element={<PokemonDetails/>}/>
          </Route>
          <Route path="abilities" >
            <Route index element={ <Abilities/> }/>
            <Route path=':abilityCode' element={<AbilityDetails/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;