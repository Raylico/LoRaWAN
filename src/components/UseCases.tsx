import { Card } from "@/components/ui/card";
import { Sprout, Building2, Droplets, ThermometerSun } from "lucide-react";

const UseCases = () => {
  const cases = [
    {
      icon: Sprout,
      title: "Agricultura Inteligente",
      description: "Transformação digital do agronegócio através de sensores IoT distribuídos em extensas áreas rurais, permitindo agricultura de precisão e gestão eficiente de recursos.",
      examples: [
        "Irrigação automatizada: Sensores de umidade do solo (a 10-30cm de profundidade) transmitem dados a cada 15-60 minutos, acionando válvulas inteligentes para economizar até 40% de água",
        "Rastreamento de gado: Colares GPS LoRaWAN monitoram localização, temperatura corporal e comportamento de animais em áreas de até 5.000 hectares, alertando sobre problemas de saúde ou fugas",
        "Estações meteorológicas: Sensores distribuídos coletam temperatura, umidade do ar, velocidade do vento e chuva, permitindo previsões hiperlocais e decisões sobre plantio e colheita",
        "Monitoramento de silos: Sensores de temperatura e CO₂ detectam focos de combustão espontânea em grãos armazenados, prevenindo perdas de até milhões em commodities"
      ],
      gradient: "from-green-500/20 to-lime-500/20",
      details: "Caso Real: Na Nova Zelândia, fazendas utilizam 10.000+ sensores LoRaWAN para monitorar 3 milhões de hectares, reduzindo custos operacionais em 25%."
    },
    {
      icon: Building2,
      title: "Cidades Inteligentes",
      description: "Infraestrutura urbana conectada para otimização de recursos, redução de custos operacionais e melhoria da qualidade de vida dos cidadãos através de IoT de longo alcance.",
      examples: [
        "Medidores inteligentes (Smart Metering): Leitura automática de consumo de água, gás e energia elétrica, eliminando visitas presenciais e detectando vazamentos em tempo real (economia de 15-20% de água)",
        "Iluminação pública inteligente: Controle individual de 50.000+ postes com sensor de presença e ajuste automático de intensidade, reduzindo consumo energético em até 70% e custos de manutenção",
        "Gestão de resíduos: Sensores ultrassônicos em lixeiras públicas indicam nível de preenchimento, otimizando rotas de coleta e reduzindo emissões de CO₂ em 40% ao evitar viagens desnecessárias",
        "Estacionamento inteligente: Sensores magnéticos em 10.000+ vagas detectam ocupação em tempo real, integrando com aplicativos para reduzir tempo de busca por vaga em 35%",
        "Qualidade do ar: Rede de 200+ sensores distribuídos mede PM2.5, PM10, NO₂, O₃ e CO com resolução de quarteirão, gerando mapas de poluição em tempo real"
      ],
      gradient: "from-blue-500/20 to-cyan-500/20",
      details: "Caso Real: Barcelona implementou 19.500 sensores LoRaWAN gerando economia de €42 milhões/ano em serviços municipais."
    },
    {
      icon: Droplets,
      title: "Monitoramento Ambiental",
      description: "Conservação e pesquisa científica em áreas remotas através de redes de sensores de baixo consumo energético, operando autonomamente por anos.",
      examples: [
        "Qualidade da água: Sensores submersos (pH, turbidez, oxigênio dissolvido, condutividade) em 50+ pontos ao longo de bacias hidrográficas, detectando poluição industrial e agrotóxicos com precisão de 0.01 pH",
        "Nível de reservatórios: Sensores ultrassônicos ou de pressão monitoram volume de água em tempo real, auxiliando gestão hídrica e alertas de seca/enchente com antecedência de dias",
        "Detecção de incêndios florestais: Combinação de sensores de fumaça, temperatura (>60°C) e umidade em área de 100km² detecta focos em até 10 minutos, integrando com drones de combate",
        "Conservação de espécies: Câmeras trap com LoRaWAN transmitem alertas de detecção de movimento, rastreando animais ameaçados sem intervenção humana constante",
        "Monitoramento sísmico: Acelerômetros de baixo custo criam rede densa de detecção de tremores, complementando estações sísmicas tradicionais com cobertura 10x maior"
      ],
      gradient: "from-cyan-500/20 to-teal-500/20",
      details: "Caso Real: Programa de conservação na Amazônia monitora 2.500km² com 800 sensores LoRaWAN operando 7 anos com bateria solar."
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Casos de <span className="text-gradient">Sucesso</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-4">
            Onde usar o LoRaWAN?
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <Card 
                key={index}
                className="p-6 card-hover bg-card border-primary/20 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className={`aspect-video rounded-lg bg-gradient-to-br ${useCase.gradient} mb-6 flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_hsl(var(--card))_70%)]" />
                  <Icon className="w-16 h-16 text-primary relative z-10" />
                </div>
                
                <h3 className="text-2xl font-bold mb-3">{useCase.title}</h3>
                <p className="text-muted-foreground mb-6">{useCase.description}</p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm text-primary flex items-center gap-2 mb-3">
                      <ThermometerSun className="w-4 h-4" />
                      Aplicações Detalhadas:
                    </h4>
                    <ul className="space-y-3">
                      {useCase.examples.map((example, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2 p-2 rounded bg-muted/30">
                          <span className="text-primary mt-1 font-bold">•</span>
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {useCase.details && (
                    <div className="pt-4 border-t border-border/50">
                      <p className="text-xs font-semibold text-secondary mb-2">💡 Implementação Real</p>
                      <p className="text-sm text-muted-foreground italic">{useCase.details}</p>
                    </div>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
