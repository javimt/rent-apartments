import { useState } from "react";



function useAdminTransaction() {
    const [transactions, setTransactions] = useState({
        pending: [],
        active: []
    })
    const [loading, setLoading] = useState(false)


    function getTransactions() {
        setLoading(true)
        fetch('https://api-rent-appartament.up.railway.app/rent', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },

        })
            .then(response => response.json())
            .then(response => setTransactions(
                {
                    pending: response.data.filter(tr => tr.status.includes('pending')),
                    active: response.data.filter(tr => tr.status.includes('active'))
                }))
            
            .finally(() => setLoading(false))
            .catch(error => console.error(error))
    }

    function deleteTransaction(id){
        fetch(`https://api-rent-appartament.up.railway.app/rent/${id}`,{
            method:'DELETE'
        })
        .then(response => {response.status < 300 ? alert('deleted Rent') : alert('cant delete the rent')})
        .catch(error => console.error(error))
        .finally(getTransactions())
        
    }
    return {
        getTransactions,
        transactions,
        deleteTransaction,
        loading
    }
}

export default useAdminTransaction;