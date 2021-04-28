import styles from "./Header.module.css";
import TopNav from "./TopNav";
import WhistlistIcon from "../../assets/icons/WhistlistIcon";
import { useEffect, useState, useCallback } from "react";
import LoginForm from "../LoginForm/LoginForm";
import SearchForm from "../SearchForm/SearchForm";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo-light.png";

const Header = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [didMount, setDidMount] = useState<boolean>(false); // to disable Can't perform a React state Warning

  const handleScroll = useCallback(() => {
    const offset = window.scrollY;
    if (offset > 30) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }, [setScrolled]);

  useEffect(() => {
    setDidMount(true);
    window.addEventListener("scroll", handleScroll);
    return () => setDidMount(false);
  }, [handleScroll]);

  if (!didMount) {
    return null;
  }
  return (
    <>
      <TopNav />
      <nav
        className={`${
          scrolled ? "bg-white sticky top-0 shadow-md z-50" : "bg-transparent"
        } w-full z-50 h-20 relative`}
      >
        <div className={`flex justify-between ${styles.mainMenu}`}>
          <ul className={`flex-1 flex ${styles.leftMenu}`}>
            <li>
              <a href="www.example.com">Men</a>
            </li>
            <li>
              <a href="www.example.com">Women</a>
            </li>
            <li>
              <a href="www.example.com">Bags</a>
            </li>
            <li>
              <a href="www.example.com">Blogs</a>
            </li>
          </ul>
          <div className="flex-1 flex justify-center cursor-pointer">
            <Link to="/">
              <img src={Logo} className="w-28" alt="Website Logo" />
            </Link>
          </div>
          <ul className={`flex-1 flex justify-end ${styles.rightMenu}`}>
            <li>
              <SearchForm />
            </li>
            <li>
              <LoginForm />
            </li>
            <li>
              <a href="www.example.com">
                <WhistlistIcon />
              </a>
            </li>
            <li>
              <CartItem />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
