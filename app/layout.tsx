"use client";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import "./globals.css";
import MyNavbar from "@/components/Navigationbar";
import HeadTag from "@/components/HaedTag";

function ClientSideRoute({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const location = useLocation();
  return <div key={location.pathname}>{children}</div>;
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-bs-theme="auto">
      <head>
         <meta charSet="utf-8" />
        <title>Tofa7a-Portfolio</title>
        <meta name="description" content="That is my portfolio" />
        <meta name="keywords" content="portfolio, cv" />
        <meta name="author" content="Peter Eshak Abdo" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        {/* <link rel="icon" type="image/x-icon" href="/src/images/pic.jpg" /> */}
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
          defer // Important: Use defer to load the script after the HTML
        />
      </head>
      <HeadTag />
      <body>
        <MyNavbar />
        <Router>
          <ClientSideRoute>{children}</ClientSideRoute>
        </Router>
      </body>
    </html>
  );
}

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={`${geistSans.variable} ${geistMono.variable}`}>
//         {children}
//       </body>
//     </html>
//   );
// }










