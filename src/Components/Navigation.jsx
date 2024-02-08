import { useContext } from "react";
import UserContext from "./UserContext";

const NavBar = () => {
  const loggedInUser = useContext(UserContext);

  return (
    <>
      <nav className="navbar">
        <div className="links">
          <a
            href="/"
            style={{
              color: "white",
              backgroundColor: "#f1356d",
              borderRadius: "8px",
              fontWeight: "bold",
            }}
          >
            Home
          </a>
          <a
            href="dashboard"
            style={{
              color: "white",
              backgroundColor: "#f1356d",
              borderRadius: "8px",
              fontWeight: "bolder",
            }}
          >
            Login/Register
          </a>
        </div>
      </nav>
      <div className="Nav-current-user">
        <p>
          User:{" "}
          <img
            className="user-img"
            src={loggedInUser.avatar_url}
            alt={`avatar for user ${loggedInUser.username}`}
          />
          {loggedInUser.username}
        </p>
      </div>
    </>
  );
};

export default NavBar;
