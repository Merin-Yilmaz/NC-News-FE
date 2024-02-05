import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <nav>
        <ul>
          {/* <li className="dashboardLink">
            <a href={`/dashboard`}>Login/Register</a>
          </li> */}
        </ul>
      </nav>
      <Outlet />
    </>
  );
}