import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const title =
    "TENWi™";

  const description =
    "DARK STREETLUX™ — Multifunctional design for day and night. TENWI is a lifestyle for rockstars and ragers, developed in Florence, Italy and handcrafted in Phuket, Thailand.";

  const url = "https://www.tenwi.eu";
  const image = "https://www.tenwi.eu/opengraph-image.png";

  return (
    <Html lang="en">
      <Head>
        {/* Primary Meta */}
        <meta name="description" content={description} />

        {/* OpenGraph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="TENWI" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />

        {/* Mobile */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Theme */}
        <meta name="theme-color" content="#000000" />

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />

      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}