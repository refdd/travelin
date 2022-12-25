import Document, { Html, Head, Main, NextScript } from "next/document";
const structuredData = {
  "@context": "http://schema.org",
  "@type": "Organization",
  name: "nilecr uisez",
  url: " https://www.nilecruisez.com/",
  logo: "https://www.nilecruisez.com/_next/static/media/logo-new.7252b7b9.svg",
  aggregateRating: {
    "@type": "AggregateRating",
    bestRating: "5",
    ratingValue: "5",
    reviewCount: "745",
  },
};
function MyDocument() {
  return (
    <Html>
      <Head>
      <meta name="google-site-verification" content="cTY9mgEtIaLzII0QSD0Psv6GbTR2RqdFWInOJnWsVJc" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <script
          key="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default MyDocument;
