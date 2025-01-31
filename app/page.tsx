// "use client";

import MyNavbar from "@/components/Navigationbar";
import HeaderContent from "./headerDiv/page";
import PersonalData from "./personalData/page";
import Projects from "./projects/page";
import ProgrammingLanguages from "./proLang/page";
import Certifications from "./certifications/page";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <MyNavbar />
      <HeaderContent />
      <hr className="container border border-primary border-5 opacity-25 mt-5 mb-5" />
      <PersonalData />
      <hr className="container border border-primary border-5 opacity-50 mt-5 mb-5" />
      <Projects />
      <hr className="container border border-primary border-3 opacity-50 mt-5 mb-5" />
      <ProgrammingLanguages />
      <Certifications />
      <Footer />
    </>
  );
}


