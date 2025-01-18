// "use client";

import Footer from "@/components/Footer";
import MyNavbar from "@/components/Navigationbar";
// import { Container } from "react-bootstrap";

// import { useRouter } from "next/navigation";

export default function Home() {
  // const router = useRouter();

  // if (router.isFallback) {
  //   return <div>Loading...</div>;
  // }

  return (
    <>
    <MyNavbar />
    <div className="d-flex flex-column min-vh-100">
      <div className="mt-5">
        <h1>Home Page</h1>
        <p>Portfolio</p>
      </div>
      <Footer />
    </div>
    </>
  );
}








