import React, { useState } from 'react';
import styles from "./../styles/FilterPrice.module.css";

const FilterPrice = ({ apartments, updateFilteredApartments }) => {
  const [priceRange, setPriceRange] = useState([600, 10000]);

  const handleFilter = (e) => {
    const maxPrice = parseInt(e.target.value);
    setPriceRange([600, maxPrice]);
    const filtered = apartments.filter(
      (apartment) => apartment.price <= maxPrice
    );
    updateFilteredApartments(filtered);
  };

  return (
    <div className={styles.filter}>
      <h3 style={{fontSize: 17, color: "#333"}}>Filter by price</h3>
      <input
        type="range"
        min="600"
        max="10000"
        step="50"
        value={priceRange[1]}
        onChange={handleFilter}
      />
      <p className={styles.range}>{`$600 - $${priceRange[1]}`}</p>
    </div>
  );
};
export default FilterPrice;
