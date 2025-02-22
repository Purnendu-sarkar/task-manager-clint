import { Menu, X, CircleCheckBig } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";

const NavBar = () => {
  const { user, logOut } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleLogout = () => {
    logOut()
      .then(() => {
        setIsMenuOpen(false);
        setIsProfileOpen(false);
      })
      .catch(console.error);
  };

  const navLinks = [
    { path: "/", label: "Home" },
    user && { path: "/addTask", label: "Add Task" },
    user && { path: "/taskBoard", label: "Task Board" },
  ].filter(Boolean);

  return (
    <nav className="bg-slate-100 bg-opacity-30 text-black w-full fixed top-0 left-0 z-50">
      <div className="w-full md:w-11/12 mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <CircleCheckBig className="h-8 w-8 text-blue-600" />
          <span className="ml-2 text-xl font-bold text-gray-800">
            Task Manager
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          {navLinks.map(({ path, label }) => (
            <li key={path}>
              <Link
                to={path}
                className="font-bold text-gray-700 hover:text-blue-600"
              >
                {label}
              </Link>
            </li>
          ))}
          {!user ? (
            <li>
              <Link
                to="/logIn"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Join Us
              </Link>
            </li>
          ) : (
            <li className="relative">
              <button onClick={() => setIsProfileOpen(!isProfileOpen)}>
                <img
                  src={user.photoURL}
                  alt="User Profile"
                  className="w-10 h-10 rounded-full border-2 border-blue-600 cursor-pointer"
                />
              </button>
              {isProfileOpen && (
                <ul className="absolute right-0 mt-2 w-40 bg-white text-gray-800 shadow-lg rounded-md">
                  <li>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 hover:bg-gray-200"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              )}
            </li>
          )}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white bg-opacity-80 backdrop-blur-md flex flex-col items-center space-y-6 py-10 z-50">
          {navLinks.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className="text-gray-700 text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          {!user ? (
            <Link
              to="/logIn"
              className="bg-blue-600 text-white px-6 py-3 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Join Us
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="text-red-600 text-lg hover:text-red-800"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
