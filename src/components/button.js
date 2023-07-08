export default function Button({ text, href }) {
  return (
    <>
      <a
        href={href}
        className="
          inline-flex items-center justify-center h-12 px-10 py-0 text-xl font-semibold text-center
        text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2
        border-softBlue border-solid rounded-full cursor-pointer select-none hover:text-orange hover:border-orange 
          focus:shadow-xs focus:no-underline
        "
      >
        {text}
      </a>
    </>
  );
}
