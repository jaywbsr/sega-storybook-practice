import Image from "next/image";
import logo from "./assets/sega_logo.png";
import "./header.css";

type User = {
  name: string;
};

export interface HeaderProps {
  user?: User;
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
}

const navItems = [
  { label: "WORLDS", href: "#/worlds" },
  { label: "GAME", href: "game" },
  { label: "REWARD", href: "reward" },
  { label: "WATCH", href: "watch" },
  { label: "SHOP", href: "shop" },
  { label: "NEWS", href: "news" },
  { label: "DEALS", href: "deals" },
];

export const Header = ({}: HeaderProps) => (
  <header>
    <div className="storybook-header">
      <a href="#" className="image">
        <Image src={logo} alt="Logo" width={97} height={32}  />
      </a>

      <nav className="storybook-nav">
        <ul>
          {navItems.map((item) => (
            <li key={item.label}>
              <a href={item.href}>
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="email-signup">
        <a>EMAIL SIGNUP</a>
      </div>
    </div>
  </header>
);
