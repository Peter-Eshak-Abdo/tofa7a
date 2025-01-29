const projects = [
  {
    title: "Netlab-Course",
    description: "That was offline course",
    src: "https://github.com/Peter-Eshak-Abdo/Netlab-Course",
    link: "https://peter-eshak-abdo.github.io/Netlab-Course",
  },
  {
    title: "MoveOn",
    description: "Collage Section Project With Team of 3 girls in second Year and fisrt Semester",
    src: "https://github.com/Peter-Eshak-Abdo/MoveOn",
    link: "https://moveon-7ee89.web.app",
  },
  {
    title: "Section3_Apple",
    description: "Collage Section Project With Team of 4 girls in First Year and first Semester",
    src: "https://github.com/Peter-Eshak-Abdo/Section3_Apple",
    link: "https://section3-apple.web.app",
  },
  {
    title: "Abona Faltaus",
    description: "Personal Project for Christian media without React or Next",
    src: "https://github.com/Peter-Eshak-Abdo/abona-faltaus",
    link: "https://abona-faltaus.web.app/",
  },
  {
    title: "udemy_shop",
    description: "Flutter Shop project for Udemy course",
    src: "https://github.com/PeterEshak/udemy_shop",
    link: "",
  },
  {
    title: "Curricula",
    description: "Flutter Personal Project for Primary Curricula",
    src: "https://github.com/PeterEshak/Curricula",
    link: "",
  },
  {
    title: "CV",
    description: "Personal Project for First CV",
    src: "",
    link: "https://peter-eshak.blogspot.com/2020/10/blog-post.html",
  },
  {
    title: "Youtube Channel",
    description: "My Youtube Channel",
    src: "",
    link: "https://www.youtube.com/channel/UCdt02aWMr-mlqM2eC8A_brg",
  },
  {
    title: "كورس HTML",
    description: "First Blog",
    src: "",
    link: "https://peter-eshak.blogspot.com/2020/12/html.html",
  },
  {
    title: "كورس Adobe illustrator",
    description: "Second Blog",
    src: "",
    link: "https://peter-eshak.blogspot.com/2020/12/adobe-illustrator-cc-aylastrytvr-css.html",
  },
  {
    title: "Github",
    description: "Github README page",
    src: "https://github.com/Peter-Eshak-Abdo/Peter-Eshak-Abdo",
    link: "https://github.com/Peter-Eshak-Abdo",
  },
];

const ProjectsCard: React.FC = () => {
  return (<div className="d-flex flex-row justify-content-evenly align-self-center align-content-around flex-wrap" id="projects">
    {projects.map((project, index) => (
        <div className="card m-4" style={{ width: "19rem" }} key="projects-container">
        <div className="card-body" key={`project-${index}`}>
          <h5 className="card-title text-center fw-bold fs-3 pb-3">{project.title}</h5>
          <p className="card-text fs-5">{project.description}</p>
          <a href={project.src} className="btn btn-outline-primary mx-lg-3 mx-sm-2" target="_blank" rel="noopener noreferrer">
            Source Code
          </a>
          <a href={project.link} className="btn btn-outline-info" target="_blank" rel="noopener noreferrer">
            Website Link
          </a>
        </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsCard;





