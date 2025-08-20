import { motion } from "motion/react";
import { Hourglass } from "lucide-react";
import { useState, useEffect } from "react";
import Input from "./Input";

const CalculateForm = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <form action="" className=" border p-10 flex flex-col gap-10 rounded-xl items-center">
      <h2 className="text-6xl text-center">
        Calculate <span className="text-cyan-600">Timezone</span>
      </h2>
      <div className="gap-5 flex  items-center">
        <Input />
        <motion.div whileTap={{ rotate: 360 }}>
          <Hourglass />
        </motion.div>
        <Input />
      </div>
      <div className="flex justify-center items-center">
        <span className="text-xl">{time.toLocaleTimeString("it-IT")}</span>
      </div>
    </form>
  );
};

export default CalculateForm;
