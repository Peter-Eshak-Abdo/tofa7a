import Head from "next/head";
import Container from "react-bootstrap/Container";
// import MyNavbar from "../../components/Navigationbar";
import Footer from "../../components/Footer";

function About() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Head>
        <title>About - My Portfolio</title>
      </Head>
      <Container className="mt-5">
        <h1>About Me</h1>
        <p>Learn more about me and my background.</p>
      </Container>
      <Footer />
    </div>
  );
}

export default About;

