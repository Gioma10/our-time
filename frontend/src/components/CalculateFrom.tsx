import { motion } from "motion/react";
import { Hourglass } from "lucide-react";
import Input from "./Input";
import { useForm } from "react-hook-form";

type FormData = {
  myCountry: string;
  yourCountry: string;
};

const CalculateForm = () => {
  const {
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Saves data", data);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" border p-10 flex flex-col gap-10 rounded-xl items-center"
    >
      <h2 className="text-6xl text-center">
        Calculate <span className="text-cyan-600">Timezone</span>
      </h2>
      <div className="gap-5 flex  items-center">
        <Input placeholder="My Country" name="myCountry" setValue={setValue} />
        {errors.myCountry && (
          <p className="text-red-500">My Country is required</p>
        )}
        <motion.div whileTap={{ rotate: 360 }}>
          <Hourglass />
        </motion.div>
        <Input
          placeholder="Friend Country"
          name="yourCountry"
          setValue={setValue}
        />
        {errors.yourCountry && (
          <p className="text-red-500">Friend Country is required</p>
        )}
      </div>
      <div className="flex justify-center items-center">
        <button className="py-2 px-4 rounded-xl border shadow-md hover:shadow-cyan-600 transition-all duration-300 cursor-pointer">
          Calculate
        </button>
      </div>
    </form>
  );
};

export default CalculateForm;
