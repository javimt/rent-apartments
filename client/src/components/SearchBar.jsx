import styles from "./../styles/SearchBar.module.css";
import { useState } from "react";
import { useApartments } from "../ApartmenContext";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const {filterApartmentsByLocation} = useApartments();

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchClick = () => {
    filterApartmentsByLocation(search);
    setSearch("");
  };

  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search by city..."
        value={search}
        onChange={handleInputChange}
      />
      <button className={styles.button} onClick={handleSearchClick}>Search</button>
    </div>
  );
};

export default SearchBar;
