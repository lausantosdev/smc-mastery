import { useState } from 'react';
import './Glossary.css';

const GLOSSARY_TERMS: { term: string; def: string; category: string }[] = [
  { term: 'BOS', def: 'Break of Structure — quando o preço fecha além de uma máxima (em alta) ou mínima (em baixa) relevante, confirmando continuação da tendência.', category: 'Estrutura' },
  { term: 'CHoCH', def: 'Change of Character — primeiro sinal de possível reversão. Em alta: fecha abaixo de um HL. Em baixa: fecha acima de um LH.', category: 'Estrutura' },
  { term: 'HH', def: 'Higher High — nova máxima acima da máxima anterior. Componente de tendência de alta.', category: 'Estrutura' },
  { term: 'HL', def: 'Higher Low — nova mínima acima da mínima anterior. Pilar da tendência de alta.', category: 'Estrutura' },
  { term: 'LH', def: 'Lower High — nova máxima abaixo da máxima anterior. Componente de tendência de baixa.', category: 'Estrutura' },
  { term: 'LL', def: 'Lower Low — nova mínima abaixo da mínima anterior. Pilar da tendência de baixa.', category: 'Estrutura' },
  { term: 'EQH', def: 'Equal Highs — dois ou mais topos no mesmo nível. Para ICT: pool de BSL concentrado = alvo magnético do algoritmo.', category: 'Liquidez' },
  { term: 'EQL', def: 'Equal Lows — dois ou mais fundos no mesmo nível. Para ICT: pool de SSL concentrado = alvo magnético do algoritmo.', category: 'Liquidez' },
  { term: 'BSL', def: 'Buy Side Liquidity — stops de vendedores posicionados ACIMA de máximas. Ordens de compra automáticas que o algoritmo busca coletar.', category: 'Liquidez' },
  { term: 'SSL', def: 'Sell Side Liquidity — stops de compradores posicionados ABAIXO de mínimas. Ordens de venda automáticas que o algoritmo busca coletar.', category: 'Liquidez' },
  { term: 'PDH', def: 'Previous Day High — máxima do dia anterior. Um dos maiores pools de BSL para operações intraday.', category: 'Liquidez' },
  { term: 'PDL', def: 'Previous Day Low — mínima do dia anterior. Um dos maiores pools de SSL para operações intraday.', category: 'Liquidez' },
  { term: 'PWH', def: 'Previous Week High — máxima da semana anterior. Pool de BSL importante para swing trades.', category: 'Liquidez' },
  { term: 'PWL', def: 'Previous Week Low — mínima da semana anterior. Pool de SSL importante para swing trades.', category: 'Liquidez' },
  { term: 'OB', def: 'Order Block — última vela contrária antes de um movimento impulsivo forte. Bullish OB: última vela bearish antes de alta. Bearish OB: última vela bullish antes de queda.', category: 'POI' },
  { term: 'FVG', def: 'Fair Value Gap — gap de desequilíbrio entre 3 velas. O low da vela 3 está acima do high da vela 1 (bullish). Indica desequilíbrio que o algoritmo vai preencher.', category: 'POI' },
  { term: 'CE', def: 'Consequent Encroachment — ponto médio de um OB ou FVG ((high+low)/2). Ponto de entrada mais preciso dentro de um nível.', category: 'POI' },
  { term: 'BB', def: 'Breaker Block — OB que foi violado (preço fechou além). Inverte de suporte para resistência (ou vice-versa). Zona de entrada contrária após o break.', category: 'POI' },
  { term: 'POI', def: 'Point of Interest — qualquer zona de interesse institucional: OB, FVG, BB, imbalance. Zonas onde ordens institucionais podem estar presentes.', category: 'POI' },
  { term: 'ICT', def: 'Inner Circle Trader — metodologia criada por Michael Huddleston focada em lógica institucional, algoritmos de entrega de preço e análise de liquidez.', category: 'Geral' },
  { term: 'SMC', def: 'Smart Money Concepts — conjunto de conceitos derivados do ICT focado em seguir o fluxo do Smart Money (grandes instituições).', category: 'Geral' },
  { term: 'PO3', def: 'Power of 3 — padrão de entrega de preço em 3 fases: Acumulação (Asiática), Manipulação (Judas Swing), Distribuição (movimento real).', category: 'Geral' },
  { term: 'OTE', def: 'Optimal Trade Entry — zona de entrada ideal entre 0.62-0.79 do Fibonacci de um swing. Região de premium/discount ideal para entrada.', category: 'Contexto' },
  { term: 'Premium', def: 'Região acima de 0.50 do Fibonacci de um swing. Em tendência de baixa: zona de venda ideal (preço está "caro").', category: 'Contexto' },
  { term: 'Discount', def: 'Região abaixo de 0.50 do Fibonacci de um swing. Em tendência de alta: zona de compra ideal (preço está "barato").', category: 'Contexto' },
  { term: 'NWOG', def: 'New Week Opening Gap — gap de preço formado entre o fechamento de sexta e abertura de segunda. Frequentemente preenchido durante a semana.', category: 'Contexto' },
  { term: 'NDOG', def: 'New Day Opening Gap — gap de preço entre fechamento/abertura de um dia. Alvos de preenchimento intraday.', category: 'Contexto' },
  { term: 'Killzone', def: 'Janelas de tempo de alta probabilidade para entradas: London Open (02h-05h NY), NY Open (07h-10h NY), NY AM (10h-12h NY).', category: 'Contexto' },
  { term: 'Judas Swing', def: 'Movimento inicial de sessão na direção ERRADA criado pelo algoritmo para coletar liquidez antes do movimento real do dia.', category: 'Padrões' },
  { term: 'Mitigation', def: 'Quando o preço retorna a um OB ou FVG para "mitigar" (preencher parcialmente) as ordens que sobraram naquele nível.', category: 'POI' },
  { term: 'R:R', def: 'Risk:Reward ratio — relação entre o risco (SL) e o reward (TP) de um trade. Mínimo 1:2 no SmartFlow, ideal 1:3 ou mais.', category: 'Geral' },
  { term: 'SL', def: 'Stop Loss — nível de price onde a posição é automaticamente fechada se o trade for contra. Sempre abaixo do OB/FVG em longs, acima em shorts.', category: 'Geral' },
  { term: 'TP', def: 'Take Profit — alvo onde fecha a posição com lucro. Definido pela próxima zona de liquidez (BSL/SSL) ou nível estrutural.', category: 'Geral' },
];

