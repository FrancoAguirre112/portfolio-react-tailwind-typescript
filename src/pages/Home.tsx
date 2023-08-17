import { useTranslation } from "react-i18next";

import icon from "../assets/icons/icon.webp";
import brush from "../assets/icons/brush.svg";
import programming from "../assets/icons/programming.svg";
import character from "../assets/images/character.webp";
import {
  HTML,
  CSS,
  JS,
  TS,
  GIT,
  REACT,
  ANGULAR,
  TAILWIND,
  BOOTSTRAP,
} from "../components/Languages";
import {
  FIGMA,
  PHOTOSHOP,
  ILLUSTRATOR,
  PREMIERE,
  AFTER,
} from "../components/Tools";

import commerce from "../assets/images/projects/commerce.webp";
import movieSearch from "../assets/images/projects/movieSearch.webp";
import Project from "../components/Project";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import portfolio from "../assets/images/projects/portfolio.webp";

const Home = () => {
  const [t, i18n] = useTranslation("global");

  const [langText, setlangText] = useState(t("home.hover-icons"));
  const [designText, setDesignText] = useState(t("home.hover-icons"));

  useEffect(() => {
    setlangText(t("home.hover-icons"));
    setDesignText(t("home.hover-icons"));
  }, [i18n.language]);

  const languages = [
    { el: <HTML />, text: "HTML" },
    { el: <CSS />, text: "CSS" },
    { el: <JS />, text: "JavaScript" },
    { el: <TS />, text: "TypeScript" },
    { el: <GIT />, text: "Git" },
    { el: <REACT />, text: "React" },
    { el: <ANGULAR />, text: "Angular" },
    { el: <TAILWIND />, text: "Tailwind CSS" },
    { el: <BOOTSTRAP />, text: "Bootstrap" },
  ];

  const designTools = [
    { el: <FIGMA />, text: "Figma" },
    { el: <PHOTOSHOP />, text: "Photoshop" },
    { el: <ILLUSTRATOR />, text: "Illustrator" },
    { el: <PREMIERE />, text: "Premiere Pro" },
    { el: <AFTER />, text: "After Effects" },
  ];

  return (
    <main className="flex flex-col gap-12 text-center">
      {/* Navbar*/}
      <nav className="flex justify-between items-center my-6 mx-4 md:mx-14">
        <a href="/">
          <img className="max-w-[47px]" src={icon} alt={t("home.icon")} />
        </a>
        <div className="flex gap-8 items-center">
          <button
            onClick={() =>
              i18n.changeLanguage(i18n.language === "en" ? "es" : "en")
            }
            className="text-main text-xl flex gap-1 hover:text-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
              <path d="M3.6 9h16.8"></path>
              <path d="M3.6 15h16.8"></path>
              <path d="M11.5 3a17 17 0 0 0 0 18"></path>
              <path d="M12.5 3a17 17 0 0 1 0 18"></path>
            </svg>
            {i18n.language === "en" ? "EN" : "ES"}
          </button>
          <a
            className="flex gap-1 items-center text-xl p-2 px-6 border-[2px] font-semibold border-main text-main rounded-full hover:bg-main hover:text-white transition-colors"
            href="#contact"
          >
            {t("home.contact-me")}
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header className="flex flex-col items-center gap-2 mx-4 md:mx-24">
        <h1 className="text-5xl font-bold">{t("home.hero-title")}</h1>
        <h3 className="text-3xl font-semibold">{t("home.hero-subtitle")}</h3>
        <img className="max-w-[200px] mt-6" src={character} alt="" />
      </header>

      {/* Presentation */}
      <section className="bg-main text-white">
        <div className="flex flex-col items-center text-justify gap-2 my-24 md:my-36 mx-4 md:mx-36 lg:mx-72">
          <h2 className="text-3xl font-bold">{t("home.presentation")}</h2>
          <p className="text-lg">{t("home.presentation-description")}</p>
        </div>
      </section>

      {/* Frontend & Designer Sections */}
      <section className="text-[#141C3A] grid lg:grid-cols-2 justify-center gap-1 mt-[-8rem] md:mt-[-10rem] mx-4 md:mx-14">
        {/* Frontend */}
        <div className="bg-white shadow-lg rounded-lg flex flex-col items-center gap-2 px-16 py-8">
          <div className="p-3 bg-main rounded-full">
            <img src={programming} alt={t("home.frontend-title")} />
          </div>
          <h2 className="text-3xl font-bold">{t("home.frontend-title")}</h2>
          <h3 className="text-xl ">{t("home.frontend-description")}</h3>
          <h3 className="mt-4 text-xl font-semibold text-main">
            {t("home.frontend-languages-title")}
          </h3>
          <div className="flex justify-center flex-wrap gap-1">
            {languages?.map((item) => {
              return (
                <div
                  key={item.text}
                  className="flex flex-col items-center"
                  onMouseEnter={() => {
                    setlangText(item.text);
                  }}
                  onMouseLeave={() => {
                    setlangText(t("home.hover-icons"));
                  }}
                >
                  {item.el}
                </div>
              );
            })}
          </div>
          <h3 className="text-xl font-semibold text-main mt-2">{langText}</h3>
        </div>

        {/* Designer */}
        <div className="bg-white shadow-lg rounded-lg flex flex-col items-center gap-2 px-16 py-8">
          <div className="p-3 bg-main rounded-full">
            <img src={brush} alt={t("home.designer-title")} />
          </div>
          <h2 className="text-3xl font-bold">{t("home.designer-title")}</h2>
          <h3 className="text-xl ">{t("home.designer-description")}</h3>
          <h3 className="mt-4 text-xl font-semibold text-main">
            {t("home.designer-tools-title")}
          </h3>
          <div className="flex justify-center flex-wrap gap-1">
            {designTools?.map((item) => {
              return (
                <div
                  key={item.text}
                  className="flex flex-col items-center"
                  onMouseEnter={() => {
                    setDesignText(item.text);
                  }}
                  onMouseLeave={() => {
                    setDesignText(t("home.hover-icons"));
                  }}
                >
                  {item.el}
                </div>
              );
            })}
          </div>
          <h3 className="text-xl font-semibold text-main mt-2">{designText}</h3>
        </div>
      </section>

      {/* Recent Work Section */}
      <section className="flex flex-col items-center gap-6 mx-4 md:mx-24 mt-5 md:mt-10">
        <h2 className="text-3xl font-bold">{t("home.recent-work-title")}</h2>
        <ul className="text-white flex flex-col md:flex-row gap-2">
          <Project
            img={movieSearch}
            description={t("home.recent-work-movie")}
            button={t("home.recent-work-learnMore")}
            link="https://github.com/FrancoAguirre112/movie-search-react-tailwind-js"
          />
          <Project
            img={commerce}
            description={t("home.recent-work-commerce")}
            button={t("home.recent-work-learnMore")}
            link="https://github.com/FrancoAguirre112/ecommerce-react-tailwind-typescript"
          />
          <Project
            img={portfolio}
            description={t("home.recent-work-fullportfolio")}
            button={t("home.recent-work-learnMore")}
            link="https://github.com/FrancoAguirre112/portfolio-FrontEnd"
          />
        </ul>
        <a
          className="flex gap-1 items-center text-xl p-2 px-6 border-[2px] font-semibold border-main text-main rounded-full hover:bg-main hover:text-white transition-colors"
          href="https://github.com/FrancoAguirre112"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("home.recent-work-more")}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
            <path d="M11 13l9 -9"></path>
            <path d="M15 4h5v5"></path>
          </svg>
        </a>
      </section>

      {/* Contact & Footer */}
      <div className="mt-5 md:mt-10">
        <section
          id="contact"
          className="relative mb-[-8rem] mx-4 md:mx-14 z-10"
        >
          <ContactForm />
        </section>

        <Footer />
      </div>
    </main>
  );
};

export default Home;
