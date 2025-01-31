import type { Metadata } from "next";
// import Image from 'next/image';

export const metadata: Metadata = {
  title: "About-Portfolio", // Overrides the global title template
};
function PersonalData() {
  return (
    <div className="container d-lg-flex flex-row justify-content-between d-sm-block" id="personalData">
      <div className="d-flex flex-column align-content-end my-2 fs-3">
        <p className="my-4">
          <b>Name:</b> Peter Eshak Abdo
        </p>
        <p className="my-4">
          <b>Age:</b> 19 Years
        </p>
        <p className="my-4">
          <b>Address:</b> Algam3yat st-Alabrag
        </p>
        <p className="my-4">
          <b>Studying level:</b> Second Year at Facaluty of Computer and information Suze Canal
        </p>
        <p className="my-4 mb-5">
          <b>Current Job:</b> Trainner at CopyCat Center
        </p>
        {/*  <p className="my-3"><b>Relagin: </b>Christan Arthothikcy</p>
         <p className="my-3"><b>Height:</b> 183 CM</p>
        <p className="my-3"><b>Weight:</b> 64 Kg</p>  */}
        <p className="my-4 mt-5">
          <b>Phone:</b>{" "}
          <a href="tel:01221331602" className="text-decoration-none link-opacity-50-hover">
            01221331602
          </a>{" "}
          ||
          <a href="tel:01202224608" className="text-decoration-none link-opacity-50-hover">
            01202224608
          </a>
        </p>
        <p className="my-4">
          <b>Email:</b>{" "}
          <a href="mailto:petereshak11gmail.com" className="text-decoration-none link-opacity-50-hover">
            petereshak11gmail.com
          </a>
        </p>
        <p className="my-4">
          <b>GitHub:</b>{" "}
          <a href="https://github.com/Peter-Eshak-Abdo" className="text-decoration-none link-opacity-50-hover">
            Peter-Eshak-Abdo
          </a>
        </p>
        <p className="my-4 fs-1 fw-bolder text-primary-emphasis">
          <a className="text-body" href="https://wa.me/message/AOH44Q2TY3H2E1" title="Whatsapp">
            <i className="bi bi-whatsapp text-success">Whatsapp</i>
          </a>
        </p>
      </div>
      <div className="d-flex justify-content-end">
        <img src="./images/pic.jpg" className="rounded img-thumbnail w-100" style={{ maxHeight: "90vh" }} alt="Profile Pic" />
        {/* <Image src="/images/pic.jpg" className="rounded img-thumbnail w-100" style={{ maxHeight: "90vh" }} alt="Profile Pic" width={500} height={500} /> */}
      </div>
    </div>
  );
}

export default PersonalData;

