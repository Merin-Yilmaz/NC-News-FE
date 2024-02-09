import logo from "../../img/logo.png";
import { useContext } from "react";
import UserContext from "./UserContext";

const Header = () => {
  const loggedInUser = useContext(UserContext);
  return (
    <header>
      <a href={`/`}>
        <img src={logo} alt="logo image" height={70} width={70} />
        <h1>NC News</h1>
      </a>
      <div className="nav-current-user">
        <p>
          Logged In User:{" "}
          <img
            className="user-img"
            src={loggedInUser.avatar_url}
            alt={`avatar for user ${loggedInUser.username}`}
          />
          {loggedInUser.username}
        </p>
      </div>
    </header>
  );
};

export default Header;
