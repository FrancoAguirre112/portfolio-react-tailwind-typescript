import {
  SiAdobeaftereffects,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiFigma,
} from "react-icons/si";

export const FIGMA = () => {
  return (
    <div className="rounded-lg bg-main p-2 text-white">
      <SiFigma />
    </div>
  );
};

export const PHOTOSHOP = () => {
  return (
    <div className="rounded-lg bg-main p-2 text-white">
      <SiAdobephotoshop />
    </div>
  );
};

export const ILLUSTRATOR = () => {
  return (
    <div className="rounded-lg bg-main p-2 text-white">
      <SiAdobeillustrator />
    </div>
  );
};

export const PREMIERE = () => {
  return (
    <div className="rounded-lg bg-main p-2 text-white">
      <SiAdobepremierepro />
    </div>
  );
};

export const AFTER = () => {
  return (
    <div className="rounded-lg bg-main p-2 text-white">
      <SiAdobeaftereffects />
    </div>
  );
};
