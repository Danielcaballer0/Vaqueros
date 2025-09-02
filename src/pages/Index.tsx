// Update this page (the content is just a fallback if you fail to update the page)

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-desert flex items-center justify-center p-8">
      <div className="text-center max-w-4xl mx-auto">
        <div className="bg-card/90 backdrop-blur-sm rounded-lg shadow-western p-8 mb-8">
          <h1 className="text-6xl font-bold mb-6 text-primary">
            🤠 Duelo de Vaqueros 🤠
          </h1>
          <p className="text-2xl text-secondary mb-8">
            ¡El juego de duelos western más emocionante!
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-secondary/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary mb-4">🎯 Cómo Jugar</h3>
              <ul className="text-left space-y-2 text-muted-foreground">
                <li>• Jugador 1: Tecla <strong>A</strong></li>
                <li>• Jugador 2: Tecla <strong>L</strong></li>
                <li>• Espera el "¡DISPARO!" para disparar</li>
                <li>• Primero en 3 victorias gana</li>
              </ul>
            </div>
            
            <div className="bg-accent/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-accent mb-4">✨ Características</h3>
              <ul className="text-left space-y-2 text-muted-foreground">
                <li>• Animaciones basadas en principios Disney</li>
                <li>• Efectos visuales espectaculares</li>
                <li>• Ambientación western auténtica</li>
                <li>• Jugabilidad competitiva</li>
              </ul>
            </div>
          </div>
          
          <a 
            href="/cowboy-duel.html" 
            className="inline-block bg-gradient-sunset text-primary-foreground px-8 py-4 rounded-lg text-xl font-bold hover:shadow-glow transition-all duration-300 transform hover:scale-105"
          >
            🎮 ¡Comenzar Duelo!
          </a>
        </div>
        
        <div className="bg-card/80 backdrop-blur-sm rounded-lg shadow-western p-6">
          <h2 className="text-2xl font-bold text-primary mb-4">📚 Principios de Animación</h2>
          <p className="text-muted-foreground mb-4">
            Este juego implementa los 12 principios fundamentales de animación de Disney
          </p>
          <a 
            href="/PRINCIPIOS_ANIMACION.md" 
            target="_blank"
            className="inline-block bg-secondary text-secondary-foreground px-6 py-2 rounded-lg hover:bg-secondary/80 transition-colors"
          >
            📖 Ver Documentación
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;
