import { FaWhatsapp, FaInstagram, FaYoutube } from "react-icons/fa";

export default function SocialMedia() {
  return (
    <div className="m-2 p-2 flex flex-row">
      <a
        id="instagram"
        rel="noreferrer noopener"
        target="_blank"
        href="https://www.instagram.com/ndiproductora?hl=es-la"
        className="flex items-center justify-center hover:border-2 hover:border-0 
          border-pink-500 bg-gradient-to-b from-darkBlue to-darkBlue text-4xl hover:from-indigo-600 hover:via-pink-600 
          hover:to-yellow-500 min-w-wull hover:text-white text-white w-16 h-16  
            transform hover:-translate-y-3 rounded-full duration-500 mx-3"
      >
        <FaInstagram />
      </a>

      <a
        id="youtube"
        rel="noreferrer noopener"
        target="_blank"
        href="https://www.youtube.com/@ndiproductora/featured"
        className="flex items-center justify-center transform hover:-translate-y-3 
        hover:border-2 w-16 h-16 rounded-full duration-500 
        hover:border-red-500 hover:bg-red-500 
        text-white text-4xl mx-3"
      >
        <FaYoutube />
      </a>

      <a
        id="whatsapp"
        rel="noreferrer noopener"
        target="_blank"
        href="www.google.com"
        className="flex items-center justify-center duration-500 w-16 h-16 
          hover:border-2 rounded-full border-green-600 transform hover:-translate-y-3 text-4xl 
        text-white hover:bg-green-600 mx-3"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
}
