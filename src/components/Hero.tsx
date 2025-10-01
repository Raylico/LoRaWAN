import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToContent = () => {
    document.getElementById('o-que-e')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Animated background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_hsl(195_85%_55%/0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_hsl(142_70%_50%/0.1),transparent_50%)]" />
      
      <div className="container max-w-6xl mx-auto text-center relative z-10">
        <div className="animate-fade-in-up">
          <div className="inline-block mb-4 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm">
            <span className="text-sm font-medium text-primary">Protocolo IoT de Longo Alcance</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient glow-text">LoRaWAN</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            O maratonista do longo alcance, conectando o campo e as cidades
          </p>
          
          <p className="text-base md:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Comunicação de baixa potência que alcança quilômetros de distância, 
            perfeita para agricultura inteligente, cidades conectadas e muito mais.
          </p>
          
          <Button 
            onClick={scrollToContent}
            size="lg"
            className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow transition-all duration-300"
          >
            Explorar LoRaWAN
            <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
