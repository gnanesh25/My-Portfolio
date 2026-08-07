import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const SITE_URL = "https://mgr-portfolio.lovable.app";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "M Gnanesh",
      jobTitle: "Full Stack AI Developer & UI/UX Designer",
      url: `${SITE_URL}/`,
      telephone: "+91 95384 42239",
      knowsAbout: [
        "Full Stack Development",
        "Artificial Intelligence",
        "UI/UX Design",
        "Responsive Web Design",
      ],
    },
    {
      "@type": "WebSite",
      name: "M Gnanesh — Portfolio",
      url: `${SITE_URL}/`,
    },
  ],
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>M Gnanesh — Full Stack AI Developer & UI/UX Designer</title>
        <meta
          name="description"
          content="Portfolio of M Gnanesh, a full stack developer and UI/UX designer building AI-powered, accessible web and mobile products from concept to production."
        />
        <link rel="canonical" href={`${SITE_URL}/`} />
        <meta property="og:title" content="M Gnanesh — Full Stack AI Developer & UI/UX Designer" />
        <meta
          property="og:description"
          content="Portfolio of M Gnanesh: AI-powered full stack development and human-centered UI/UX design."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/`} />
        <meta name="twitter:title" content="M Gnanesh — Full Stack AI Developer & UI/UX Designer" />
        <meta
          name="twitter:description"
          content="Portfolio of M Gnanesh: AI-powered full stack development and human-centered UI/UX design."
        />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
