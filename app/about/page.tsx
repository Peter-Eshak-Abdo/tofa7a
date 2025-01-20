import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About-Portfolio", // Overrides the global title template
};
function About() {
  return (
    <>
      <div className="container d-flex flex-row justify-content-between">
        <div>
          <p>Name: Peter Eshak Abdo</p>
          <p>Age: 19 Years</p>
          <p>Address: Algam3yat st-Alabrag</p>
          <p>Studing level: Second Year at Facaluty of Computer and information Suze Canal</p>
          <p>Current Job: Trainner at CopyCat Center</p>
          <p>relagin: Christan Arthothikcy</p>
          <p>Height: 183 CM</p>
          <p>Weight: 63 Kg</p>
          <p>#Contacts-Me</p>
          <p>
            Phone: <a href="tel:+01221331602">01221331602</a> || <a href="tel:+01202224608">01202224608</a>
          </p>
          <p>
            Email: <a href="mailto:petereshak11gmail.com">petereshak11gmail.com</a>
          </p>
          <p>
            GitHub: <a href="http://">Peter-Eshak-Abdo</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default About;

