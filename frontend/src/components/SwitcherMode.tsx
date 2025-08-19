import { useContext } from "react";
import { motion } from "motion/react";
import { FaRegMoon, FaRegSun } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";

const SwitcherMode: React.FC = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      className={`w-24 h-10 rounded-4xl bg-white shadow-lg cursor-pointer relative`}
      onClick={toggleTheme}
    >
      {/* circle  */}
      <motion.div
        animate={{ x: isDark ? 48 : 0 }}
        transition={{duration: 0.5}}
        className={`shadow-sm shadow-black w-1/2 h-full rounded-full bg-white border-2 border-transparent absolute bottom-0`}
      ></motion.div>

      <div className="flex justify-around text-black">
        <FaRegSun />
        <FaRegMoon />
      </div>
    </button>
  );
};

export default SwitcherMode;
