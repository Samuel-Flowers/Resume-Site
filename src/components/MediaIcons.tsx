import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"; /*faFile for resume*/

const MediaIcons: React.FC = () => {
  return (
    <div className="flex flex-col absolute md:gap-y-5 gap-y-2 mt-5 md:w-48 w-[150px] z-10 border p-5 rounded-tr-lg rounded-bl-lg rounded-br-lg bg-[#393F40]">
      <span className="text-2xl text-white hover:text-[#CCCCCC] items-center grid grid-cols-2">
        <FontAwesomeIcon icon={faGithub} />
        <a
          href="https://github.com/sflowers51"
          className="md:text-sm text-xs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </span>
      <span className="md:text-2xl text-lg text-white items-center grid grid-cols-2 hover:text-[#CCCCCC]">
        <FontAwesomeIcon icon={faEnvelope} />
        <a
          href="mailto:samf3653@gmail.com"
          title="samf3653@gmail.com"
          className="md:text-sm text-xs"
        >
          Gmail
        </a>
      </span>
      {/* <span className="md:text-2xl text-lg text-white items-center grid grid-cols-2">
        <FontAwesomeIcon icon={faPhone} />
        <p className="md:text-sm text-xs">615-670-7342</p>
      </span> */}
      <span className="md:text-2xl text-lg text-white items-center grid grid-cols-2 hover:text-[#CCCCCC]">
        <FontAwesomeIcon icon={faLinkedin} />
        <a
          href="https://linkedin.com/in/samuel-flowers-96ba72281"
          className="md:text-sm text-xs"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </span>
      {/* <span className="md:text-2xl text-lg text-white items-center grid grid-cols-2 hover:text-[#CCCCCC]">
        <FontAwesomeIcon icon={faFile} />
        <a
          href="../assets/img/Samuel-Flowers-Resume.pdf"
          className="md:text-sm text-xs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </span> */}
      <span className="md:text-2xl text-lg text-white items-center grid grid-cols-2 hover:text-[#CCCCCC]">
        <FontAwesomeIcon icon={faGithub} />
        <a
          href="https://github.com/Samuel-Flowers/Resume-Site"
          className="md:text-sm text-xs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume Site Repo
        </a>
      </span>
    </div>
  );
};

export default MediaIcons;
