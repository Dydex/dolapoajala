import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Work from "@/components/sections/Work";
import Experience from "@/components/sections/Experience";
import Toolkit from "@/components/sections/Toolkit";
import Contact from "@/components/sections/Contact";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Work />
      <Experience />
      <Toolkit />
      <Contact />
    </>
  );
};

export default HomePage;
