import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="w-full flex flex-row justify-around items-center h-auto">
      <a href="/">
        <p className="pl-2 py-3 ">Fake Shop Store</p>
      </a>
      <div>
        <Link to={`/cart`}>
          <button>Cart</button>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
