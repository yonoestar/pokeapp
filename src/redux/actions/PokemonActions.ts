// src/redux/actions/pokemonActions.ts
import { Pokemon } from '..//../types/pokemonTypes';  // Define el tipo de Pokémon (opcional, pero ayuda a tener tipado)

// Definimos los tipos de acciones para usar en los reducers
export const SET_POKEMONS = 'SET_POKEMONS';
export const ADD_TO_COMBAT_LIST = 'ADD_TO_COMBAT_LIST';
export const REMOVE_FROM_COMBAT_LIST = 'REMOVE_FROM_COMBAT_LIST';
export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';

// Acción para establecer la lista de Pokémon obtenida desde la API
export const setPokemons = (pokemons: Pokemon[]) => ({
    type: SET_POKEMONS,
    payload: pokemons,
});

// Acción para agregar un Pokémon a la lista de combate
export const addToCombatList = (pokemon: Pokemon) => ({
    type: ADD_TO_COMBAT_LIST,
    payload: pokemon,
});

// Acción para eliminar un Pokémon de la lista de combate
export const removeFromCombatList = (pokemonId: number) => ({
    type: REMOVE_FROM_COMBAT_LIST,
    payload: pokemonId,
});

// Acción para actualizar la búsqueda
export const setSearchQuery = (query: string) => ({
    type: SET_SEARCH_QUERY,
    payload: query,
});
