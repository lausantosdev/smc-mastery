import './Simulator.css';

export function Simulator() {
  return (
    <div className="simulator animate-fade-in">
      <div className="page-header">
        <h1>🖥️ Simulador de Mercado</h1>
        <p>Próxima feature — canvas interativo com cenários SMC/ICT</p>
      </div>
      <div className="card simulator-coming-soon">
        <span className="cs-icon">🚧</span>
        <h3>Em Desenvolvimento</h3>
        <p>
          O simulador com canvas interativo está sendo construído. Vai incluir:
          cenários de BOS/CHoCH, identificação de OBs e FVGs, stop hunts visuais e modo prática cronometrado.
        </p>
        <div className="cs-features">
          <div className="cs-feature">📊 Cenários reais do EURUSD</div>
          <div className="cs-feature">🖱️ Marque OBs, FVGs e liquidez</div>
          <div className="cs-feature">⏱️ Modo timed para treino de velocidade</div>
          <div className="cs-feature">✅ Avaliação automática da sua análise</div>
        </div>
      </div>
    </div>
  );
}
