const projects = [
  {
    title: "Abona-Faltaus",
    description: "The REAL project Nextjs with Firebase for Google Auth and Firestore database , Vercel for Deployment with free domin and hosting, Tailwind with Shadcn for modern UI Style, TypeScript, Node for back-end , PWA for mobile and Desktop app.",
    src: "https://github.com/Peter-Eshak-Abdo/abona-faltaus",
    link: "https://abona-faltaus.vercel.app/",
  },
  {
    title: "elnosor-members",
    description: "Had to be a REAL Attendenc Church (تسجيل حضور المخدومين في اجتماع الكنيسة)System with Nextjs and Firebase for Google Auth and Firestore database , Vercel for Deployment with free domin and hosting, Tailwind with Shadcn for modern UI Style, TypeScript, Node for back-end and api for the tow accsess point (Admin الخادم and Members المخدوم), PWA for mobile and Desktop app, Onesignal for notification with github action to run corn to puch schuduel notification every 12 menite.",
    src: "https://github.com/Peter-Eshak-Abdo/Netlab-Course",
    link: "https://peter-eshak-abdo.github.io/Netlab-Course",
  },
  {
    title: "Netlab-Course",
    description: "That was offline course",
    src: "https://github.com/Peter-Eshak-Abdo/Netlab-Course",
    link: "https://peter-eshak-abdo.github.io/Netlab-Course",
  },
  {
    title: "NEXT",
    description: "Clone Next generation page",
    src: "https://github.com/Peter-Eshak-Abdo/websiteTest/",
    link: "https://website-frond-end.web.app/",
  },
  {
    title: "Random Product",
    description: "Every Reload page that generate a random number of product",
    src: "https://github.com/Peter-Eshak-Abdo/websiteTest/blob/lifeline/public/js/array.js",
    link: "https://website-frond-end.web.app/site/array.html",
  },
  {
    title: "Lifeline",
    description: "Clone Lifeline page",
    src: "https://github.com/Peter-Eshak-Abdo/websiteTest/blob/lifeline/",
    link: "https://website-frond-end.web.app/site/lifeline.html",
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
  return (
    <div className="d-flex flex-row justify-content-evenly align-self-center align-content-around flex-wrap" id="projects">
      {projects.map((project, index) => (
        <div className="card m-4" style={{ width: "19rem" }} key={`project-container-${index}`}>
          <div className="card-body" key={`project-${index}`}>
            <h5 className="card-title text-center fw-bold fs-3 pb-3">{project.title}</h5>
            <p className="card-text fs-5">{project.description}</p>
            <a
              href={project.src}
              className={project.src === "" ? "btn btn-primary disabled mx-lg-3 mx-sm-2" : "btn btn-outline-primary mx-lg-3 mx-sm-2"}
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code
            </a>
            <a
              href={project.link}
              className={project.link === "" ? "btn btn-info disabled" : "btn btn-outline-info"}
              target="_blank"
              rel="noopener noreferrer"
            >
              Website Link
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsCard;
