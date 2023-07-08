import { FaWhatsapp, FaInstagram, FaYoutube } from "react-icons/fa";

export default function SocialMedia() {
  return (
    <div className="m-2 p-2 flex flex-row">
      <button
        id="whatsapp"
        className="flex items-center justify-center bg-white duration-500 w-16 h-16 border-2 rounded-full border-green-600 transform hover:-translate-y-3 text-4xl text-green-500 hover:bg-green-600 hover:text-white mx-3"
      >
        <FaWhatsapp />
      </button>

      <button
        id="instagram"
        className="flex items-center justify-center border-2 hover:border-0 border-pink-500 bg-gradient-to-b text-4xl hover:from-indigo-600 hover:via-pink-600 hover:to-yellow-500 min-w-wull hover:text-white bg-white text-pink-600 w-16 h-16  transform hover:-translate-y-3 rounded-full duration-500 mx-3"
      >
        <FaInstagram />
      </button>

      <button
        id="youtube"
        className="flex items-center justify-center bg-white transform hover:-translate-y-3 border-2 w-16 h-16 rounded-full duration-500 text-red-500 border-red-500 hover:bg-red-500 hover:text-white text-4xl mx-3"
      >
        <FaYoutube />
      </button>
    </div>
  );
}
