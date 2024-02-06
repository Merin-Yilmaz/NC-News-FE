import logo from "../../img/logo.png";

const Header = () => {
  return (
    <header>
      <a href={`/`}>
        <img src={logo} alt="logo image" height={70} width={70} />
        <h1>NC News</h1>
      </a>
    </header>
  );
};

export default Header;
