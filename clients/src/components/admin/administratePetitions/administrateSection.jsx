import { useEffect } from "react";
import useAdminTransaction from "../../../hooks/admin/adminTransacion";
import TransactionPending from "./transactionPending";
import TransactionActive from "./transactonActive";
import TransitionActive from "./transactonActive";
import useAdminGetUser from "../../../hooks/admin/adminUserDetail";
import useAdminApartments from "../../../hooks/admin/adminApartments";



function AdministrateSection() {

  
  
  const {getTransactions,transactions } = useAdminTransaction()
  const {getAllUsers, users} = useAdminGetUser()
  const {apartments, getApartments, pending} = useAdminApartments()
  useEffect(()=> {
    getTransactions()
    getApartments()
  },[])
  
  useEffect(()=>{
    getAllUsers()
    
  },[pending == false])


  return (
    <div className="grid md:grid-cols-1 xl:grid-cols-2   "> 
      <TransactionPending transactions={transactions.pending} apartments={apartments} users={users}/>
      <TransactionActive transactions={transactions.active} apartments={apartments} users={users}/>
    </div>
  );
}

export default AdministrateSection;