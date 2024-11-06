// src/components/SearchBar.tsx
import React, { useState } from 'react';

const SearchBar: React.FC<{ onSearch: (query: string) => void }> = ({ onSearch }) => {
    const [query, setQuery] = useState('');

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
};

return <input type="text" value={query} onChange={handleChange} placeholder="Buscar Pokémon" />;
};

export default SearchBar;
