import { Card } from "@/components/ui/card";
import { Signal, Battery, Database } from "lucide-react";

const TechSpecs = () => {
  const specs = [
    {
      icon: Signal,
      title: "Alcance",
      value: "2-15 km",
      description: "Cobertura urbana: 2-5 km\nCobertura rural: até 15 km",
      color: "primary"
    },
    {
      icon: Battery,
      title: "Consumo de Energia",
      value: "Muito Baixo",
      description: "Bateria pode durar\n5-10 anos",
      color: "secondary"
    },
    {
      icon: Database,
      title: "Largura de Banda",
      value: "0.3 - 50 kbps",
      description: "Ideal para pequenos\npacotes de dados",
      color: "primary"
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ficha <span className="text-gradient">Técnica</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {specs.map((spec, index) => {
            const Icon = spec.icon;
            return (
              <Card 
                key={index} 
                className="p-8 text-center card-hover bg-card border-primary/20 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-${spec.color}/10 flex items-center justify-center`}>
                  <Icon className={`w-8 h-8 text-${spec.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{spec.title}</h3>
                <div className={`text-3xl font-bold mb-4 text-${spec.color}`}>
                  {spec.value}
                </div>
                <p className="text-sm text-muted-foreground whitespace-pre-line">
                  {spec.description}
                </p>
              </Card>
            );
          })}
        </div>

        <Card className="mt-12 p-8 bg-card border-primary/20">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold">Característica</th>
                  <th className="text-left py-3 px-4 font-semibold">Especificação</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 text-muted-foreground">Frequência</td>
                  <td className="py-3 px-4">868 MHz (Europa), 915 MHz (América)</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 text-muted-foreground">Topologia</td>
                  <td className="py-3 px-4">Estrela de estrelas (Star-of-stars)</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 text-muted-foreground">Segurança</td>
                  <td className="py-3 px-4">Criptografia AES-128</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 text-muted-foreground">Capacidade</td>
                  <td className="py-3 px-4">Milhares de dispositivos por gateway</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-muted-foreground">Custo</td>
                  <td className="py-3 px-4">Baixo custo de implementação e manutenção</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default TechSpecs;
