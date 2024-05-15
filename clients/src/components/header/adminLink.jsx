import { Link } from "react-router-dom";
import { GrUserAdmin } from "react-icons/gr";
import useAuth0GetData from "../../hooks/custom/auth0getinData";
import { useSelector } from "react-redux";

function AdminLink({ className }) {
  const { role } = useAuth0GetData();

  return (
    (role === "admin" || role === "superAdmin") 
    && (
    <Link className={className + " relative"} to={"/Admin"}>
      <div className="flex gap-1 text-white bg-secondary px-1 hover:bg-black transition-all delay-300 py-1 rounded-lg items-center justify-center w-auto">
        <GrUserAdmin />
        <h3>Admin</h3>
      </div>
    </Link>)
  );
}

export default AdminLink;
