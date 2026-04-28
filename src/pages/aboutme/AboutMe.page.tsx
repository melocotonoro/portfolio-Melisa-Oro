import DesignInfo from "./components/DesignInfo";
import DevelopInfo from "./components/DevelopInfo";
import ProfileHero from "./components/ProfileHero";

const AboutMe = () => {
  return (
    <section className="w-82.5 mx-auto px-2 border-2 border-text-orange border-t-0 md:w-196.5 lg:w-310 lg:flex lg:flex-wrap lg:justify-between">
      <DesignInfo />
      <ProfileHero />
      <DevelopInfo />
    </section>
  );
};

export default AboutMe;
