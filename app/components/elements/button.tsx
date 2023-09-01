type ButtonProps = {
  text: string;
  href: string;
};

const Button: React.FC<ButtonProps> = ({ text, href }) => {
  return (
    <>
      <a
        href={href}
        className="
          inline-flex h-8 items-center justify-center hover:-translate-y-2 duration-500
          px-10 text-center align-middle font-custom text-xl text-white hover:underline hover:underline-offset-4
        "
      >
        {text}
      </a>
    </>
  );
};

export default Button;
