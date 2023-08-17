import { Linkedin, Github, Email } from "./Socials";

const Footer = () => {
  return (
    <footer className="bg-main h-[20rem] p-15 flex justify-center items-center gap-1">
      <Linkedin />
      <Github />
      <Email />
    </footer>
  );
};

export default Footer;
