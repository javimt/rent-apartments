import React, { useState } from 'react';

const FilterPrice = ({ filterByPrice }) => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleFilter = () => {
    filterByPrice(minPrice, maxPrice);
  };

  return (
    <div className={styles.search}>
      <h2>Price Range</h2>
      <input
        type="number"
        placeholder="Min Price"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
      />
      <input
        type="number"
        placeholder="Max Price"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />
      <button onClick={handleFilter}>Apply</button>
    </div>
  );
};

export default FilterPrice;