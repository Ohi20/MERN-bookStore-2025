import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import IMAGES from "../../public/assets/Images";

// react icons
import { FaBarsStaggered, FaBlog, FaXmark } from "react-icons/fa6";
import { AuthContext } from "../context/AuthProvider";
import { getAuth, signOut } from "firebase/auth";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [error, setError] = useState("error");

  const { user } = useContext(AuthContext);
  const auth = getAuth();
  // console.log(user);

  //   toggle menu
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }

      window.addEventListener("scroll", handScroll);

      return () => {
        window.addEventListener("scroll", handScroll);
      };
    };
  }, []);

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        setError(error);
      });
  };

  //   navItems

  const navItems = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Shop", path: "/shop" },
    { link: "Sell Your Book", path: "/admin/dashboard" },
    { link: "Blog", path: "/blog" },
  ];

  return (
    <header className="w-full bg-transparent fixed top-0 left-o right-0 transition-all ease-in duration-300">
      <nav
        className={`py-4 lg:px-24 px-4 ${
          isSticky ? "sticky top-0 left-0 right-0 bg-blue-300" : ""
        }`}
      >
        <div className="flex justify-between items-center text-base ">
          {/* logo */}
          <Link to="/" className="text-[#810081] text-xl font-bold">
            <img className="w-12 h-12" src={IMAGES.image1} alt="logo" />
            Philomath
          </Link>

          {/* nav items for large devices */}

          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                to={path}
                className="block text-xl bg-[#810081] text-white p-2 font-semibold rounded-md uppercase cursor-pointer hover:bg-[#ce00ce]"
              >
                {link}
              </Link>
            ))}
          </ul>

          {/* btn for large devices */}
          <div className="space-x-12 hidden lg:flex items-center">
            {user ? (
              <div className="flex justify-between items-center gap-3">
                <div className="bg-[#810081] text-white p-2 rounded-md font-semibold">
                  User Name : {user.displayName}
                </div>
                <div className="bg-red-700 px-3 py-1 rounded-md hover:bg-red-500">
                  <button
                    onClick={handleLogOut}
                    className="text-white font-semibold p-2"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <Link
                className="bg-[#810081] p-2 rounded-md hover:bg-[#ce00ce]"
                to="/login"
              >
                <button className="text-white text-xl font-bold">
                  {/* <FaBarsStaggered className="w-5 hover:text-blue-700" /> */}
                  Login
                </button>
              </Link>
            )}
          </div>

          {/* menu button for the mobile devices */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none"
            >
              {isMenuOpen ? (
                <FaXmark className="h-5 w-5 text-black" />
              ) : (
                <FaBarsStaggered className="h-5 w-5 text-black" />
              )}
            </button>
          </div>
        </div>

        {/* nav items for the small devices */}
        <div
          className={`bg-blue-700 space-y-4 px-4 mt-16 py-7 ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          }`}
        >
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              to={path}
              className="block text-base text-black uppercase cursor-pointer hover:text-blue-700"
            >
              {link}
            </Link>
          ))}
          {}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
