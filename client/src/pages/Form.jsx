import { useState } from "react";
import styles from "../styles/Form.module.css";

const Form = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    loginError: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      loginError: "", // Clear login error when input changes
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      if (response.ok) {
        // Autenticación exitosa, redirecciona o maneja el token
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
    <div>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Password"
        />
        <button type="submit">
          Login 
        </button>
      </form>
      {formData.loginError && (
        <p className={styles.errorMsg}>{formData.loginError}</p>
      )}
    </div>
  );
};

export default Form;
