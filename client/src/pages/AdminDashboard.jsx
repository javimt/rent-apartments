import { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = ({ isAuthenticated }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [formData, setFormData] = useState({
    image: '',
    ubication: '',
    price: "",
    description: '',
    availability: true
  });

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
        availability: true
      });
    } catch (error) {
      console.error('Error creating apartment:', error);
    }
  };

  useEffect(() => {
    const checkAdminStatus = async () => {
      if (isAuthenticated) {
        try {
          const response = await axios.get(`http://localhost:3001/user/admin`);
          setIsAdmin(response.data.isAdmin);
        } catch (error) {
          console.error('Error checking admin status:', error);
        }
      }
    };

    checkAdminStatus();
  }, [isAuthenticated]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  if (!isAdmin) {
    return <div>Acceso denegado: Solo los administradores pueden acceder a esta página.</div>;
  }

  return (
    <div>
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
      <button onClick={() => handleAssignAdmin(userIdToAssign)}>
        Assign Admin Role
      </button>
    </div>
  );
};

export default AdminDashboard;
