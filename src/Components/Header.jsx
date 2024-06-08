import { FaUser } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoMdCart } from "react-icons/io";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { useSelector } from "react-redux";
const Header = () => {
  const bag = useSelector((store) => store.bag);
  // console.log(bag);

  return (
    <header className="mb-5">
      <div className="logo_container">
        <Link to="/">
          <img
            className="myntra_home"
            src="images/myntra_logo.webp"
            alt="Myntra Home"
          />
        </Link>
      </div>
      <nav className="nav_bar">
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">Kids</a>
        <a href="#">Home & Living</a>
        <a href="#">Beauty</a>
        <a href="#">
          Studio <sup>New</sup>
        </a>
      </nav>
      <div className="search_bar">
        <input
          className="search_input"
          placeholder="Search for products, brands and more"
        />
        <FiSearch />
      </div>
      <div className="action_bar">
        <div className="action_container">
          <FaUser />
          <span className="action_name">Profile</span>
        </div>

        <div className="action_container">
          <CiHeart />
          <span className="action_name">Wishlist</span>
        </div>

        <Link className="action_container" to="/cart">
          <IoMdCart />
          <span className="action_name">Cart</span>
          <span className="bag-item-count">{bag.length}</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
