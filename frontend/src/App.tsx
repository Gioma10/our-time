import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { motion } from "motion/react";
import { ThemeContext } from "./context/ThemeContext";
import { useContext } from "react";

function App() {
  const { isDark } = useContext(ThemeContext);
  return (
    <motion.div
      animate={{
        backgroundColor: isDark ? "#121212" : "#F5F5F5",
        color: isDark ? "#F5F5F5" : "#121212",
      }}
      transition={{ duration: 0.5 }}
  
    >
      <Navbar />
      <Hero />
    </motion.div>
  );
}

export default App;
