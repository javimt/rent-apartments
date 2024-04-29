import { useAuth0 } from "@auth0/auth0-react";
import { LuLogIn } from "react-icons/lu";

function LoginButton() {
  const { loginWithPopup } = useAuth0();

  return (
    <button
      className="px-3 py-2 bg-secondary rounded-lg hover:bg-black text-slate-100 flex justify-center items-center"
      onClick={() => loginWithPopup()}
    >
      Login <LuLogIn className="ml-1 " />
    </button>
  );
}

export default LoginButton;
