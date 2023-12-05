import { useTranslation } from "react-i18next";

import icon from "../public/assets/icons/icon.webp"
import brush from "../public/assets/icons/brush.svg";
import programming from "../public/assets/icons/programming.svg";
import character from "../public/assets/images/character.webp";
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

import commerce from "../public/assets/images/projects/commerce.webp";
import movieSearch from "../public/assets/images/projects/movieSearch.webp";
import Project from "../components/Project";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import portfolio from "../public/assets/images/projects/portfolio.webp";

const Home = () => {
  const [t, i18n] = useTranslation("global");

  const [langText, setlangText] = useState(t("home.hover-icons"));
  const [designText, setDesignText] = useState(t("home.hover-icons"));

  useEffect(() => {
    setlangText(t("home.hover-icons"));
    setDesignText(t("home.hover-icons"));
  }, [i18n.language, t]);

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
      <nav className="mx-4 my-6 flex items-center justify-between md:mx-14">
        <a href="/">
          <img className="max-w-[47px]" src={icon} alt={t("home.icon")} />
        </a>
        <div className="flex items-center gap-8">
          <button
            onClick={() =>
              i18n.changeLanguage(i18n.language === "en" ? "es" : "en")
            }
            className="flex gap-1 text-xl text-main hover:text-black"
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
            className="flex items-center gap-1 rounded-full border-[2px] border-main p-2 px-6 text-xl font-semibold text-main transition-colors hover:bg-main hover:text-white"
            href="#contact"
          >
            {t("home.contact-me")}
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header className="mx-4 flex flex-col items-center gap-2 md:mx-24">
        <h1 className="text-5xl font-bold">{t("home.hero-title")}</h1>
        <h3 className="text-3xl font-semibold">{t("home.hero-subtitle")}</h3>
        <img className="mt-6 max-w-[200px]" src={character} alt="" />
      </header>

      {/* Presentation */}
      <section className="bg-main text-white">
        <div className="mx-4 my-24 flex flex-col items-center gap-2 text-justify md:m-36 lg:mx-72">
          <h2 className="text-3xl font-bold">{t("home.presentation")}</h2>
          <p className="text-lg">{t("home.presentation-description")}</p>
        </div>
      </section>

      {/* Frontend & Designer Sections */}
      <section className="mx-4 mt-[-8rem] grid justify-center gap-1 text-[#141C3A] md:mx-14 md:mt-[-10rem] lg:grid-cols-2">
        {/* Frontend */}
        <div className="flex flex-col items-center gap-2 rounded-lg bg-white px-16 py-8 shadow-lg">
          <div className="rounded-full bg-main p-3">
            <img src={programming} alt={t("home.frontend-title")} />
          </div>
          <h2 className="text-3xl font-bold">{t("home.frontend-title")}</h2>
          <h3 className="text-xl ">{t("home.frontend-description")}</h3>
          <h3 className="mt-4 text-xl font-semibold text-main">
            {t("home.frontend-languages-title")}
          </h3>
          <div className="flex flex-wrap justify-center gap-1">
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
          <h3 className="mt-2 text-xl font-semibold text-main">{langText}</h3>
        </div>

        {/* Designer */}
        <div className="flex flex-col items-center gap-2 rounded-lg bg-white px-16 py-8 shadow-lg">
          <div className="rounded-full bg-main p-3">
            <img src={brush} alt={t("home.designer-title")} />
          </div>
          <h2 className="text-3xl font-bold">{t("home.designer-title")}</h2>
          <h3 className="text-xl ">{t("home.designer-description")}</h3>
          <h3 className="mt-4 text-xl font-semibold text-main">
            {t("home.designer-tools-title")}
          </h3>
          <div className="flex flex-wrap justify-center gap-1">
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
          <h3 className="mt-2 text-xl font-semibold text-main">{designText}</h3>
        </div>
      </section>

      {/* Recent Work Section */}
      <section className="mx-4 mt-5 flex flex-col items-center gap-6 md:mx-24 md:mt-10">
        <h2 className="text-3xl font-bold">{t("home.recent-work-title")}</h2>
        <ul className="flex flex-col gap-2 text-white md:flex-row">
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
            link="https://github.com/FrancoAguirre112/adaptable-ecommerce-react-tailwind-typescript-axios-yup-zod-zustand"
          />
          <Project
            img={portfolio}
            description={t("home.recent-work-fullportfolio")}
            button={t("home.recent-work-learnMore")}
            link="https://github.com/FrancoAguirre112/portfolio-FrontEnd"
          />
        </ul>
        <a
          className="flex items-center gap-1 rounded-full border-[2px] border-main p-2 px-6 text-xl font-semibold text-main transition-colors hover:bg-main hover:text-white"
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
          className="relative z-10 mx-4 mb-[-8rem] md:mx-14"
        >
          <ContactForm />
        </section>

        <Footer />
      </div>
    </main>
  );
};

export default Home;
