import cafe from "../assets/img/23.jpg";

const About = () => {
  return (
    <div className="text-white text-3xl py-10 mx-auto">
      <h1 className="w-full text-center pb-5 font-rochester">About our Cafe</h1>
      <div className="w-full flex items-center">
        <div className="w-1/2 pl-9">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
          exercitationem!
        </div>
        <div className="">
          <img src={cafe} alt="cafe" width={600} />
        </div>
      </div>
    </div>
  );
};

export default About;
