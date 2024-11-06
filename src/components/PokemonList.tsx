// src/components/PokemonList.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemons } from '../services/pokemonService';
import { setPokemons, addToCombatList } from '../redux/actions/PokemonActions';

const PokemonList: React.FC = () => {
    const dispatch = useDispatch();
    const pokemons = useSelector((state: any) => state.pokemons);

useEffect(() => {
    const getPokemons = async () => {
        const pokemonData = await fetchPokemons();
        dispatch(setPokemons(pokemonData));
    };
    getPokemons();
}, [dispatch]);

const handleAddToCombat = (pokemon: any) => {
    dispatch(addToCombatList(pokemon));
};

return (
    <div>
        <ul>
        {pokemons.map((pokemon: any) => (
            <li key={pokemon.name}>
            <img src={pokemon.image} alt={pokemon.name} />
            {pokemon.name}
            <button onClick={() => handleAddToCombat(pokemon)}>+</button>
            </li>
        ))}
        </ul>
    </div>
    );
};

export default PokemonList;
