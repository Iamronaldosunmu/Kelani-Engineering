import { useEffect, useRef } from "react";
import StatisticCard from "../components/StatisticCard";
import "../styles/about-company.css";
import { motion, useScroll, useTransform } from "framer-motion";
import useScrollPosition from "../hooks/useScrollPosition";

const AboutCompany = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const sectionDecimalScroll = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);

  return (
    <motion.section
      ref={container}
      // initial={{ opacity: 0.5, scale: 0.8 }}
      animate={{
        opacity: sectionDecimalScroll.get() > 0 ? 1 : 0,
        scale: sectionDecimalScroll.get() > 0 ? 1 : 0.9,
        y: sectionDecimalScroll.get() > 0 ? 0 : 50,
        transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] },
      }}
      className="statistics pt-[40px] lg:pt-[96px] page-container"
    >
      <figure className="overflow-hidden rounded-[10px]">
        <motion.img
          style={{ scale }}
          src="/assets/images/about-company.png"
          loading="lazy"
          id="w-node-_5d22fc73-eda1-0598-2d4b-c941630b3825-3378c76e"
          alt=""
          className=" statistics-image lg:max-h-[609px] xl:max-h-[609px]"
        />
      </figure>
      <div
        id="w-node-_6779c508-7cdc-c836-8a25-982507e523f5-3378c76e"
        className="statistics-text-and-figures"
      >
        <div className="statistics-text">
          <p
            id="w-node-_03c4cf8f-14b2-c4b7-c070-5ac51836c5fd-3378c76e"
            className="paragraph-5 text-left mb-[23px] lg:mb-[32px]"
          >
            WE PROVIDE SOLUTIONS
          </p>
          <p className="paragraph-6 text-left">
            Empowering businesses with tailored{" "}
            <span className="statistics-colored-text">solutions</span> that
            drive <span className="statistics-colored-text">success</span>. Our
            commitment is your{" "}
            <span className="statistics-colored-text">
              competitive advantage
            </span>
            , ensuring a future shaped by seamless solutions and{" "}
            <span className="statistics-colored-text">sustained growth.</span>
          </p>
        </div>
        <div className="div-block-5">
          <StatisticCard index={1} />
          <StatisticCard index={2} />
          <StatisticCard index={3} />
        </div>
      </div>
    </motion.section>
  );
};

export default AboutCompany;
