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
    <li className="rounded-lg z-0 overflow-hidden">
      <div
        className="rounded-lg h-[14rem] max-w-[18rem] bg-center bg-cover z-0 "
        style={{ backgroundImage: `url("${img}")` }}
      >
        <div className="bg-main flex flex-col justify-end items-center text-center gap-6 p-10 rounded-lg h-[14rem] opacity-90 hover:opacity-100 transition-opacity">
          <p className="text-lg font-semibold">{description}</p>
          <a
            className="flex gap-1 items-center p-2 px-6 border-[2px] font-semibold border-white rounded-full hover:bg-white hover:text-main transition-colors"
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
