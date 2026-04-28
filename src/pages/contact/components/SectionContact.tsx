import { useState } from "react";
import type { Contact } from "../data/dataContact";

interface Props {
  data: Contact;
}

const SectionContact = ({ data }: Props) => {
  const { name, url, info, link } = data;
  const [copied, setCopied] = useState(false);

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Error copiando al portapapeles:", err);
    }
  };

  return (
    <div className="w-full h-10 font-roboto font-light animate-bounceInLeft md:h-20 group lg:ml-5">
      <div className="flex items-center gap-3" title={name}>
        <figure className="size-10 md:size-17.5 transition duration-300 group-hover:drop-shadow-pink">
          <img src={url} alt={name} />
        </figure>

        {info && (
          <span
            className={`text-sm cursor-pointer md:text-[26px] transition duration-300 ${
              !copied && "group-hover:text-shadow-orange"
            }`}
            onClick={() => handleCopy(info)}
          >
            {copied ? (
              <span className="text-text-pink font-medium">
                ¡Copiado al portapapeles!
              </span>
            ) : (
              info
            )}
          </span>
        )}

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-text-orange md:text-[26px] transition duration-300 group-hover:text-shadow-orange"
          >
            {link}
          </a>
        )}
      </div>
    </div>
  );
};
export default SectionContact;
