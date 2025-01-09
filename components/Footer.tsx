import Container from "react-bootstrap/Container";

function Footer() {
  return (
    <footer className="bg-light text-center py-3 mt-auto">
      <Container>
        <p>&copy; {new Date().getFullYear()} My Portfolio</p>
      </Container>
    </footer>
  );
}

export default Footer;
