import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from "../styles/AdminDashboard.module.css";
import { useAuth0 } from '@auth0/auth0-react';

const AdminDashboard = () => {
  const [formData, setFormData] = useState({
    images: [],
    ubication: '',
    price: "",
    description: '',
    bedrooms: "",
    bathrooms: "",
    apartmentNumber: "",
    availability: true,
  });
  const [isAdmin, setIsAdmin] = useState(false);
  const {user, isAuthenticated} = useAuth0();

  useEffect(() => {
    if (isAuthenticated && user) {
      const userId = user.email;
      const checkAdminStatus = async () => {
        try {
          const response = await axios.get(`http://localhost:3001/user/${userId}`);
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
  console.log(response.data)
      setFormData({
        images: [],
        ubication: '',
        price: "",
        description: '',
        bedrooms: "",
        bathrooms: "",
        apartmentNumber: "",
        availability: true,
      });
  console.log(setFormData)
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

  const handleImageUrlChange = (e, index) => {
    const { value } = e.target;
    setFormData((prevData) => {
      const newImageUrls = [...prevData.images];
      newImageUrls[index] = value;
      return {
        ...prevData,
        images: newImageUrls,
      };
    });
  };

  const handleAddImageField = () => {
    setFormData((prevData) => ({
      ...prevData,
      images: [...prevData.images, ""],
    }));
  };

  const handleRemoveImageField = (index) => {
    setFormData((prevData) => {
      const newImageUrls = [...prevData.images];
      newImageUrls.splice(index, 1);
      return {
        ...prevData,
        images: newImageUrls,
      };
    });
  };

  return (
    <div className={styles.container}>
      <h1>Admin Dashboard</h1>
      <form onSubmit={handleSubmit}>
      <div>
          <label>Images:</label>
          {formData.images.map((imageUrl, index) => (
            <div key={index}>
              <input type="text" value={imageUrl} onChange={(e) => handleImageUrlChange(e, index)} />
              <button type="button" onClick={() => handleRemoveImageField(index)}>Remove</button>
            </div>
          ))}
          <button type="button" onClick={handleAddImageField}>Add Image</button>
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
          <textarea type="text" name="description" value={formData.description} onChange={handleChange} />
        </div>
        <div>
          <label>Bedrooms:</label>
          <textarea type="text" name="bedrooms" value={formData.bedrooms} onChange={handleChange} />
        </div>
        <div>
          <label>Bathrooms:</label>
          <textarea type="text" name="bathrooms" value={formData.bathrooms} onChange={handleChange} />
        </div>
        <div>
          <label>Number:</label>
          <textarea type="text" name="apartmentNumber" value={formData.apartmentNumber} onChange={handleChange} />
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
