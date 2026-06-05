import { MdEmail } from "react-icons/md";
import Bouton from "./Bouton";
import { FaPhoneAlt } from "react-icons/fa";
import NageurEclaireur from "./NageurEclaireur";

const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <div className="w-70">
        <NageurEclaireur fill="#efece6" />
      </div>
      <div className="flex flex-col md:flex-row gap-10">
        <div>
          <h2 className="text-primary text-4xl font-sans select-none">
            <span className="font-display">C</span>léa{" "}
            <span className="font-display">P</span>ortolan
          </h2>
        </div>
        <div>
          <Bouton
            content="cleaportolan@gmail.com"
            icon={MdEmail}
            onClick={() =>
              (window.location.href = "mailto:cleaportolan@gmail.com")
            }
            width="280px"
          />
          <Bouton
            content="06 47 83 71 25"
            icon={FaPhoneAlt}
            onClick={() => (window.location.href = "tel:0647837125")}
            width="280px"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
