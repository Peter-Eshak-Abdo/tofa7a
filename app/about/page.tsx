// import Container from "react-bootstrap/Container";
import MyNavbar from "@/components/Navigationbar";
import Footer from "../../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About-Portfolio", // Overrides the global title template
};
function About() {
  return (
    <>
    <MyNavbar />
    <div className="d-flex flex-column min-vh-100">
      <div className="mt-5">
        <h1>About Me</h1>
        <p>Learn more about me and my background.</p>
      </div>
      <Footer />
    </div>
    </>
  );
}

export default About;


