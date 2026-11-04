import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Product from "../components/Product";
import HowItWorks from "../components/HowItWorks";
import Comparison from "../components/Comparison";
import Research from "../components/Research";
import Team from "../components/Team";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Product />
        <Comparison />
        <HowItWorks />
        <Research />
        <Team />
        <Contact />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}
