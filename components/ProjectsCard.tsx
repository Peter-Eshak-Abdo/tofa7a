import Image from "next/image";
import { JSX } from "react";


interface ProjectsCardProps {
  title: string;
  text: string;
  ImageSrc: string;
  link: string;
}

function ProjectsCard({ title, text, ImageSrc, link }: ProjectsCardProps): JSX.Element {
  return (
    <div className="card">
      <Image src={ImageSrc} className="card-img-top" alt={title} />

      <div className="card-body">
        <h5 className="card-title">{title}</h5>

        <p className="card-text">{text}</p>

        <a href={link} className="btn btn-primary">
          Go to project
        </a>
      </div>
    </div>
  );
}

export default ProjectsCard;

