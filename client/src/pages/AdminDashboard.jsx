import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from "../styles/AdminDashboard.module.css";
import { useAuth0 } from '@auth0/auth0-react';
import { useApartments } from '../ApartmenContext';
import { useTheme } from "../components/ThemeProvider";

const AdminDashboard = () => {
  const [formData, setFormData] = useState({
    images: [],
    ubication: '',
    price: "",
    description: '',
    bedrooms: "",
    bathrooms: "",
    apartmentNumber: "",
    lat: "",
    lon: "",
    availability: true,
    status: ""
  });
  const [isAdmin, setIsAdmin] = useState(false);
  const [isSuperAdmin, setIsSuperAdmin] = useState(false);
  const [users, setUsers] = useState([]);
  const {user, isAuthenticated} = useAuth0();
  const { addApartment } = useApartments();
  const { theme } = useTheme();

  useEffect(() => {
    if (isAuthenticated && users) {
      const userId = user.email;
      const checkAdminStatus = async () => {
        try {
          const response = await axios.get(`https://deploy-ik5w.onrender.com/user/${userId}`);
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
    axios.get('https://deploy-ik5w.onrender.com/user') 
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error getting user list:', error);
      });
  }, []);

  const handleRoleChange = async (userId, role) => {
    if (isSuperAdmin) {
      await axios.put(`https://deploy-ik5w.onrender.com/user/${userId}/admin`, {role} )
        .then(() => {
          axios.get('https://deploy-ik5w.onrender.com/user')
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
      const response = await axios.post('https://deploy-ik5w.onrender.com/apartment', formData);
      const newApartment = response.data;
      setFormData({
        images: [],
        ubication: '',
        status: '',
        price: "",
        description: '',
        bedrooms: "",
        bathrooms: "",
        apartmentNumber: "",
        lat: "",
        lon: "",
        availability: true,
      }); 
      addApartment(newApartment);
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

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const images = files.map((file) => URL.createObjectURL(file));
    setFormData((prevData) => ({
      ...prevData,
      images: prevData.images.concat(images),
    }));
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
    <div className={`app ${theme === "dark" ? "dark" : "light"} ${styles.container}`}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.images}>
          <div style={{display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>
            <label>Images:</label>
          </div>
          {formData.images.map((imageUrl, index) => (
            <div key={index}>
              <img src={imageUrl} alt={`image-${index}`} style={{textAlign:"center", alignItems:"center", display:"flex", justifyContent:"center", width:"50px"}}/>
              <input type="text" value={imageUrl} onChange={(e) => handleImageUrlChange(e, index)} />
              <button type="button" onClick={() => handleRemoveImageField(index)} style={{marginBottom:"10px"}}>Remove</button>
            </div>
          ))}
          <input type="file" onChange={handleImageUpload} accept="image/*" multiple style={{textAlign:"center", alignItems:"center", display:"flex", justifyContent:"center", flexDirection:"colum"}}/>
          <div>
            <button type="button" onClick={handleAddImageField}>Add Image</button>
          </div>
        </div>
        <div>
          <label>Status:</label>
          <input type="text" name="status" value={formData.status} onChange={handleChange} />
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
          <label>Name:</label>
          <input type="text" name="apartmentNumber" value={formData.apartmentNumber} onChange={handleChange} />
        </div>
        <div>
          <label>Latitud:</label>
          <input type="number" name="lat" value={formData.lat} onChange={handleChange} />
        </div>
        <div>
          <label>Longitud:</label>
          <input type="number" name="lon" value={formData.lon} onChange={handleChange} />
        </div>
        <div>
          <button type="submit">Create Apartment</button>
        </div>
      </form>
      <br />
      <h2>Users list</h2>
      <div className={styles.userCont}>
        {users.map((user) => (
          <div key={user.email} className={styles.userCard}>
            <p>Email: {user.email}</p>
            <p>Nombre: {user.name}</p>
            <p>Apellido: {user.lastName}</p>
            <p>Rol: {user.role}</p>
            <br />
            {isSuperAdmin && (
              <>
                <button className={styles.butdashboard} onClick={() => handleRoleChange(user.email, 'user')} disabled={user.role === 'superAdmin'}>User</button>
                <button className={styles.butdashboard} onClick={() => handleRoleChange(user.email, 'admin')} /* disabled={user.role === 'superAdmin'} */>Admin</button>
                <button className={styles.butdashboard} onClick={() => handleRoleChange(user.email, 'superAdmin')} disabled={user.role === 'superAdmin'}>SuperAdmin</button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
