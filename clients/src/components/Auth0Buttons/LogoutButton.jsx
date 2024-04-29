import { useAuth0 } from "@auth0/auth0-react";
import { LuLogOut } from "react-icons/lu";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button className="px-3 py-2 bg-secondary rounded-lg hover:bg-black text-slate-100 flex justify-center items-center" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out <LuLogOut className="ml-1 "/>
    </button>
  );
};

export default LogoutButton;