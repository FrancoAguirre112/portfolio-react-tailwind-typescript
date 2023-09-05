import { Linkedin, Github, Email } from "./Socials";

const Footer = () => {
  return (
    <footer className="flex h-[20rem] items-center justify-center gap-1 bg-main">
      <Linkedin />
      <Github />
      <Email />
    </footer>
  );
};

export default Footer;
