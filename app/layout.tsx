import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tofa7a-Portfolio",
  description: "This is a portfolio web site.",
  keywords: ["next.js", "react", "web development", "Peter Eshak Abdo", "portfolio", "cv", "Tofa7a"],
  authors: [{ name: "Peter Eshak Abdo", url: "https://tofa7a-5e936.web.app/" }],
  icons: {
    icon: "./images/pic.jpg",
  },
  viewport: "width=device-width, initial-scale=1",
};

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
        <link rel="manifest" id="manifest-placeholder" href="./manifest.webmanifest" />
        <script>
          {`
            if ("serviceWorker" in navigator) {
              window.addEventListener("load", async () => {
                try {
                  const registration = await navigator.serviceWorker.register("sw.js");
                  console.log("Service worker registered for scope", registration.scope);
                } catch (err) {
                    if (err instanceof Error) {
                    console.error(err.name, err.message);
                  } else {
                    console.error(err);
                  }
                }
              });
            }
        `}
        </script>
      </head>
      <body>{children}</body>
    </html>
  );
}
