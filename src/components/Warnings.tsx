import { Card } from "@/components/ui/card";
import { AlertTriangle, Video, Gamepad2, MessageSquare } from "lucide-react";

const Warnings = () => {
  const warnings = [
    {
      icon: Video,
      title: "Streaming de Vídeo e Áudio",
      description: "LoRaWAN é completamente inadequado para transmissão de vídeo, áudio ou imagens em tempo real. A largura de banda máxima de 50 kbps (na melhor configuração SF7) é 200-400x menor que o necessário.",
      reason: "Vídeo SD requer no mínimo 1-2 Mbps, vídeo HD 5-8 Mbps. LoRaWAN oferece apenas 0.3-50 kbps. Uma imagem JPEG de 100KB levaria 16-266 segundos para transmitir.",
      alternative: "Use: 4G/5G celular, Wi-Fi ou tecnologias específicas como RTSP para câmeras de vigilância."
    },
    {
      icon: Gamepad2,
      title: "Aplicações em Tempo Real e Controle Crítico",
      description: "Jogos online, controle de drones, sistemas de direção autônoma ou qualquer aplicação que exija resposta instantânea (&lt;100ms) não funcionará.",
      reason: "A latência do LoRaWAN varia de 1-10 segundos (Classe A) devido ao duty cycle, tempo no ar do pacote (até 2 segundos no SF12) e processamento no servidor de rede. Incompatível com controle em tempo real que exige &lt;50ms.",
      alternative: "Use: Wi-Fi (latência ~20ms), Bluetooth LE (~10ms), Zigbee (~15ms) ou 5G URLLC (&lt;1ms) para aplicações críticas."
    },
    {
      icon: MessageSquare,
      title: "Comunicação Contínua e Alta Frequência",
      description: "Aplicativos de chat, notificações push constantes, streaming de telemetria (GPS a cada segundo) ou qualquer aplicação que envie dados continuamente não são viáveis.",
      reason: "Limitações de duty cycle (1% na Europa = 36 segundos de transmissão por hora) e Fair Access Policy da rede (30 segundos de airtime por dia) tornam comunicação frequente impossível. Dispositivos são projetados para transmissões esporádicas (a cada 10-60 minutos).",
      alternative: "Use: MQTT sobre 4G/Wi-Fi para IoT com mensagens frequentes, WebSockets para chat em tempo real, ou NB-IoT/LTE-M para telemetria celular com maior duty cycle."
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
                
                <div className="space-y-3 pt-4 border-t border-border/50">
                  <div>
                    <p className="text-sm font-semibold text-warning mb-2">⚠️ Por que não funciona?</p>
                    <p className="text-sm text-muted-foreground">{warning.reason}</p>
                  </div>
                  
                  {warning.alternative && (
                    <div>
                      <p className="text-sm font-semibold text-secondary mb-2">✓ Alternativa Recomendada:</p>
                      <p className="text-sm text-muted-foreground">{warning.alternative}</p>
                    </div>
                  )}
                </div>
              </Card>
            );
          })}
        </div>

        <Card className="mt-12 p-8 bg-card border-warning/30">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-warning flex-shrink-0 mt-1" />
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-4">✓ Use LoRaWAN quando você precisa de:</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1 text-lg">✓</span>
                    <div>
                      <strong className="text-foreground">Longo alcance sem infraestrutura</strong>
                      <p className="text-sm">Conectar dispositivos separados por quilômetros (2-15km) sem necessidade de cabos, repetidores Wi-Fi ou cobertura celular</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1 text-lg">✓</span>
                    <div>
                      <strong className="text-foreground">Transmissões esporádicas de pequenos dados</strong>
                      <p className="text-sm">Enviar 10-200 bytes de dados a cada 10-60 minutos: leituras de sensores, telemetria, alertas (não streaming contínuo)</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1 text-lg">✓</span>
                    <div>
                      <strong className="text-foreground">Autonomia energética extrema</strong>
                      <p className="text-sm">Dispositivos operando por 5-10 anos com bateria AA em locais sem tomada: campos, florestas, subsolo</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1 text-lg">✓</span>
                    <div>
                      <strong className="text-foreground">Custo baixo em escala</strong>
                      <p className="text-sm">Implantação de centenas/milhares de sensores com investimento mínimo ($2-10/dispositivo + $100-500 gateway para milhares de nós)</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="pt-4 border-t border-border">
                <h3 className="text-xl font-bold mb-4 text-destructive">✗ NÃO use LoRaWAN para:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1 text-lg">✗</span>
                    <span><strong className="text-foreground">Alta velocidade:</strong> Vídeo, áudio, imagens, downloads (&gt;100KB)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1 text-lg">✗</span>
                    <span><strong className="text-foreground">Baixa latência:</strong> Controle em tempo real, jogos, automação crítica (&lt;1s)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1 text-lg">✗</span>
                    <span><strong className="text-foreground">Transmissão contínua:</strong> Streaming, chat, GPS a cada segundo, telemetria de alta frequência</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1 text-lg">✗</span>
                    <span><strong className="text-foreground">Mobilidade alta:</strong> Veículos em movimento rápido (&gt;40 km/h) tem dificuldade de handover entre gateways</span>
                  </li>
                </ul>
              </div>
              
              <div className="pt-4 border-t border-border bg-muted/30 p-4 rounded-lg">
                <h4 className="font-bold mb-2 text-primary">🎯 Regra de Ouro</h4>
                <p className="text-sm text-muted-foreground">
                  LoRaWAN é perfeito para <strong className="text-foreground">sensores remotos que "falam pouco mas de longe"</strong>. 
                  Se sua aplicação envia mais de 1KB a cada 10 minutos ou precisa de resposta instantânea, considere outra tecnologia.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Warnings;
