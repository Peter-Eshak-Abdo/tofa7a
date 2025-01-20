import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About-Portfolio", // Overrides the global title template
};
function Skills() {
  return (
    <>
      <div className="container d-flex flex-column min-vh-100">
        <div className="mt-5">
          <h1>Skills Me</h1>
          <p>Learn more Skills me and my background.</p>
        </div>
      </div>
    </>
  );
}

export default Skills;

