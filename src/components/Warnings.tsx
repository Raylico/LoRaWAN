import { Card } from "@/components/ui/card";
import { AlertTriangle, Video, Gamepad2, MessageSquare } from "lucide-react";

const Warnings = () => {
  const warnings = [
    {
      icon: Video,
      title: "Streaming de Vídeo",
      description: "LoRaWAN NÃO é adequado para transmissão de vídeo ou áudio. A largura de banda é muito limitada (máximo 50 kbps) para este tipo de aplicação.",
      reason: "Vídeo requer megabits por segundo, LoRaWAN oferece apenas kilobits."
    },
    {
      icon: Gamepad2,
      title: "Aplicações em Tempo Real",
      description: "Jogos online, controle de drones ou qualquer aplicação que exija resposta instantânea não funcionará bem.",
      reason: "A latência do LoRaWAN pode ser de alguns segundos, incompatível com controle em tempo real."
    },
    {
      icon: MessageSquare,
      title: "Mensagens Instantâneas Frequentes",
      description: "Aplicativos de chat ou notificações constantes não são ideais para LoRaWAN.",
      reason: "O protocolo é otimizado para comunicação esporádica, não para mensagens contínuas."
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4">
            <AlertTriangle className="w-8 h-8 text-warning" />
            <h2 className="text-4xl md:text-5xl font-bold">
              Alerta de <span className="text-gradient">Incompatibilidade</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-4">
            Onde NÃO usar o LoRaWAN?
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-warning to-destructive mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {warnings.map((warning, index) => {
            const Icon = warning.icon;
            return (
              <Card 
                key={index}
                className="p-6 card-hover bg-card border-warning/30 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mb-4 rounded-2xl bg-warning/10 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-warning" />
                </div>
                
                <h3 className="text-xl font-bold mb-3">{warning.title}</h3>
                <p className="text-muted-foreground mb-4">{warning.description}</p>
                
                <div className="pt-4 border-t border-border/50">
                  <p className="text-sm font-semibold text-warning mb-2">Por quê?</p>
                  <p className="text-sm text-muted-foreground">{warning.reason}</p>
                </div>
              </Card>
            );
          })}
        </div>

        <Card className="mt-12 p-8 bg-card border-warning/30">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-warning flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold mb-3">Resumo: Use LoRaWAN quando...</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">✓</span>
                  <span>Você precisa de <strong className="text-foreground">longo alcance</strong> (quilômetros)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">✓</span>
                  <span>Os dados são <strong className="text-foreground">pequenos e enviados periodicamente</strong> (não contínuos)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1">✓</span>
                  <span>O dispositivo precisa funcionar <strong className="text-foreground">por anos com bateria</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">✗</span>
                  <span>Evite para aplicações que precisam de <strong className="text-foreground">alta velocidade, baixa latência ou transmissão contínua</strong></span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Warnings;
