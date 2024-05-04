import bg from "../assets/img/bg3.jpg";

const Hero = () => {
  return (
    <div className="flex justify-center items-center ">
      <img src={bg} alt="bg" className="" />
      <h1 className="absolute font-rochester text-6xl text-white mb-10 bold ">
        Bumble Bee Restro Cafe
      </h1>
    </div>
  );
};

export default Hero;
