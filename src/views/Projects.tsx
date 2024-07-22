import React, { useState } from "react";
import Nav from "../components/Nav";
import ProjectTopics from "../components/ProjectTopics";
import ProjectWell from "../components/ProjectWell";

// Define the type for project topic
interface ProjectTopicData {
  id: number;
  title: string;
  projectlinks: {
    projectname: string;
    description: string;
    link: string;
    demo: string;
  }[];
}

const projectTopicsData: ProjectTopicData[] = [
  {
    id: 1,
    title: "Web/Mobile App Development",
    projectlinks: [
      {
        projectname: "Async Audio Web App",
        description: "Simple MP3 playing app.",
        link: "https://github.com/Samuel-Flowers/CIS367-FA23-AsyncAudio.git",
        demo: "https://verdant-entremet-0e1c13.netlify.app/",
      },
      {
        projectname: "FHU Faculty Trading Cards",
        description: "Webpage carousel of FHU faculty trading cards.",
        link: "https://github.com/Samuel-Flowers/CIS367-FA23-faculty-trading-cards.git",
        demo: "https://bright-begonia-3e06c6.netlify.app/",
      },
      {
        projectname: "BotsCryOut Backend",
        description:
          "Simply made backend for an app concept called 'BotsCryOut.'",
        link: "https://github.com/sflowers51/CIS467-SP24-lab1.git",
        demo: "https://github.com/sflowers51/CIS467-SP24-lab1.git",
      },
      {
        projectname: "Facade App",
        description:
          "Mobile app project, using .NET MAUI, which is like Wordle, but with hexcodes.",
        link: "https://github.com/sflowers51/CIS388-FA23-facade.git",
        demo: "https://github.com/sflowers51/CIS388-FA23-facade.git",
      },
      {
        projectname: "SunnySide Landing Page",
        description:
          "Mock landing page for fictional company SunnySide. Project for web development class and challenge from Frontend Mentor.",
        link: "https://github.com/sflowers51/CIS367-FA23-lab1.git",
        demo: "https://mellow-babka-88731d.netlify.app/",
      },
    ],
  },
  {
    id: 2,
    title: "Team Projects",
    projectlinks: [
      {
        projectname: "MOGI",
        description: "Mobile app team project based on the game priorities.",
        link: "https://github.com/FHU/Priorities.git",
        demo: "src/assets/img/MOGI.pdf",
      },
      {
        projectname: "BeKindly.Today Backend Team",
        description:
          "The backend for a DevOps class project which was a web application based on BeReal.",
        link: "https://github.com/FHU/BeKindlyTodayBackend.git",
        demo: "https://bekindly.today/home",
      },
      {
        projectname: "Scriptured Prayer",
        description:
          "FHU 2024 Computer Science Capstone web application built to improve prayer habits.",
        link: "https://github.com/PrayTeam/scriptured-prayer.git",
        demo: "https://github.com/PrayTeam/scriptured-prayer.git",
      },
    ],
  },
  {
    id: 3,
    title: "Machine Learning",
    projectlinks: [
      {
        projectname: "Fake News Detector",
        description:
          "Machine learning project that detects whether a news article is fake.",
        link: "https://github.com/gavboler03/MLApplication.git",
        demo: "https://fakenewsarticleimage-fakenewsarticleimage.onrender.com",
      },
    ],
  },
];

const Projects: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<ProjectTopicData | null>(
    null
  );
  const [showProjectWell, setShowProjectWell] = useState<boolean>(false);

  const handleTopicClick = (topic: ProjectTopicData) => {
    if (selectedTopic === topic) {
      setShowProjectWell((prevState) => !prevState); // Toggle project well visibility if the same topic is clicked again
    } else {
      setSelectedTopic(topic);
      setShowProjectWell(true);
    }
  };

  return (
    <div className="pb-10 text-white font-poppins flex flex-col items-center gap-10">
      <Nav />
      <ProjectTopics
        topics={projectTopicsData}
        onTopicClick={handleTopicClick}
      />
      {showProjectWell && selectedTopic && (
        <ProjectWell content={selectedTopic.projectlinks} />
      )}
    </div>
  );
};

export default Projects;
