import React, { useContext } from "react";
import { useHistory,Link } from "react-router-dom";
import UserContext from "../../context/UserContext";


export default function AuthOptions() {
  
  const { userData, setUserData } = useContext(UserContext);
  const history = useHistory();
  const register = () => history.push("/register");
  const login = () => history.push("/login");
  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", "");
    history.push('/');
  };

  return (
    <nav className = "auth-options">
      {userData.user ? (
        <>
        <Link class="Homebutton" to="/">Home/DashBoard</Link>
        
        <h1 className="welcome">Welcome {userData.user.displayName}</h1>
        <button onClick={logout}>Log out</button>
        
        
        
        </>
        ) : (  
        <>
        <button onClick={register}>Register</button>
        <button onClick={login}>Log in</button>
        </>
      )}   
    </nav>
  );
}