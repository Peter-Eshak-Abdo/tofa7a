import Head from "next/head";
import Container from "react-bootstrap/Container";
import MyNavbar from "../../components/Navigationbar";
import Footer from "../../components/Footer";

function Projects() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Head>
        <title>Projects - My Portfolio</title>
      </Head>
      <MyNavbar />
      <Container className="mt-5">
        <h1>My Projects</h1>
        <p>A showcase of my recent work.</p>
      </Container>
      <Footer />
    </div>
  );
}

export default Projects;

