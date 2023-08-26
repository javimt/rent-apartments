import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from "../styles/AdminDashboard.module.css";
import { useAuth0 } from '@auth0/auth0-react';

const AdminDashboard = () => {
  const [formData, setFormData] = useState({
    image: '',
    ubication: '',
    price: "",
    description: '',
    availability: true,
  });
  const [isAdmin, setIsAdmin] = useState(false);
  const {user, isAuthenticated} = useAuth0();

  useEffect(() => {
    if (isAuthenticated && user) {
      const userId = user.email;
      const checkAdminStatus = async () => {
        try {
      console.log(userId)
          const response = await axios.get(`http://localhost:3001/user/${userId}`);
  console.log(response.data)
          if (response.data.isAdmin) {
            setIsAdmin(true);
          } else {
            console.error("Acceso denegado: Solo los administradores pueden acceder a esta página");
          }
        } catch (error) {
          console.error('Error al obtener el rol del usuario:', error);
        }
      };

      checkAdminStatus();
    }
  }, [user]);

  if (!isAdmin) {
    return <div>Acceso denegado: Solo los administradores pueden acceder a esta página.</div>;
  }

  const handleAssignAdmin = async (userId) => {
    try {
      await axios.put(`http://localhost:3001/user/${userId}/admin`);
  console.log('User assigned as admin');
    } catch (error) {
      console.error('Error assigning admin role:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/apartment', formData);
  console.log('Apartment created:', response.data);
      setFormData({
        image: '',
        ubication: '',
        price: "",
        description: '',
        availability: true,
      });
    } catch (error) {
      console.error('Error creating apartment:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className={styles.container}>
      <h1>Admin Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Image URL:</label>
          <input type="text" name="image" value={formData.image} onChange={handleChange} />
        </div>
        <div>
          <label>Ubication:</label>
          <input type="text" name="ubication" value={formData.ubication} onChange={handleChange} />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" name="price" value={formData.price} onChange={handleChange} />
        </div>
        <div>
          <label>Description:</label>
          <textarea name="description" value={formData.description} onChange={handleChange} />
        </div>
        <button type="submit">Create Apartment</button>
      </form>
      <button onClick={() => handleAssignAdmin()}>
        Assign Admin Role
      </button>
    </div>
  );
};

export default AdminDashboard;
