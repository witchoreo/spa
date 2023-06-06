import { Link } from "react-router-dom";
import logo from "../assets/logo.svg"

function Header() {
    return  <nav className="brown lighten-1">
    <div className="container">
        <div className="nav-wrapper">
             <Link to="/" className="brand-logo">
                 <img src={logo} className="logo"/>
             </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
            <Link to="/contact">Контакты</Link>
        </li>
        <li>
            <Link to="/about">О нас</Link>
        </li>
          </ul>
        </div>
    </div>
  </nav>
}
export { Header } ;