import logo from "../../img/logo.png";
import { useContext } from "react";
import UserContext from "./UserContext";
import NavBar from "./NavBar";

const Header = () => {
  const loggedInUser = useContext(UserContext);
  return (
    <header>
      <a href={`/`}>
        <img src={logo} alt="logo image" height={60} width={60} />
        <h1 id="header">NC News</h1>
      </a>
      <div className="nav-current-user">
          User:{" "}
          <img
            className="user-img"
            src={loggedInUser.avatar_url}
            alt={`avatar for user ${loggedInUser.username}`}
          />
          {loggedInUser.username}
      </div>
      <NavBar />
    </header>
  );
};

export default Header;
