import { Card } from "@/components/ui/card";
import { Radio, Wifi, Zap } from "lucide-react";

const WhatIs = () => {
  return (
    <section id="o-que-e" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            O que é <span className="text-gradient">LoRaWAN</span>?
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 animate-fade-in-up">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Radio className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Comunicação Inteligente</h3>
                <p className="text-muted-foreground">
                  LoRaWAN (Long Range Wide Area Network) é um protocolo de comunicação sem fio projetado 
                  especialmente para dispositivos IoT que precisam enviar pequenas quantidades de dados 
                  através de longas distâncias.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Eficiência Energética</h3>
                <p className="text-muted-foreground">
                  Os dispositivos podem funcionar por anos com uma única bateria, enviando dados 
                  periodicamente sem drenar energia rapidamente.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Wifi className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Alcance Impressionante</h3>
                <p className="text-muted-foreground">
                  Pode cobrir até 15 km em áreas rurais e 2-5 km em áreas urbanas, conectando 
                  dispositivos que estão muito longe para Wi-Fi ou Bluetooth.
                </p>
              </div>
            </div>
          </div>

          <Card className="p-8 bg-card border-primary/20 card-hover">
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_hsl(195_85%_55%/0.1)_0%,_transparent_70%)]" />
              <div className="relative z-10 text-center p-6">
                <div className="mb-4 flex justify-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/30 animate-pulse" />
                  <div className="w-12 h-12 rounded-full bg-primary/20 animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <div className="w-12 h-12 rounded-full bg-primary/10 animate-pulse" style={{ animationDelay: '1s' }} />
                </div>
                <h4 className="text-lg font-semibold mb-2">Analogia</h4>
                <p className="text-sm text-muted-foreground">
                  Pense no LoRaWAN como um <strong className="text-foreground">carteiro especializado</strong> que 
                  entrega pequenas cartas (dados) para lugares muito distantes, mas faz isso de forma 
                  muito econômica e confiável, sem precisar de muita energia.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhatIs;
