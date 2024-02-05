const NavBar = () => {
  const handleClick = () => {
    console.log("hello");
  };

  return (
    <>
    <nav className="navbar">
      <div className="links">
        <a href="/">Home</a>
        <a href="dashboard">Login/Register</a>
      </div>
    </nav>
        <button onClick={handleClick}>Search</button>
  </>);
};

export default NavBar;
