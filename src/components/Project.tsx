import React from "react";

type ProjectProps = {
  img: string;
  description: string;
  button: string;
  link: string;
};

const Project: React.FC<ProjectProps> = ({
  img,
  description,
  button,
  link,
}) => {
  return (
    <li className="z-0 overflow-hidden rounded-lg">
      <div
        className="z-0 h-[14rem] max-w-[18rem] rounded-lg bg-cover bg-center "
        style={{ backgroundImage: `url("${img}")` }}
      >
        <div className="flex h-[14rem] flex-col items-center justify-end gap-6 rounded-lg bg-main p-10 text-center opacity-90 transition-opacity hover:opacity-100">
          <p className=" text-lg font-semibold">{description}</p>
          <a
            className="flex items-center gap-1 rounded-full border-[2px] border-white p-2 px-6 font-semibold transition-colors hover:bg-white hover:text-main"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {button}
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
        </div>
      </div>
    </li>
  );
};

export default Project;
