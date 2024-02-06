const NavBar = () => {
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
    </>
  );
};

export default NavBar;
