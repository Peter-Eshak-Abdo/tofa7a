// "use client";

import Footer from "@/components/Footer";
import MyNavbar from "@/components/Navigationbar";
import HeaderContent from "./headerDiv/page";
import About from "./about/page";
// import Projects from "./projects/page";
import Skills from "./skills/page";

export default function Home() {
  return (
    <>
      <MyNavbar />
        <HeaderContent />
        <About />
        {/* <Projects /> */}
        <Skills />
      <Footer />
    </>
  );
}

