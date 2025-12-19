import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Profile() {
  const { user, login, logout } = useContext(UserContext);

  return (
    <div>
      {user ? (
        <>
          <h2>Welcome {user.name}</h2>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </div>
  );
}

export default Profile;
