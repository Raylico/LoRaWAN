import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";

const VideoSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Veja em <span className="text-gradient">Ação</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-4">
            Assista como o LoRaWAN funciona na prática
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <Card className="overflow-hidden border-primary/20 card-hover animate-fade-in-up">
          <div className="aspect-video bg-card">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/ZsVhYiX4_6o"
              title="LoRaWAN Explained"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="p-6 bg-card/50 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Play className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Como funciona o LoRaWAN</h3>
                <p className="text-muted-foreground">
                  Este vídeo demonstra os fundamentos do LoRaWAN, sua arquitetura de rede e 
                  exemplos práticos de implementação em projetos reais de IoT.
                </p>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <Card className="p-6 bg-card border-primary/20 card-hover">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <span className="text-primary">📚</span>
              Recursos Adicionais
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• LoRa Alliance - Documentação oficial</li>
              <li>• The Things Network - Rede LoRaWAN comunitária</li>
              <li>• Tutoriais de projetos práticos com Arduino e LoRa</li>
            </ul>
          </Card>

          <Card className="p-6 bg-card border-secondary/20 card-hover">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <span className="text-secondary">🚀</span>
              Comece Agora
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Kits de desenvolvimento LoRaWAN disponíveis</li>
              <li>• Gateways LoRaWAN para testes locais</li>
              <li>• Comunidades online para suporte e projetos</li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
