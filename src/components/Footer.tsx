import { Card } from "@/components/ui/card";

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-muted/30 border-t border-border">
      <div className="container max-w-6xl mx-auto">
        <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-gradient">ProtocoloPedia</span>
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Uma enciclopédia IoT criada por estudantes, para estudantes. 
              Explore os protocolos que conectam nosso mundo.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-foreground">Tema:</span>
                <span>LoRaWAN</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-muted-foreground/50" />
              <div className="flex items-center gap-2">
                <span className="font-semibold text-foreground">Categoria:</span>
                <span>Protocolo IoT de Longo Alcance</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-muted-foreground/50" />
              <div className="flex items-center gap-2">
                <span className="font-semibold text-foreground">Projeto Educacional</span>
              </div>
            </div>
          </div>
        </Card>
        
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>Desenvolvido com 💚 como parte do projeto ProtocoloPedia</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
