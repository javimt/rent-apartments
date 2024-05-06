import { Link } from 'react-router-dom'
import { GrUserAdmin } from "react-icons/gr";

function AdminLink({ className }) {
    return (
        <Link className={className + ' relative'} to={'/Admin'}>
            <div className='flex gap-1 text-white bg-secondary px-1 hover:bg-black transition-all delay-300 py-1 rounded-lg items-center justify-center w-auto' >
                <GrUserAdmin/>
                <h3>Admin</h3>
            </div>
        </Link>
    );
}

export default AdminLink;