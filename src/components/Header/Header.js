import React, { useEffect, useState } from "react";
import "./Header.scss";
import { Container } from "react-bootstrap";
import Image from "next/image";
import Navbar from "../Navbar/Navbar";
import Link from "next/link";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const [menus, setMenus] = useState([]);

  const fetchHeaderMenu = async () => {
    const getData = await fetch(`http://localhost:1337/api/menus`);
    const result = await getData.json();
    setMenus(result.data);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        const scrollValue = window.scrollY;
        setScrollPosition(scrollValue);
      };
      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  useEffect(() => {
    fetchHeaderMenu();
  }, []);

  const displaySidebar = () => {
    setOpen(!open);
  };
  return (
    <div className="header-wrapper">
      <div className={`header-section ${scrollPosition > 80 ? "has-scrolled" : ""}`}>
        <div className="header-logo">
          <Image className={"log-img"} width={100} height={40} src="/vercel.svg" quality={100} alt="logo-image" />
        </div>
        <nav className={`${open ? "responsive" : ""}`}>
          {menus?.map((menu, index) => {
            console.log(menu, "menuuu");
            return <>{menu.attributes.slug !== "home" && <Link href={`/${menu?.attributes?.slug}/`}>{menu?.attributes?.label}</Link>}</>;
          })}
          <div className="nav-btn nav-close-btn" onClick={displaySidebar}>
            <i className="icon cancel-icon" />
          </div>
        </nav>
        <div className="nav-btn button" onClick={displaySidebar}>
          <i className="icon menu-icon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
