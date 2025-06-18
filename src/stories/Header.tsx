"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { ItemType } from "antd/es/menu/interface";
import logo from "./assets/sega_logo.png";
import "./header.css";

const menuItems: ItemType[] = [
  {
    key: "worlds",
    label: (
      <a href="#/">
        <span>WORLDS</span>
      </a>
    ),
  },
  {
    key: "game",
    label: <span>GAME</span>,
    children: [
      {
        key: "game1",
        label: <a href="a">ALL</a>,
      },
      {
        key: "game2",
        label: <a href="#/featured">FEATURED</a>,
      },
    ],
  },
  {
    key: "reward",
    label: (
      <a href="#/reward">
        <span>REWARD</span>
      </a>
    ),
  },
  {
    key: "watch",
    label: (
      <a href="#/watch">
        <span>WATCH</span>
      </a>
    ),
  },
  {
    key: "shop",
    label: (
      <a href="#/shop">
        <span>SHOP</span>
      </a>
    ),
  },
  {
    key: "news",
    label: (
      <a href="#/news">
        <span>NEWS</span>
      </a>
    ),
  },
  {
    key: "deals",
    label: (
      <a href="#/deals">
        <span>DEALS</span>
      </a>
    ),
  },
];

export const Header = ({ menuItems2 }: { menuItems2?: ItemType[] }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  console.log(menuItems2);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1300) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="header">
      <div className="storybook-header">
        <a href="./" className="image">
          <Image src={logo} alt="Logo" width={97} height={32}/>
        </a>

        <nav className="storybook-nav">
          <Menu
            mode="horizontal"
            overflowedIndicator={null}
            className="storybook-nav-menu"
            items={menuItems2 ?? menuItems}
          />
        </nav>

        <div className="email-signup">
          <a>EMAIL SIGNUP</a>
        </div>

        <div className="menu-icon" onClick={toggleMobileMenu}>
          <MenuOutlined />
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="dropdown">
          <Menu
            mode="vertical"
            overflowedIndicator={null}
            className="mobile-nav-menu"
            items={menuItems2 ?? menuItems}
          />
          <div className="dropdown-email-signup">
            <a className="email-signup-button">EMAIL SIGNUP</a>
          </div>
        </div>
      )}
    </header>
  );
};
