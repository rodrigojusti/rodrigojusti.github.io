import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import AboutMe from "@/components/AboutMe";
import WorkProcess from "@/components/WorkProcess";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <main className="max-w-5xl mx-auto">
        <ProductGrid />
        <AboutMe />
        <WorkProcess />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
