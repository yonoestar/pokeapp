// src/redux/reducers/pokemonReducer.ts

import {
    SET_POKEMONS,
    ADD_TO_COMBAT_LIST,
    REMOVE_FROM_COMBAT_LIST,
    SET_SEARCH_QUERY,
} from '../actions/PokemonActions';
import { Pokemon } from '..//../types/pokemonTypes';

interface PokemonState {
    pokemons: Pokemon[];            // Lista completa de Pokémon
    combatList: Pokemon[];           // Lista de Pokémon listos para el combate (máx. 6)
    searchQuery: string;             // Consulta de búsqueda
    }
    
    const initialState: PokemonState = {
    pokemons: [],
    combatList: [],
    searchQuery: '',
};
const pokemonReducer = (state = initialState, action: any): PokemonState => {
    switch (action.type) {
        case SET_POKEMONS:
        return {
            ...state,
            pokemons: action.payload,
        };
        
        case ADD_TO_COMBAT_LIST:
        // Verifica que no se superen los 6 Pokémon en la lista de combate
        if (state.combatList.length >= 6) return state;
        return {
            ...state,
            combatList: [...state.combatList, action.payload],
        };
        
        case REMOVE_FROM_COMBAT_LIST:
        return {
            ...state,
            combatList: state.combatList.filter(
            (pokemon) => pokemon.id !== action.payload
        ),
        };
        
        case SET_SEARCH_QUERY:
        return {
            ...state,
            searchQuery: action.payload,
        };
        
        default:
        return state;
    }
};
export default pokemonReducer;
