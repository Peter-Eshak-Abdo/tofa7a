// import Image from "next/image";

const certificates = [
  {
    src: "images/certifications/received_712480629442118.jpeg",
    title: "certificate",
    desc: "it is just a certificate",
  },
  {
    src: "images/certifications/1609180877601_H & H PETER ESHAK ABDO_page-0001.jpg",
    title: "certificate",
    desc: "it is just a certificate",
  },
  {
    src: "images/certifications/H & H PETER ESHAK ABDO-0001.jpg",
    title: "certificate",
    desc: "it is just a certificate",
  },
  {
    src: "images/certifications/IMG-20210328-WA0002.jpg",
    title: "certificate",
    desc: "it is just a certificate",
  },
  {
    src: "images/certifications/diploma_HTML.jpg",
    title: "certificate",
    desc: "it is just a certificate",
  },
  {
    src: "./images/certifications/diploma_CSS.jpg",
    title: "certificate",
    desc: "it is just a certificate",
  },
  {
    src: "./images/certifications/CSS_certificate.jpg",
    title: "certificate",
    desc: "it is just a certificate",
  },
  {
    src: "./images/certifications/bitdegree-certificate.jpg",
    title: "certificate",
    desc: "it is just a certificate",
  },
  {
    src: "./images/certifications/Getting_started_with_Office_365_and_Windows.jpg",
    title: "certificate",
    desc: "it is just a certificate",
  },
  {
    src: "./images/certifications/Level_up_with_Office_365_and_Windows.jpg",
    title: "certificate",
    desc: "it is just a certificate",
  },
  {
    src: "./images/certifications/received_817929558789212.jpeg",
    title: "certificate",
    desc: "it is just a certificate",
  },
  {
    src: "./images/certifications/Certification.jpg",
    title: "certificate",
    desc: "it is just a certificate",
  },
  {
    src: "./images/certifications/Ultimate_Microsoft_Office;_Excel,_Word_(بالعربية_ICDL_كورس).jpg",
    title: "certificate",
    desc: "it is just a certificate",
  },
  {
    src: "./images/certifications/شهادة_page-0001.jpg",
    title: "certificate",
    desc: "it is just a certificate",
  },
];

const CertificateCarousel: React.FC = () => {
  return (
    <div className="carousel-inner">
      {certificates.map((certificate, index) => (
        <div className={` carousel-item ${index === 0 ? "active" : ""}`} key={`certificate-${index}`}>
          <img src={certificate.src} className="d-block w-100 mx-auto" style={{ maxWidth: "90%",  maxHeight: "85%"}} alt="..." />
          {/* <Image
            src={certificate.src}
            className="d-block w-100 mx-auto"
            style={{ maxWidth: "90%" }}
            alt="..."
            width={1500}
            height={800}
            blurDataURL="data:..."
            placeholder="blur" // Optional blur-up while loading
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          /> */}
          <div className="carousel-caption d-none d-md-block">
            <h5>{certificate.title}</h5>
            <p>{certificate.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CertificateCarousel;

