import Hero from "@/components/Hero";
import WhatIs from "@/components/WhatIs";
import TechSpecs from "@/components/TechSpecs";
import UseCases from "@/components/UseCases";
import Warnings from "@/components/Warnings";
import VideoSection from "@/components/VideoSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhatIs />
      <TechSpecs />
      <UseCases />
      <Warnings />
      <VideoSection />
      <Footer />
    </div>
  );
};

export default Index;
