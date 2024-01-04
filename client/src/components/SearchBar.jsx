import styles from "./../styles/SearchBar.module.css";
import { useState } from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {
    // Lógica para realizar la búsqueda por ciudades
    handleSearchClick(searchTerm);
  };

  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search by city..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button className={styles.button} onClick={handleSearchClick}>Search</button>
    </div>
  );
};

export default SearchBar;
