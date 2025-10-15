import type { Metadata } from "next";
import ProgLangCard from "@/components/ProgLangCard";

export const metadata: Metadata = {
  title: "ProgrammingLanguages-Portfolio",
};
function ProgrammingLanguages() {
  return (
    <>
      <div className="container d-flex flex-column min-vh-100 mt-5">
        <h1>Programming Languages</h1>
        <ProgLangCard />
      </div>
    </>
  );
}

export default ProgrammingLanguages;
