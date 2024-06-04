import { useEffect, useState } from "react";



function useAdminGetUser() {

    const [users, setUsers] = useState([])
    const [user, setUser] = useState({ email: null })
    const [pending, setPending] = useState(true)

    const VITE_API_USER = import.meta.env.VITE_API_USER

    function getAllUsers() {
        if(!pending){setPending(true)}
        fetch(VITE_API_USER)
            .then(response => response.json())
            .then(response => setUsers(response.data))
            .finally(()=> setPending(false))
    }


    function deleteUser() {

    }

    async function findUser(email) {
        const response = await fetch(`${VITE_API_USER}email?email=${email}`)
        const parseResponse = await response.json()
        setUser(parseResponse.data)
    }

    async function editUser(email) {

    }

    function resetUsers() {
        fetch(VITE_API_USER)
            .then(response => response.json())
            .then(response => setUsers(response.data))
    }

    async function getUserDetail(email) { //retorna una promise
        const response = await fetch(`${VITE_API_USER}email?email=${email}`)
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