interface ButtonProps {
  text: string;
  href: string;
}

const Button: React.FC<ButtonProps> = ({ text, href }) => {
  return (
    <>
      <a
        href={href}
        className="
          focus:shadow-xs inline-flex h-12 cursor-pointer select-none
          items-center justify-center rounded-full border-2 border-solid border-white bg-transparent bg-white
          px-10 py-0 text-center align-middle font-custom text-xl font-semibold text-black 
          no-underline transition-all duration-300 ease-in-out hover:border-orange hover:text-orange  focus:no-underline
        "
      >
        {text}
      </a>
    </>
  );
};

export default Button;
