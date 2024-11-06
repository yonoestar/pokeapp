// src/services/pokemonService.ts
import axios from 'axios';

const API_URL = 'https://pokeapi.co/api/v2/pokemon/';

export const fetchPokemons = async () => {
    try {
    const response = await axios.get(`${API_URL}?limit=151`);
    return response.data.results; // Devuelve los Pokémon con nombre y URL
    } catch (error) {
    console.error('Error al obtener los Pokémon', error);
    throw error;
}
};

export const fetchPokemonDetails = async (id: number) => {
    try {
    const response = await axios.get(`${API_URL}${id}`);
    return response.data; // Detalles completos del Pokémon
    } catch (error) {
    console.error('Error al obtener el detalle del Pokémon', error);
    throw error;
}
};
