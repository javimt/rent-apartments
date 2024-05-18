import { useEffect, useState } from "react";



function useAdminGetUser() {

    const [users, setUsers] = useState([])
    const [user, setUser] = useState({ email: null })
    const [pending, setPending] = useState(true)



    function getAllUsers() {
        if(!pending){setPending(true)}
        fetch('https://api-rent-appartament.up.railway.app/user')
            .then(response => response.json())
            .then(response => setUsers(response.data))
            .finally(()=> setPending(false))
    }


    function deleteUser() {

    }

    async function findUser(email) {
        const response = await fetch(`https://api-rent-appartament.up.railway.app/user/email?email=${email}`)
        const parseResponse = await response.json()
        setUser(parseResponse.data)
    }

    async function editUser(email) {

    }

    function resetUsers() {
        fetch('https://api-rent-appartament.up.railway.app/user')
            .then(response => response.json())
            .then(response => setUsers(response.data))
    }

    async function getUserDetail(email) { //retorna una promise
        const response = await fetch(`http://localhost:3001/user/email?email=${email}`)
        const responseJSON = await response.json()
        const responseData = responseJSON.data
        return responseData
    }


    return {
        users,
        user,
        resetUsers,
        getUserDetail,
        deleteUser,
        editUser,
        findUser,
        getAllUsers,
        pending
    }
};

export default useAdminGetUser;