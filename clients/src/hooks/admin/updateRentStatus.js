import { useState } from "react";

function useUpdateRentStatus(reloadTransactions) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateRentStatus = async (rentId, status) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`https://api-rent-appartament.up.railway.app/rent/${rentId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      });
      if (!response.ok) {
        throw new Error("Failed to update rent status");
      }
      const data = await response.json();
      setLoading(false);
      // Recargar transacciones después de actualizar el estado
      if (reloadTransactions) {
        reloadTransactions();
      }
      return data;
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return { 
    updateRentStatus, 
    loading,
    error 
  };
};

export default useUpdateRentStatus;
