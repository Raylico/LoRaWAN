import { Card } from "@/components/ui/card";
import { Sprout, Building2, Droplets, ThermometerSun } from "lucide-react";

const UseCases = () => {
  const cases = [
    {
      icon: Sprout,
      title: "Agricultura Inteligente",
      description: "Sensores de umidade do solo, temperatura e monitoramento de gado em grandes fazendas",
      examples: [
        "Irrigação automatizada baseada em dados do solo",
        "Rastreamento de animais em pastagens extensas",
        "Monitoramento de condições climáticas em tempo real"
      ],
      gradient: "from-green-500/20 to-lime-500/20"
    },
    {
      icon: Building2,
      title: "Cidades Inteligentes",
      description: "Gestão de infraestrutura urbana, iluminação pública e monitoramento ambiental",
      examples: [
        "Medidores inteligentes de água e energia",
        "Controle de iluminação pública por demanda",
        "Sensores de qualidade do ar distribuídos pela cidade"
      ],
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: Droplets,
      title: "Monitoramento Ambiental",
      description: "Sensores em áreas remotas para conservação e pesquisa ambiental",
      examples: [
        "Monitoramento de qualidade da água em rios",
        "Sensores de nível de água em reservatórios",
        "Detecção de incêndios florestais em áreas remotas"
      ],
      gradient: "from-cyan-500/20 to-teal-500/20"
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
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm text-primary flex items-center gap-2">
                    <ThermometerSun className="w-4 h-4" />
                    Exemplos Práticos:
                  </h4>
                  <ul className="space-y-2">
                    {useCase.examples.map((example, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
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
