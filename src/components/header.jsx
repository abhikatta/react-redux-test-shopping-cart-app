import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="w-full flex flex-row justify-around items-center h-auto">
      <Link to={"/"}>
        <p className="pl-2 py-3 ">Fake Shop Store</p>
      </Link>
    </nav>
  );
};

export default Header;
