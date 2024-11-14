// ProjectWell.tsx
import React from "react";

interface ProjectLink {
  projectname: string;
  description: string;
  link: string;
  demo: string;
}

interface ProjectWellProps {
  content: ProjectLink[];
}

const ProjectWell: React.FC<ProjectWellProps> = ({ content }) => {
  return (
    <div className="lg:w-[800px] md:w-[600px] w-[350px]  flex flex-col  border rounded-lg lg:p-12 md:p-10  p-2">
      <h1 className="text-center md:text-3xl lg:text-4xl">Github and Demo Links</h1>
      {content.map((link, index) => (
        <div
          key={index}
        >
          <div className="flex flex-row justify-between  md:mt-10 mt-6">
            
            <a
              href={link.demo}
              
              target="_blank"
              className="lg:text-3xl md:text-2xl text-xl hover:text-[#CCCCCC]"
            >
              {link.projectname}
            </a>
            <div className="flex flex-row justify-between">
            <a
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              // className="lg:text-xl md:text-lg text-sm px-5 hover:text-[#CCCCCC] hover:underline "
              className="lg:text-xl md:text-lg text-sm hover:text-[#CCCCCC] hover:underline "
            >
              github
            </a>
            <a
              href={link.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="lg:text-xl md:text-lg text-sm px-5 hover:text-[#CCCCCC] hover:underline "
            >
              demo
            </a>
            </div>
          </div>
          <p className="md:text-xl text-md">{link.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectWell;
