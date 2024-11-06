// src/types/pokemonTypes.ts

// Define los atributos del Pokémon, basados en la respuesta de la PokeAPI
export interface Pokemon {
    id: number;                 // ID del Pokémon
    name: string;               // Nombre del Pokémon
    sprites: {
      front_default: string;    // URL de la imagen del Pokémon (frontal)
    };
    height: number;             // Altura del Pokémon
    weight: number;             // Peso del Pokémon
    types: Array<{             // Tipos del Pokémon (pueden ser más de uno)
        type: {
        name: string;
    };
    }>;
    stats: Array<{
        base_stat: number;    // Estadística base (ejemplo: ataque, defensa)    
        stat: {
        name: string;
    };
    }>;
}

  // Define el tipo para los elementos en la lista de combate
export interface CombatListItem {
    id: number;
    name: string;
    image: string;
}

  // Define la estructura del estado general de la aplicación en Redux
export interface PokemonState {
    pokemons: Pokemon[];            // Lista completa de Pokémon
    combatList: CombatListItem[];    // Lista de Pokémon "Listo para el combate"
    searchQuery: string;             // Consulta de búsqueda
    }
