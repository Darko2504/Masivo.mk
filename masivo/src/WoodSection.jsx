import React from "react";
import { motion } from "framer-motion";

import BukaMain from "../src/assets/bukaMain.jpg";
import DabMain from "../src/assets/dabMain.webp";
import OrevMain from "../src/assets/orevMain1.jpg";

import bukaSlider3 from "../src/assets/bukaSlider3.jpg";
import dabSlider2 from "../src/assets/dabSlider2.jpg";
import orevSlider3 from "../src/assets/orevSlider3.jpg";

const woods = [
  {
    id: "buka",
    name: "Бука",
    enName: "Beech",
    description: {
      mk: "Буката е светло дрво со фина текстура, познато по својата издржливост и естетски изглед. Се користи во мебелот, паркетите и изработката на музички инструменти. Во Македонија, бука расте во планинските региони, особено во Националниот парк Маврово, кој е дел од UNESCO Светското наследство за примитивни букови шуми.",
      en: "Beech is a light wood with a fine texture, known for its durability and aesthetic appearance. It is commonly used in furniture, flooring, and musical instruments. In Macedonia, beech grows in the mountainous regions, especially in Mavrovo National Park, which is part of the UNESCO World Heritage for primeval beech forests.",
    },
    image: bukaSlider3,
    thumb: BukaMain,
  },
  {
    id: "dab",
    name: "Даб",
    enName: "Oak",
    description: {
      mk: "Македонскиот даб (Quercus trojana) е малo до средno дрво, кое расте до 20 метри височина. Лисjата му sе сјајно зелени до сивозелени, со грубо назабени рабови. Познат е по својата цврстина и долготрајност, што го прави идеален за мебел. Дабот е симбол на сила и е присутен во грбот на Република Северна Македонија.",
      en: "Macedonian oak (Quercus trojana) is a small to medium-sized tree, reaching up to 20 meters in height. Its leaves are glossy green to gray-green, with roughly serrated edges. Oak is famous for its strength and longevity, making it ideal for furniture and wine barrels. Oak is a symbol of strength and is featured in the coat of arms of North Macedonia.",
    },
    image: dabSlider2,
    thumb: DabMain,
  },
  {
    id: "orev",
    name: "Орев",
    enName: "Walnut",
    description: {
      mk: "Оревот е големо листопадно дрво, кое достигнува висина до 25 метри. Познат е по својата темна, елегантна текстура и топлина. Во Македонија оревот се користи најмногу за изработка на мебел и музички инструменти.",
      en: "Walnut is a large deciduous tree, reaching up to 25 meters in height. It is known for its dark, elegant texture and warmth. In Macedonia, walnut is used mostly for furniture",
    },
    image: orevSlider3,
    thumb: OrevMain,
  },
];

const WoodSection = ({ lang }) => {
  return (
    <section
      id="дрво"
      className="px-4 py-20 md:py-40 bg-lightBg dark:bg-darkBg text-textLight dark:text-textDark transition-colors duration-500"
    >
      {/* Top overview cards */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold font-serif mb-8">
          {lang === "mk" ? "Типови на дрво" : "Wood types"}
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          {woods.map((wood, i) => (
            <motion.a
              key={wood.id}
              href={`#${wood.id}-section`}
              className="flex flex-col items-center rounded-lg overflow-hidden shadow-md hover:scale-105 transform transition-transform duration-300 w-full sm:max-w-sm md:max-w-xs mx-auto"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={wood.thumb}
                alt={wood.name}
                className="w-full h-60 sm:h-64 md:h-72 lg:h-80 object-cover rounded-lg shadow-lg"
              />
              <span className="p-2 font-serif font-semibold text-lg md:text-xl text-center">
                {lang === "mk" ? wood.name : wood.enName}
              </span>
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Detailed sections */}
<div className="space-y-16">
  {woods.map((wood) => (
    <div
      key={wood.id}
      className="flex flex-col items-center space-y-4 md:space-y-6"
    >
      {/* Title + Text */}
      <div className="w-full md:w-2/3 text-center">
        <h3
          id={`${wood.id}-section`} // 🔑 Move the id here
          className="text-2xl md:text-3xl font-serif font-semibold mb-2 scroll-mt-32 md:scroll-mt-40"
        >
          {lang === "mk" ? wood.name : wood.enName}
        </h3>
        <p className="text-base md:text-lg">
          {lang === "mk" ? wood.description.mk : wood.description.en}
        </p>
      </div>

      {/* Single Image */}
      <div className="w-full flex justify-center">
        <img
          src={wood.image}
          alt={wood.name}
          className="w-full sm:w-11/12 md:w-2/3 h-64 md:h-80 object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  ))}
</div>

    </section>
  );
};

export default WoodSection;