export function Glossary() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('Todos');

  const categories = ['Todos', ...Array.from(new Set(GLOSSARY_TERMS.map((t) => t.category)))];

  const filtered = GLOSSARY_TERMS.filter((t) => {
    const matchSearch = t.term.toLowerCase().includes(search.toLowerCase()) ||
      t.def.toLowerCase().includes(search.toLowerCase());
    const matchCat = activeCategory === 'Todos' || t.category === activeCategory;
    return matchSearch && matchCat;
  }).sort((a, b) => a.term.localeCompare(b.term));

  return (
    <div className="glossary animate-fade-in">
      <div className="page-header">
        <h1>📖 Glossário SMC/ICT</h1>
        <p>{GLOSSARY_TERMS.length} termos com definições precisas</p>
      </div>

      <div className="glossary-controls">
        <input
          className="glossary-search"
          placeholder="Buscar termo..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="glossary-cats">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`glossary-cat-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="glossary-list">
        {filtered.map((t) => (
          <div key={t.term} className="glossary-item">
            <div className="glossary-item-header">
              <span className="glossary-term">{t.term}</span>
              <span className="badge badge-blue" style={{fontSize:'0.65rem'}}>{t.category}</span>
            </div>
            <p className="glossary-def">{t.def}</p>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="empty-state">
            <div className="icon">🔍</div>
            <p>Nenhum termo encontrado para "{search}"</p>
          </div>
        )}
      </div>
    </div>
  );
}
