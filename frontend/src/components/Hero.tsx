import CalculateForm from "./CalculateFrom";

const Hero: React.FC = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      {/* Intro  */}
      <div className="text-center mb-20">
        <h1 className="text-8xl">
          Welcome to <span className="text-cyan-600">TimeZone</span>
        </h1>
        <span>Your connection to every corner of the clock.</span>
      </div>

      {/* Calculator  */}
      <CalculateForm />
    </div>
  );
};

export default Hero;
