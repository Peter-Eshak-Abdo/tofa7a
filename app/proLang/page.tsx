import type { Metadata } from "next";
import ProgLangCard from "@/components/ProgLangCard";

export const metadata: Metadata = {
  title: "ProgrammingLanguages-Portfolio", // Overrides the global title template
};
function ProgrammingLanguages() {
  return (
    <>
      <div className="container d-flex flex-column min-vh-100">
        <div className="mt-5">
          <h1>Programming Languages</h1>
          {/* <p>A showcase of my recent work.</p> */}
        </div>
        <ProgLangCard />
      </div>
    </>
  );
}

export default ProgrammingLanguages;

