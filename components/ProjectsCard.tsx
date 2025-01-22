import { JSX } from "react";


interface ProjectsCardProps {
  title: string;
  text: string;
  linkCode: string;
  linkHosting: string;
}

function ProjectsCard({ title, text, linkCode, linkHosting }: ProjectsCardProps): JSX.Element {
  return (
    <div className="card">
      {/* <Image src={ImageSrc} className="card-img-top" alt={title} /> */}

      <div className="card-body">
        <h5 className="card-title">{title}</h5>

        <p className="card-text">{text}</p>

        <a href={linkCode} className="btn btn-primary">
          Go to project Code
        </a>
        <a href={linkHosting} className="btn btn-primary" target="_blank" rel="noreferrer">
          Go to project Hosting
        </a>
      </div>
    </div>
  );
}

export default ProjectsCard;





