import Head from "next/head";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MyNavbar from "../components/Navigationbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Head>
        <title>Home - My Portfolio</title>
      </Head>
      <MyNavbar />
      <Container className="mt-5">
        <Row>
          <Col md={8} className="mx-auto text-center">
            <h1>Welcome to My Portfolio</h1>
            <p>This is my personal portfolio website.</p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

