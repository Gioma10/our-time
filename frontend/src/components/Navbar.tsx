import SwitcherMode from "./SwitcherMode";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center py-3 px-4 fixed top-4 left-1/2 -translate-x-1/2 rounded-xl shadow-md shadow-cyan-600 w-1/2">
      <span>logo</span>
      <SwitcherMode />
    </nav>
  );
};

export default Navbar;
