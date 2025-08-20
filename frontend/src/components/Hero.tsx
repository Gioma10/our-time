import { useState, useEffect } from "react";
import CalculateForm from "./CalculateFrom";
import { motion } from "motion/react";

const Hero: React.FC = () => {
  const [getStarted, setGetStarted] = useState<boolean>(false);

  useEffect(() => {
    setGetStarted(false);
  }, []);

  return (
    <div className="h-screen flex items-center justify-center overflow-hidden relative">
      {/* Intro  */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: !getStarted ? 0 : -1200 }}
        transition={{ duration: 0.5 }}
        className="text-center flex flex-col gap-12 mb-20"
      >
        <div>
          <h1 className="text-8xl">
            Welcome to <span className="text-cyan-600">TimeZone</span>
          </h1>
          <span>Your connection to every corner of the clock.</span>
        </div>

        <div>
          <button
            onClick={() => setGetStarted(true)}
            className="py-2 px-4 rounded-4xl border shadow-md hover:shadow-cyan-600 transition-all duration-300 cursor-pointer"
          >
            Get started
          </button>
        </div>
      </motion.div>

      {/* Calculator  */}

      <motion.div
        initial={{ x: 1000 }}
        animate={{ x: getStarted ? 0 : 1000 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <CalculateForm />
      </motion.div>
    </div>
  );
};

export default Hero;
