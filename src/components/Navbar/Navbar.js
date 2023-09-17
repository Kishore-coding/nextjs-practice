import Link from "next/link";
import React, { useState, useEffect } from "react";
import "./Navbar.scss";

const Navbar = () => {
  const [menus, setMenus] = useState([]);

  const fetchHeaderMenu = async () => {
    const getData = await fetch(`http://localhost:1337/api/menus`);
    const result = await getData.json();
    setMenus(result.data);
  };

  useEffect(() => {
    fetchHeaderMenu();
  }, []);
  return (
    <div className="navbar-wrapper">
      <ul>
        {menus?.map((menu, index) => {
          return (
            <>
              {menu.attributes.slug !== "home" && (
                <div className="menu-list" key={menu.attributes.slug}>
                  <li>
                    <Link href={`/${menu.attributes.slug}/`}>{menu?.attributes?.label}</Link>
                  </li>
                </div>
              )}
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
