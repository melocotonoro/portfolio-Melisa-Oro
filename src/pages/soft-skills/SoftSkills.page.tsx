import { useEffect, useState } from "react";
import Container from "@/components/container/Container";
import Title from "@/components/title/Title";
import IMGCLICK from "@assets/soft-skills/click.png";
import { dataSoftSkills } from "./data/dataSoftSkills";

const DELAY_PER_CARD = 120;

const SoftSkills = () => {
  const [flipped, setFlipped] = useState(
    Array(dataSoftSkills.length).fill(false),
  );

  const [radius, setRadius] = useState(120);

  //radio responsive
  useEffect(() => {
    const updateRadius = () => {
      if (window.innerWidth < 640) {
        setRadius(115); // mobile
      } else if (window.innerWidth < 1024) {
        setRadius(230); // tablet
      } else {
        setRadius(230); // desktop
      }
    };

    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  const handleClick = (clickedIndex: number) => {
    if (flipped.every(Boolean)) {
      setFlipped(Array(dataSoftSkills.length).fill(false));
      return;
    }

    dataSoftSkills.forEach((_, i) => {
      const distance = Math.abs(i - clickedIndex);
      setTimeout(() => {
        setFlipped((prev) => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
      }, distance * DELAY_PER_CARD);
    });
  };

  const total = dataSoftSkills.length;

  return (
    <Container>
      <Title title="Habilidades Blandas" />

      <div className="w-full flex justify-center items-center py-16">
        {/* Contenedor del círculo rotado -90° para poner Adaptable arriba */}
        <div
          className="
            relative
            size-75         
            md:size-162.5
            lg:size-182.5
          "
          style={{ transform: "rotate(-90deg)" }}
        >
          {dataSoftSkills.map((card, i) => {
            const angle = (i / total) * (2 * Math.PI);
            const cardRotation = -angle + Math.PI / 2;

            return (
              <div
                key={card.id}
                onClick={() => handleClick(i)}
                className="absolute left-1/2 top-1/2"
                style={{
                  transform: `
                    translate(-50%, -50%) 
                    rotate(${angle}rad) 
                    translate(${radius}px) 
                    rotate(${cardRotation}rad)
                  `,
                  transformOrigin: "center",
                  perspective: "600px",
                  cursor: "pointer",
                }}
              >
                {/* CARD */}
                <div
                  className="
                    size-20
                    md:size-40.5
                    lg:size-41.25
                  "
                  style={{
                    position: "relative",
                    transformStyle: "preserve-3d",
                    transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                    transform: flipped[i] ? "rotateY(180deg)" : "rotateY(0deg)",
                  }}
                >
                  {/* FRENTE */}
                  <div
                    className="w-full h-full absolute backface-hidden rounded-md bg-linear-to-br from-text-pink to-bg-pink/20 flex items-center justify-center group md:hover:ring-2 md:hover:ring-text-orange transition-all duration-300"
                    title="Clickeame"
                  >
                    <img
                      src={IMGCLICK}
                      alt="click"
                      className="size-8 md:size-20 group-hover:drop-shadow-orange transition-all duration-300"
                    />
                  </div>

                  {/* REVERSO */}
                  <div
                    style={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                    className="rounded-md border bg-linear-to-br from-text-orange to-text-orange-dark/30 flex items-center justify-center text-center"
                  >
                    <p className="text-text-gray text-[10px] px-2 md:text-[22px] ">
                      {card.text}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default SoftSkills;
