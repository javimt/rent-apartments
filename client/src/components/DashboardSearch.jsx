import { useState } from "react";
import { useApartments } from "../ApartmenContext";
import styles from "../styles/DashboardSearch.module.css";

const DashboardSearch = () => {
  const [search, setSearch] = useState();
  const {filterApartmentsByLocation} = useApartments();

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchClick = () => {
    filterApartmentsByLocation(search);
    setSearch("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by apartment..."
        value={search}
        onChange={handleInputChange}
        className={styles.input}
      />
      <button className={styles.button} onClick={handleSearchClick}>Search</button>
    </div>
  )
}

export default DashboardSearch;
