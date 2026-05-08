import React, { useState, useTransition, useMemo } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const generateItems = (count) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    name: `Item ${i + 1}`,
    description: `Description de l'item ${i + 1} avec des détails supplémentaires pour la recherche.`,
  }));
};

function SearchWithTransition() {
  const [query, setQuery] = useState('');
  const [isPending, startTransition] = useTransition();
  const { theme } = useTheme();

  const allItems = useMemo(() => generateItems(10000), []);

  const filteredItems = useMemo(() => {
    if (!query) return [];

    return allItems.filter(
      (item) =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
    );
  }, [allItems, query]);

  const handleChange = (e) => {
    const value = e.target.value;

    startTransition(() => {
      setQuery(value);
    });
  };

  return (
    <div className="search-transition" style={{ margin: '20px 0' }}>
      <h3>Recherche avec useTransition</h3>

      <div style={{ margin: '10px 0' }}>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Rechercher parmi 10 000 éléments..."
          style={{ width: '100%', maxWidth: '300px' }}
        />
      </div>

      {isPending ? (
        <p>Chargement des résultats...</p>
      ) : (
        <>
          <p>Résultats: {filteredItems.length}</p>

          <ul
            style={{
              maxHeight: '200px',
              overflowY: 'auto',
              padding: '0',
              margin: '10px 0',
              listStyle: 'none',
              textAlign: 'left',
            }}
          >
            {filteredItems.slice(0, 100).map((item) => (
              <li
                key={item.id}
                style={{
                  padding: '8px',
                  margin: '4px 0',
                  backgroundColor: theme === 'dark' ? '#444' : '#f5f5f5',
                  borderRadius: '4px',
                }}
              >
                <strong>{item.name}</strong>

                <p style={{ margin: '4px 0 0', fontSize: '0.9em' }}>
                  {item.description}
                </p>
              </li>
            ))}

            {filteredItems.length > 100 && (
              <li style={{ padding: '8px', fontStyle: 'italic' }}>
                ... et {filteredItems.length - 100} autres résultats
              </li>
            )}
          </ul>
        </>
      )}
    </div>
  );
}

export default SearchWithTransition;