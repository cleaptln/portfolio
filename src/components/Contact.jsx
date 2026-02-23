import { MdEmail } from "react-icons/md";
import Bouton from "./Bouton";
import { FaPhoneAlt } from "react-icons/fa";
import NageurEclaireur from "./NageurEclaireur";

const Contact = () => {
  const email = "cleaportolan@gmail.com";
  const telephone = "06 47 83 71 25";

  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <div className="w-70">
        <NageurEclaireur fill="#efece6" />
      </div>
      <div className="contact-content flex gap-10">
        <div>
          <h2 className="text-primary text-4xl font-sans select-none">
            <span className="font-display">C</span>léa{" "}
            <span className="font-display">P</span>ortolan
          </h2>
        </div>
        <div>
          <Bouton
            content={email}
            icon={MdEmail}
            onClick={`mailto:${email}`}
            width="280px"
          />
          <Bouton
            content={telephone}
            icon={FaPhoneAlt}
            onClick={`telto:${telephone}`}
            width="280px"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
