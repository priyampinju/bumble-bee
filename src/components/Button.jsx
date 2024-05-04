const Button = ({ text, url }) => {
  return (
    <a href={url}>
      <div className="border border-white px-4 rounded-lg hover:bg-white hover:text-black transition-colors cursor-pointer">
        {text}
      </div>
    </a>
  );
};

export default Button;
