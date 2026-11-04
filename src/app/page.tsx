import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Value from "../components/Value";
import Product from "../components/Product";
import Comparison from "../components/Comparison";
import HowItWorks from "../components/HowItWorks";
import Research from "../components/Research";
import Team from "../components/Team";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Value />
        <Product />
        <Comparison />
        <HowItWorks />
        <Research />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
