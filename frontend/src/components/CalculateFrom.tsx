import { motion } from "motion/react";
import { Hourglass } from "lucide-react";
import { useState, useEffect } from "react";

const CalculateForm = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <form action="" className=" border p-10 flex flex-col gap-5 rounded-xl">
      <h2 className="text-4xl">
        Calculate <span className="text-cyan-600">Timezone</span>
      </h2>
      <div className="gap-5 flex  items-center">
        <input
          type="text"
          placeholder="Your Country"
          className="outline-none px-4 py-2 border rounded-xl"
        />
        <motion.div whileTap={{ rotate: 360 }}>
          <Hourglass />
        </motion.div>
        <input
          type="text"
          placeholder="Friend Country"
          className="outline-none px-4 py-2 border rounded-xl"
        />
      </div>
      <div className="flex justify-center items-center">
        <span className="text-xl">{time.toLocaleTimeString("it-IT")}</span>
      </div>
    </form>
  );
};

export default CalculateForm;
