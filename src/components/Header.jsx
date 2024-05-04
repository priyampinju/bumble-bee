import logo from "../assets/img/logo.png";
import Button from "./Button";
import { nav } from "../assets/constants";

const Header = () => {
  return (
    <div className="h-[5rem] absolute text-white w-full backdrop-blur-sm flex justify-between items-center px-7">
      <a href="/">
        <img src={logo} alt="logo" className="cursor-pointer  h-[4rem]" />
      </a>
      <div className="navbar flex lg:w-[30rem] justify-between uppercase">
        {nav.map((item) => (
          <a href={item.url}>
            <div className="cursor-pointer hover:text-yellow-400" key={item.id}>
              {item.title}
            </div>
          </a>
        ))}
      </div>
      <Button text="Contact Us" url="/contact" />
    </div>
  );
};

export default Header;
