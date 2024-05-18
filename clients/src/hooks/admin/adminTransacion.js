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


    return {
        getTransactions,
        transactions,
        loading
    }
}

export default useAdminTransaction;