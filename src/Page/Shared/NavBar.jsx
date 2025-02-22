import { Menu, X, CircleCheckBig, Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const NavBar = () => {
  const { user, logOut } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const theme = isDarkTheme ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [isDarkTheme]);

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
    <nav className="bg-slate-100 dark:bg-black bg-opacity-30 text-black dark:text-white w-full fixed top-0 left-0 z-50">
      <div className="w-full md:w-11/12 mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <CircleCheckBig className="h-8 w-8 text-blue-600 dark:text-white" />
          <span className="ml-2 text-xl font-bold text-black dark:text-white">
            Task Manager
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          {navLinks.map(({ path, label }) => (
            <li key={path}>
              <Link
                to={path}
                className="font-bold text-black dark:text-white hover:text-blue-600"
              >
                {label}
              </Link>
            </li>
          ))}
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setIsDarkTheme(!isDarkTheme)}
            className="p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition duration-300"
          >
            {isDarkTheme ? (
              <Sun className="h-6 w-6 text-yellow-400" />
            ) : (
              <Moon className="h-6 w-6 text-gray-900" />
            )}
          </button>
          {!user ? (
            <li>
              <Link
                to="/logIn"
                className="bg-blue-600 dark:bg-white text-white dark:text-black px-4 py-2 rounded-md hover:bg-blue-700"
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
                  className="w-10 h-10 rounded-full border-2 border-blue-600 dark:border-white cursor-pointer"
                />
              </button>
              {isProfileOpen && (
                <ul className="absolute right-0 mt-2 w-40 bg-white dark:bg-black text-black dark:text-white shadow-lg rounded-md">
                  <li>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 hover:bg-blue-700"
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
        <div className="fixed inset-0 bg-white dark:bg-black dark:text-white bg-opacity-80 backdrop-blur-md flex flex-col items-center space-y-6 py-10 z-50 h-screen">
          {navLinks.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className="text-black dark:text-white text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          {!user ? (
            <Link
              to="/logIn"
              className="bg-blue-600 dark:bg-white text-white dark:text-black px-6 py-3 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Join Us
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-blue-600 dark:bg-white text-white dark:text-black px-4 py-2 rounded-md hover:bg-blue-700"
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
