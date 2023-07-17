import { FaWhatsapp, FaInstagram, FaYoutube } from "react-icons/fa";

export default function SocialMedia() {
  return (
    <div className="m-2 flex flex-row p-2">
      <a
        id="instagram"
        rel="noreferrer noopener"
        target="_blank"
        href="https://www.instagram.com/ndiproductora?hl=es-la"
        className="from-darkBlue to-darkBlue min-w-wull mx-3
          flex h-16 w-16 transform items-center justify-center rounded-full 
          border-pink-500 bg-gradient-to-b text-4xl text-white duration-500 hover:-translate-y-3  
            hover:border-2 hover:from-indigo-600 hover:via-pink-600 hover:to-yellow-500 hover:text-white"
      >
        <FaInstagram />
      </a>

      <a
        id="youtube"
        rel="noreferrer noopener"
        target="_blank"
        href="https://www.youtube.com/@ndiproductora/featured"
        className="mx-3 flex h-16 w-16 transform 
          items-center justify-center rounded-full border-red-500 text-4xl 
        text-white duration-500 
        hover:-translate-y-3 hover:border-2 hover:bg-red-500"
      >
        <FaYoutube />
      </a>

      <a
        id="whatsapp"
        rel="noreferrer noopener"
        target="_blank"
        href="https://wa.me/message/CDY5GP7JSURXD1"
        className="mx-3 flex h-16 w-16 transform items-center 
          justify-center rounded-full border-green-600 text-4xl text-white duration-500 
        hover:-translate-y-3 hover:border-2 hover:bg-green-600"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
}
