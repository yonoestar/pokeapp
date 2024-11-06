// src/redux/store.ts
import { createStore } from 'redux';
import pokemonReducer from './reducers/pokemonReducer';

// Crea el store con el reducer de Pokémon
const store = createStore(pokemonReducer);

export default store;
