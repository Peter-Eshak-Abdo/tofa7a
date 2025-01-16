"use client";

import Footer from "@/components/Footer";
import { Container } from "react-bootstrap";

export default function Home() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Container className="mt-5">
        <h1>Home Page</h1>
        <p>Portfolio</p>
      </Container>
      <Footer />
    </div>
  );
}






