import React from "react";
import ProjectTopic from "./ProjectTopic";

// Define the type for project topic
interface ProjectTopicData {
  id: number;
  title: string;
  projectlinks: { projectname: string; description: string; link: string; demo: string }[];
}

interface ProjectTopicsProps {
  topics: ProjectTopicData[];
  onTopicClick: (topic: ProjectTopicData) => void;
}

const ProjectTopics: React.FC<ProjectTopicsProps> = ({
  topics,
  onTopicClick,
}) => {
  return (
    <div className="lg:w-[800px] md:w-[600px] w-[400px] mt-16 ">
      <div className="lg:text-4xl md:text-3xl text-2xl text-center m-10">Projects</div>
      <div className="flex md:flex-row flex-col items-center lg:gap-10 gap-4 ">
      {topics.map((topic) => (
        <ProjectTopic
          key={topic.id}
          title={topic.title}
          onClick={() => onTopicClick(topic)}
        />
      ))}
      </div>
    </div>
  );
};

export default ProjectTopics;
