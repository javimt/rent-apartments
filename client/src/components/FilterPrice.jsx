import React, { useState } from 'react';
import styles from "./../styles/FilterPrice.module.css";

const FilterPrice = ({ filterByPrice }) => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleFilter = () => {
    filterByPrice(minPrice, maxPrice);
  };

  return (
    <div className={styles.search}>
      <input
        type="range"
        placeholder="Min Price"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
      />
      {/* <input
        type="range"
        placeholder="Max Price"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      /> 
      <button onClick={handleFilter}>Apply</button>*/}
    </div>
  );
};

export default FilterPrice;