import { Link, NavLink } from "react-router-dom";

const AppNav = () => {
  return (
    <div className="nav">
      <nav>
        <ul>
          <li>
            <NavLink  to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="posts">Posts</NavLink>
          </li>
          <li>
            <NavLink to="dashboard">Dashbord</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AppNav;
