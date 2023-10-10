import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/ABC (1).png";
import userPhoto from "../../assets/images/user.png";
import { FaBeer } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Navbar = () => {

  const { user , logOut } = useContext(AuthContext)

  const handleSignOut = () => {
    logOut () 
    .then ( result => {
      console.log (result.user)
    })
    .catch (error => {
      console.error (error)
    })
  }

  const navLinks = <>
    <li><NavLink to={"/"}>Home</NavLink></li>
    <li><NavLink to={"/services"}>Services</NavLink></li>
    <li><NavLink to={"/about"}>About Us</NavLink></li>
    <FaBeer></FaBeer>

  </>
  return (
    <div className="navbar bg-base-100 mb-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl"><img className="h-[10vh]" src={logo} alt="" /></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="avatar">
          <div className="w-12 rounded-full mr-2">
            <img src={userPhoto} />
          </div>
        </div>
        {
          user ?
          <button onClick={ handleSignOut } className="btn">Sign out</button> :
        <Link to={"/login"}><button className="btn">Sign in</button></Link>
        }

      </div>
    </div>
  );
};

export default Navbar;