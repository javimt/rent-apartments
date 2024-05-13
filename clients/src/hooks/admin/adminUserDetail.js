import { useEffect, useState } from "react";



function useAdminGetUser() {

    const [users, setUsers] = useState([])



    useEffect(() => {
        fetch('https://api-rent-appartament.up.railway.app/user')
            .then(response => response.json())
            .then(response => setUsers(response.data))
    },[])


    function deleteUser() {

    }

    function editUser() {

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
        resetUsers,
        getUserDetail,
        deleteUser,
        editUser
    }
};

export default useAdminGetUser;