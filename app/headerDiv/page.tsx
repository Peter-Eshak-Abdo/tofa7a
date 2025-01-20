import type { Metadata } from "next";
import Image from "next/image";
import pic from "@/src/images/pic.jpg";

export const metadata: Metadata = {
  title: "About-Portfolio", // Overrides the global title template
};
function HeaderContent() {
  return (
    <>
      <div className="container d-flex flex-row justify-content-between">
        <div className="mt-5">
          <h1>Peter Eshak</h1>
          <p>A web developer and Front-end developer.</p>
        </div>
        <div className="float-end">
          <Image src={pic} className="rounded" alt="Profile Pic" />
        </div>
      </div>
    </>
  );
}

export default HeaderContent;

