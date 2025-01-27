import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";

const Index = () => (
  <div className="min-h-screen">
    <Navigation />
    <Hero />
    <About />
    <Features />
    <Team />
    <Testimonials />
    <Pricing />
  </div>
);

export default Index;
