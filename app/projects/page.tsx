import Container from "react-bootstrap/Container";
import Footer from "../../components/Footer";
// import Link from "next/link";

function Projects() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Container className="mt-5">
        <h1>My Projects</h1>
        <p>A showcase of my recent work.</p>
        {/* <Link href="/">Home (Next.js)</Link> */}
      </Container>
      <Footer />
    </div>
  );
}

export default Projects;



