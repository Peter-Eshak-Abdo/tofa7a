// "use client";
import "./globals.css";
import type { Metadata } from "next";
// import { BrowserRouter as Router, useLocation } from "react-router-dom";
// import MyNavbar from "@/components/Navigationbar";
// import HeadTag from "@/components/HaedTag";
// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "My Awesome Website",
//   icons: {
//     icon: "/favicon.ico", // Path to the main favicon (required)
//     apple: "/apple-touch-icon.png", // Path to Apple touch icon (optional but recommended)
//     other: {
//       rel: "icon",
//       url: "/favicon-32x32.png", // Example of a specific size icon
//       sizes: "32x32",
//     },
//     shortcut: "/favicon-16x16.png", // Example of a shortcut icon
//   },
// };

// function ClientSideRoute({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const location = useLocation();
//   return <div key={location.pathname}>{children}</div>;
// }

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" data-bs-theme="auto">
//       <head>
//         <title>Tofa7a-Portfolio</title>
//         <meta name="description" content="That is my portfolio" />
//         <meta name="keywords" content="portfolio, cv" />
//         <meta name="author" content="Peter Eshak Abdo" />
//         <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
//         <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
//         <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
//         <link rel="manifest" href="/site.webmanifest" />
//         <link
//           href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
//           rel="stylesheet"
//           integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
//           crossOrigin="anonymous"
//         />
//         <script
//           src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
//           integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
//           crossOrigin="anonymous"
//           defer // Important: Use defer to load the script after the HTML
//         />
//       </head>
//       {/* <HeadTag /> */}
//       <body>
//         <MyNavbar />
//         <Router>
//           <ClientSideRoute>{children}</ClientSideRoute>
//         </Router>
//       </body>
//     </html>
//   );
// }

export const metadata: Metadata = {
  title: "Tofa7a-Portfolio",
  description: "This is a description of my awesome website.",
  keywords: ["next.js", "react", "web development", "example"], // Keywords for SEO
  authors: [{ name: "Peter Eshak Abdo", url: "https://johndoe.com" }], // Author information
  icons: null,
  // icons: {
  //   icon: "/favicon.ico", // Main favicon
  //   apple: "/apple-touch-icon.png", // Apple touch icon
  //   other: {
  //     rel: "apple-touch-icon-precomposed",
  //     url: "/apple-touch-icon-precomposed.png",
  //   },
  //   shortcut: "/favicon-16x16.png",
  // },
  // viewport: "width=device-width, initial-scale=1",
};
export const viewport = "width=device-width, initial-scale=1";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossOrigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
          crossOrigin="anonymous"
          defer
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}








