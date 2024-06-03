import { useState } from "react";

function useAdminTransaction() {
  const [transactions, setTransactions] = useState({
    pending: [],
    active: [],
  });
  const [loading, setLoading] = useState(false);
  const VITE_API_RENT = import.meta.env.VITE_API_RENT_GENERATE
  function getTransactions() {
    setLoading(true);
    fetch(VITE_API_RENT, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) =>
        setTransactions({
          pending: response.data.filter((tr) => tr.status.includes("pending")),
          active: response.data.filter((tr) => tr.status.includes("active")),
        })
      )

      .finally(() => setLoading(false))
      .catch((error) => console.error(error));
  }

  function okStatus() {
    getTransactions();
    alert("deleted rent");
  }

  function deleteTransaction(id) {
    fetch(`${VITE_API_RENT}${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        response.status < 300 ? okStatus() : alert("cant delete the rent");
      })
      .catch((error) => console.error(error));
  }
  
  return {
    getTransactions,
    transactions,
    deleteTransaction,
    loading,
  };
}

export default useAdminTransaction;
