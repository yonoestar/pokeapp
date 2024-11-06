// src/pages/PokemonDetail.tsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemonDetails } from '../services/pokemonService';
import { addToCombatList, removeFromCombatList } from '../redux/actions/PokemonActions';

const PokemonDetail: React.FC<{ id: number }> = ({ id }) => {
    const dispatch = useDispatch();
    const [pokemonDetails, setPokemonDetails] = useState<any>(null);
    const combatList = useSelector((state: any) => state.combatList);

useEffect(() => {
    const getPokemonDetails = async () => {
        const details = await fetchPokemonDetails(id);
        setPokemonDetails(details);
    };
    getPokemonDetails();
}, [id]);

const handleAddToCombat = () => {
    dispatch(addToCombatList(pokemonDetails));
};

const handleRemoveFromCombat = () => {
    dispatch(removeFromCombatList(pokemonDetails.id));
};

return (
    <div>
        {pokemonDetails && (
        <div>
            <img src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name} />
            <h2>{pokemonDetails.name}</h2>
          {/* Mostrar más detalles del Pokémon */}
            <button onClick={combatList.some((pokemon: any) => pokemon.id === pokemonDetails.id) ? handleRemoveFromCombat : handleAddToCombat}>
            {combatList.some((pokemon: any) => pokemon.id === pokemonDetails.id) ? 'Eliminar' : 'Agregar al combate'}
            </button>
        </div>
    )}
    </div>
    );
};

export default PokemonDetail;
