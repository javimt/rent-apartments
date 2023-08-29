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
  const [isSuperAdmin, setIsSuperAdmin] = useState(false);
  const [users, setUsers] = useState([]);
  const {user, isAuthenticated} = useAuth0();

  useEffect(() => {
    if (isAuthenticated && users) {
      const userId = user.email;
      const checkAdminStatus = async () => {
        try {
          const response = await axios.get(`http://localhost:3001/user/${userId}`);
      //console.log(response.data)
          if (response.data.isSuperAdmin) {
            setIsSuperAdmin(true);
          } else if (response.data.isAdmin) {
            setIsAdmin(true); 
          } else {
            console.error("Acceso denegado: Solo los administradores pueden acceder a esta página");
          }
        } catch (error) {
          console.error('Error getting user role:', error);
        }
      };

      checkAdminStatus();
    }
  }, [user, isAuthenticated]);

  useEffect(() => {
    axios.get('http://localhost:3001/user') 
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error getting user list:', error);
      });
  }, []);

  const handleRoleChange = (userId, role) => {
console.log(isSuperAdmin)
  console.log(isAdmin)
    if (isSuperAdmin) {
      axios.put(`http://localhost:3001/user/${userId}/admin`, {role} )
        .then(() => {
          axios.get('http://localhost:3001/user')
            .then((response) => {
              setUsers(response.data); 
            })
            .catch((error) => {
              console.error('Error getting user list:', error);
            });
        })
        .catch((error) => {
          console.error(`Error changing user role ${userId}:`, error);
        });
    } else {
      console.error('Access denied: Only superAdmins can change user roles.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
        ...prevData,
      [name]: value,
    }));
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

  if (!isAdmin && !isSuperAdmin) {
    return <div>Acces denied: Only adminstrator can acces this page.</div>;
  }

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
          <input type="text" name="description" value={formData.description} onChange={handleChange} />
        </div>
        <div>
          <label>Bedrooms:</label>
          <input type="text" name="bedrooms" value={formData.bedrooms} onChange={handleChange} />
        </div>
        <div>
          <label>Bathrooms:</label>
          <input type="text" name="bathrooms" value={formData.bathrooms} onChange={handleChange} />
        </div>
        <div>
          <label>Number:</label>
          <input type="text" name="apartmentNumber" value={formData.apartmentNumber} onChange={handleChange} />
        </div>
        <button type="submit">Create Apartment</button>
      </form>
      <div>
        <h2>Users list</h2>
        {users.map((user) => (
          <div key={user.email} className={styles.userCard}>
            <p>Email: {user.email}</p>
            <p>Nombre: {user.name}</p>
            <p>Apellido: {user.lastName}</p>
            <p>Rol: {user.role}</p>
            <br />
            {isSuperAdmin && (
              <>
                <button onClick={() => handleRoleChange(user.email, 'user')} disabled={user.role === 'superAdmin'}>User</button>
                <button onClick={() => handleRoleChange(user.email, 'admin')} /* disabled={user.role === 'superAdmin'} */>Admin</button>
                <button onClick={() => handleRoleChange(user.email, 'superAdmin')} disabled={user.role === 'superAdmin'}>SuperAdmin</button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
