import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const {loginWithPopup} = useAuth0();
  return (
    <div>
      <button onClick={() => loginWithPopup()}>Login</button>
    </div>
  )
}

export default LoginButton

