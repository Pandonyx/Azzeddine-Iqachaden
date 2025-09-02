import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        {/* Global Meta Tags */}
        <meta charSet='UTF-8' />
        <meta
          name='description'
          content='Pandonyx (Azzeddine Iaqchaden) – Web Developer & Freelancer crafting interactive experiences with React, Next.js, and modern tools.'
        />
        <meta
          name='keywords'
          content='Pandonyx, Azzeddine Iaqchaden, Full-Stack Web Developer,Web Developer, Frontend Developer, React, Next.js, Freelancer, Portfolio'
        />
        <meta
          name='author'
          content='Azzeddine (Pandonyx) Iaqchaden'
        />

        {/* Open Graph for Social Sharing */}
        <meta
          property='og:title'
          content='Pandonyx | Web Developer & Freelancer'
        />
        <meta
          property='og:description'
          content='Explore Pandonyx’s portfolio – Web Development, Frontend Engineering, and Interactive Experiences.'
        />
        <meta
          property='og:type'
          content='website'
        />
        <meta
          property='og:url'
          content='https://yourdomain.com'
        />
        <meta
          property='og:image'
          content='https://yourdomain.com/og-image.png'
        />

        {/* Twitter Card */}
        <meta
          name='twitter:card'
          content='summary_large_image'
        />
        <meta
          name='twitter:title'
          content='Pandonyx | Web Developer & Freelancer'
        />
        <meta
          name='twitter:description'
          content='Interactive Web Developer Portfolio – Built with Next.js, React, and Tailwind.'
        />
        <meta
          name='twitter:image'
          content='https://yourdomain.com/twitter-card.png'
        />
        <link
          rel='icon'
          href='/pandonyxsvg.svg'
        />
        <link
          rel='manifest'
          href='/site.webmanifest'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
