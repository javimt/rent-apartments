import { useState } from "react";
import styles from "../styles/Form.module.css";
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import image from "../assets/logo rent.png";

const Form = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    full_name: "",
    addres: "",
    image: "",
    city: "",
    country: "",
    phone: "",
    loginError: "",
    isAdmin: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    //const inputValue = type === 'checkbox' ? checked : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      loginError: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response;
      if (formData.isRegisterMode) {
        response = await fetch("http://localhost:3001/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
            full_name: formData.full_name,
            addres: formData.addres,
            image: formData.image,
            city: formData.city,
            country: formData.country,
            phone: formData.phone,
            isAdmin: formData.isAdmin,
          }),
        });
      } else {
        response = await fetch("http://localhost:3001/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        });
      }

      if (response.ok) {
        const responseData = await response.json();
        if (formData.isRegisterMode) {
          navigate("/apartments");
        } else {
          localStorage.setItem("token", responseData.token);
          navigate("/apartments");
        }
      } else {
        const errorData = await response.json();
        setFormData((prevData) => ({
          ...prevData,
          loginError: errorData.error,
        }));
      }
    } catch (error) {
      console.error("Error de conexión:", error);
    }
  };

  return (
    <section className={styles.form}>
      <div className={styles.formContainer}>
        <h2>{formData.isRegisterMode ? "Register" : "Login"}</h2>
        <img src={image} alt="" style={{ width: "30%", borderRadius: "50%" }} />
        <form onSubmit={handleSubmit} className={styles.loginForm}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              required
            />
          </div>
          {formData.isRegisterMode && (
            <div className={styles.formGroup}>
              <label htmlFor="full_name">Full Name</label>
              <input
                type="text"
                id="full_name"
                name="full_name"
                value={formData.full_name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                required
              />
              <div className={styles.formGroup}>
                <label htmlFor="addres">Address</label>
                <input
                  type="text"
                  id="addres"
                  name="addres"
                  value={formData.addres}
                  onChange={handleInputChange}
                  placeholder="Enter your address"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="country">Country</label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  placeholder="Enter your country"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="Enter your city"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="image">Image</label>
                <input
                  type="text"
                  id="image"
                  name="image"
                  value={formData.image}
                  onChange={handleInputChange}
                  placeholder="Enter your photo"
                  required
                />
              </div>
            </div>
          )}
          <button type="submit">
            {formData.isRegisterMode ? "Register" : "Login"}
          </button>
        </form>
        {formData.loginError && (
          <p className={styles.errorMsg}>{formData.loginError}</p>
        )}
        <button
          className={styles.toggleButton}
          onClick={() =>
            setFormData((prevData) => ({
              ...prevData,
              isRegisterMode: !prevData.isRegisterMode,
            }))
          }
        >
          {formData.isRegisterMode
            ? "Already have an account? Login now!"
            : "New here? Register now!"}
        </button>
      </div>
    </section>
  );
};

export default Form;
