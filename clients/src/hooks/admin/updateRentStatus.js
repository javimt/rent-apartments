import { useState } from "react";
import useAdminTransaction from "./adminTransacion";

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

  function deleteTransaction(id){
    fetch(`https://api-rent-appartament.up.railway.app/rent/${id}`,{
        method:'DELETE'
    })
    .then(response => {response.status < 300 ? alert('deleted Rent') : alert('cant delete the rent')})
    .catch(error => console.error(error))
    
}
  

  return { 
    updateRentStatus, 
    loading,
    error,
    deleteTransaction 
  };
};

export default useUpdateRentStatus;
