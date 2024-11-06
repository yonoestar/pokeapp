const initialState = {
    pokemons:[],
    combatList:[]
};

const pokemonReducer = (state = initialState, action: any) => {
    switch(action.type){
        case 'SET_POKEMONS':
            return { ...state, pokemons:action.playload};
        case 'ADD_TO_COMBAT_LIST':
            return { ...state, combatList: action.playload};
        case 'REMOVE_FROM_COMBAT_LIST':
            return {
                ...state,
                combatList: state.combatList.filter((pokemon) => pokemon !== action.playload),
            
            };
        default:
            return state;
    
    }
};

export default pokemonReducer;