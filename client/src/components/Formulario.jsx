import { useState } from "react";
import axios from "axios";
import styles from "../styles/Formulario.module.css";

const Formulario = () => {
  const [user, setUser] = useState({
    full_name: "",
    email: "",
    password: "",
    image: "",
    address: "",
    phone: "",
    city: "",
    country: "",
  });

  const [apartment, setApartment] = useState({
    userId: "",
    image: "",
    rent: false,
    ubication: "",
    availability: false,
    price: 0,
    description: "",
  });

  const [rent, setRent] = useState({
    apartmentId: "",
    startDate: "",
    endDate: "",
    totalPrice: "",
  });

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleUserSubmit = async (e) => {
    e.preventDefault();

    if (!user.full_name || !user.email || !user.password) {
      setError("Por favor, complete los campos obligatorios");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3001/user", {
        full_name: user.full_name,
        email: user.email,
        password: user.password,
        image: user.image,
        address: user.address,
        phone: user.phone,
        city: user.city,
        country: user.country,
      });
      setUser({
        full_name: "",
        email: "",
        password: "",
        image: "",
        address: "",
        phone: "",
        city: "",
        country: "",
      });

      setSuccessMessage("Usuario creado exitosamente");
      setError("");
    } catch (error) {
      setError("Error al crear el usuario");
      setSuccessMessage("");
    }
  };

  const handleApartmentSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const userResponse = await axios.get(`http://localhost:3001/user/${apartment.userId}`);
      const user = userResponse.data;
  
      if (!user) {
        setError("El usuario no existe");
        return;
      }
  
      const response = await axios.post(`http://localhost:3001/apartment`, {
        userId: apartment.userId,
        image: apartment.image,
        rent: apartment.rent,
        ubication: apartment.ubication,
        availability: apartment.availability,
        price: apartment.price,
        description: apartment.description,
      });
  
      setSuccessMessage("Apartamento creado exitosamente");
      setError("");
    } catch (error) {
      setError("Error al crear el apartamento");
      setSuccessMessage("");
    }
  };

  const handleRentSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const apartmentResponse = await axios.get(`http://localhost:3001/apartment/${rent.apartmentId}`);
      const apartment = apartmentResponse.data;
  
      if (!apartment) {
        setError("El apartamento no existe");
        return;
      }
  
      const response = await axios.post("http://localhost:3001/rent", {
        apartmentId: rent.apartmentId,
        startDate: rent.startDate,
        endDate: rent.endDate,
        totalPrice: rent.totalPrice,
      });
  
      setSuccessMessage("Renta creada exitosamente");
      setError("");
    } catch (error) {
      setError("Error al crear la renta");
      setSuccessMessage("");
    }
  };

  return (
    <div className={styles.container}>
      {error && <p className={styles.error}>{error}</p>}
      {successMessage && <p className={styles.success}>{successMessage}</p>}

      <h2>Create User</h2>
      <form className={styles.form} onSubmit={handleUserSubmit}>
        <label>
          Full_name:
          <input
            type="text"
            value={user.full_name}
            onChange={(e) => setUser({ ...user, full_name: e.target.value })}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </label>
        <label>
          Image:
          <input
            type="text"
            value={user.image}
            onChange={(e) => setUser({ ...user, image: e.target.value })}
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            value={user.address}
            onChange={(e) => setUser({ ...user, address: e.target.value })}
          />
        </label>
        <label>
          Phone:
          <input
            type="number"
            value={user.phone}
            onChange={(e) => setUser({ ...user, phone: e.target.value })}
          />
        </label>
        <label>
          Country:
          <input
            type="text"
            value={user.country}
            onChange={(e) => setUser({ ...user, country: e.target.value })}
          />
        </label>
        <label>
          City:
          <input
            type="text"
            value={user.city}
            onChange={(e) => setUser({ ...user, city: e.target.value })}
          />
        </label>
        <br />
        <button type="submit">Create User</button>
      </form>

      {error && <p className={styles.error}>{error}</p>}
      {successMessage && <p className={styles.success}>{successMessage}</p>}
      <h2>Create Apartment</h2>
      <form className={styles.form} onSubmit={handleApartmentSubmit}>
        <label>
          User Id:
          <input
            type="text"
            value={apartment.userId}
            onChange={(e) =>
              setApartment({ ...apartment, userId: e.target.value })
            }
          />
        </label>
        <label>
          Image:
          <input
            type="text"
            value={apartment.image}
            onChange={(e) =>
              setApartment({ ...apartment, image: e.target.value })
            }
          />
        </label>
        <label>
          Rent:
          <input
            type="checkbox"
            checked={apartment.rent}
            onChange={(e) =>
              setApartment({ ...apartment, rent: e.target.checked })
            }
          />
        </label>
        <label>
          Ubication:
          <input
            type="text"
            value={apartment.ubication}
            onChange={(e) =>
              setApartment({ ...apartment, ubication: e.target.value })
            }
          />
        </label>
        <label>
          Availability:
          <input
            type="checkbox"
            checked={apartment.availability}
            onChange={(e) =>
              setApartment({ ...apartment, availability: e.target.checked })
            }
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            value={apartment.price}
            onChange={(e) =>
              setApartment({ ...apartment, price: e.target.value })
            }
          />
        </label>
        <label>
          Descriptión:
          <textarea
            value={apartment.description}
            onChange={(e) =>
              setApartment({ ...apartment, description: e.target.value })
            }
          />
        </label>
        <br />
        <button type="submit">Create Apartment</button>
      </form>

      {error && <p className={styles.error}>{error}</p>}
      {successMessage && <p className={styles.success}>{successMessage}</p>}
      <h2>Create Rent</h2>
      <form className={styles.form} onSubmit={handleRentSubmit}>
        <label>
          ID Apartment:
          <input
            type="text"
            value={rent.apartmentId}
            onChange={(e) => setRent({ ...rent, apartmentId: e.target.value })}
          />
        </label>
        <br />
        <label>
          Start Date:
          <input
            type="date"
            value={rent.startDate}
            onChange={(e) => setRent({ ...rent, startDate: e.target.value })}
          />
        </label>
        <br />
        <label>
          End Date:
          <input
            type="date"
            value={rent.endDate}
            onChange={(e) => setRent({ ...rent, endDate: e.target.value })}
          />
        </label>
        <br />
        <label>
          Total Price:
          <input
            type="number"
            value={rent.totalPrice}
            onChange={(e) => setRent({ ...rent, totalPrice: e.target.value })}
          />
        </label>
        <br />
        <button type="submit">Create Rent</button>
      </form>
    </div>
  );
};

export default Formulario;
