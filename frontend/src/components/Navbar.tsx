import SwitcherMode from "./SwitcherMode";
import Logo from "../assets/logo.png";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center py-3 px-4 fixed top-4 left-1/2 -translate-x-1/2 rounded-xl shadow-md shadow-cyan-600 w-1/2">
      <img src={Logo} alt="Logo" className=" w-14 scale-150" />
      <SwitcherMode />
    </nav>
  );
};

export default Navbar;
