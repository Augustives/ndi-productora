export default function Button({ text, href }) {
  return (
    <>
      <a
        href={href}
        className="
            focus:shadow-xs font-custom hover:border-orange hover:text-orange inline-flex
            h-12 cursor-pointer select-none items-center justify-center rounded-full border-2 border-solid
            border-white bg-transparent bg-white px-10 py-0 text-center align-middle text-xl 
            font-semibold text-black no-underline transition-all duration-300 ease-in-out  focus:no-underline
        "
      >
        {text}
      </a>
    </>
  );
}
