import { FaWhatsapp, FaInstagram, FaYoutube } from "react-icons/fa";

import SocialMediaLink from "../elements/socialMediaLink";

const SocialMedia: React.FC = () => {
  return (
    <div className="m-2 flex flex-row p-2">
      <SocialMediaLink
        id="instagram"
        href="https://www.instagram.com/ndiproductora?hl=es-la"
        className="border-pink-500 bg-gradient-to-b from-darkBlue to-darkBlue 
            hover:from-indigo-600 hover:via-pink-600 hover:to-yellow-500 hover:text-white"
        Icon={FaInstagram}
        ariaLabel="Instagram"
      />

      <SocialMediaLink
        id="youtube"
        href="https://www.youtube.com/@ndiproductora/featured"
        className="border-red-500 hover:bg-red-500"
        Icon={FaYoutube}
        ariaLabel="YouTube"
      />

      <SocialMediaLink
        id="whatsapp"
        href="https://wa.me/message/CDY5GP7JSURXD1"
        className="border-green-600 hover:bg-green-600"
        Icon={FaWhatsapp}
        ariaLabel="WhatsApp"
      />
    </div>
  );
};

export default SocialMedia;
