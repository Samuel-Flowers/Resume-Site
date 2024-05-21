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
    <div className="lg:w-[800px] md:w-[600px] w-[300px] border rounded-lg flex flex-col   lg:p-12 md:p-10 p-5 ">
      <h1 className="text-center md:text-3xl lg:text-4xl">Github Links</h1>
      {content.map((link, index) => (
        <div
          key={index}
        >
          <div className="flex flex-row justify-between  md:mt-10 mt-6">
            
            <a
              href={link.link}
              
              target="_blank"
              rel="noopener noreferrer"
              className="lg:text-3xl md:text-2xl text-xl hover:text-[#CCCCCC]"
            >
              {link.projectname}
            </a>
            {/* <a
              href={link.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="lg:text-xl md:text-lg text-md px-5 hover:text-[#CCCCCC] hover:underline "
            >
              demo
            </a> */}
          </div>
          <p className="md:text-xl">{link.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectWell;
