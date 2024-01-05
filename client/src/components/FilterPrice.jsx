import React, { useState } from 'react';
import styles from "./../styles/FilterPrice.module.css";

const FilterPrice = ({ apartments, updateFilteredApartments }) => {
  const [priceRange, setPriceRange] = useState([0, 10000]); // Establece un rango predeterminado

  const handleFilter = (e) => {
    const maxPrice = parseInt(e.target.value);
    setPriceRange([0, maxPrice]);
    const filtered = apartments.filter(
      (apartment) => apartment.price <= maxPrice
    );
    updateFilteredApartments(filtered);
  };

  return (
    <div className={styles.filter}>
      <input
        type="range"
        min="0"
        max="10000"
        step="50"
        value={priceRange[1]}
        onChange={handleFilter}
      />
      <p className={styles.range}>{`Filter by Price: $0 - $${priceRange[1]}`}</p>
    </div>
  );
};
export default FilterPrice;
