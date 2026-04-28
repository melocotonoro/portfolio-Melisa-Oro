import IMGLINE from "@assets/title/Atom-Section-Line.png";
import IMGSECTION from "@assets/title/Atom-Section.png";

interface Props {
  title: string;
}

const Title = ({ title }: Props) => {
  return (
    <div className="h-20 mb-6.25 md:h-28">
      <h2 className="text-2xl text-text-pink animate-opacity-title md:text-[32px]">
        {title}
      </h2>
      <figure className="md:w-98 md:h-6 md:mb-1.5">
        <img src={IMGLINE} alt="linea" className="md:w-full md:object-cover" />
      </figure>
      <figure className="relative md:w-82 md:h-8">
        <img
          src={IMGSECTION}
          alt="división"
          className="z-50 md:w-full  md:object-cover"
        />
        <div className="w-60 h-6 absolute top-0 -z-10 blur-md animate-flash bg-text-pink/25 md:w-full md:h-full"></div>
      </figure>
    </div>
  );
};
export default Title;
