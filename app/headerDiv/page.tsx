import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About-Portfolio", // Overrides the global title template
};
function HeaderContent() {
  return (
    <div className="container d-flex flex-row justify-content-between mt-3">
      <div className="mt-5">
        <h1 className="display-1 fw-bolder">Peter Eshak</h1>
        <p className="display-3 fw-medium">A web developer and Front-end developer.</p>
      </div>
    </div>
  );
}

export default HeaderContent;

