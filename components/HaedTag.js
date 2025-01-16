import Head from "next/head";

const HeadTag = () => {
  // const defaultTitle = "Tofa7a-Portfolio";
  // const defaultDescription = "That is my portfolio";
  // const defaultKeywords = "portfolio, cv";
  // const defaultImage = "/src/images/pic.jpeg"; // Path to your default OG image
  // const defaultAuthor = "Peter Eshak Abdo";

  // const metaTitle = defaultTitle;
  // const metaDescription = defaultDescription;
  // const metaKeywords =  defaultKeywords; // Join keywords into a comma-separated string
  // const metaImage =  defaultImage;
  // const metaAuthor = defaultAuthor;

  return (
    <Head>
      <title>{"Tofa7a-Portfolio"}</title>
      <meta name="description" content={"That is my portfolio"} />
      <meta name="keywords" content={"portfolio, cv"} />
      <meta name="author" content={"Peter Eshak Abdo"} />
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
    </Head>
  );
};

export default HeadTag;






