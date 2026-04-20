import type { Flashcard } from '../types';

export const FLASHCARDS: Flashcard[] = [
  // ── FUNDAÇÃO ───────────────────────────────────────────────────
  {
    id: 'fc-il-1',
    conceptId: 'institutional-logic',
    category: 'foundation',
    front: 'Por que o mercado não é aleatório segundo o ICT?',
    back: 'O mercado é controlado por um algoritmo computacional de entrega de preço criado por grandes instituições financeiras. Esse algoritmo opera em padrões previsíveis: coleta liquidez (varre stops), entrega preço para zonas de interesse institucional (OBs, FVGs) e move o mercado de forma eficiente para alvos específicos.',
    institutionalLogic: 'O algoritmo precisa executar posições de grande volume sem criar slippage excessivo — para isso segue padrões que, uma vez identificados, permitem ao trader surfar junto com o smart money.',
  },
  {
    id: 'fc-il-2',
    conceptId: 'institutional-logic',
    category: 'foundation',
    front: 'O que é "Smart Money" em SMC?',
    back: 'Smart Money = grandes instituições financeiras (bancos centrais, fundos hedge, bancos de investimento) que movimentam volumes suficientemente grandes para MOVER o mercado. Diferente do "Dumb Money" (varejo), o smart money cria liquidez, não consome — e o algoritmo serve para entregar preço para suas necessidades de execução.',
    institutionalLogic: 'Você não compete contra o Smart Money — você SEGUE. Identifique onde eles estão operando (OBs, FVGs) e entre na mesma direção.',
  },
  {
    id: 'fc-il-3',
    conceptId: 'institutional-logic',
    category: 'foundation',
    front: 'O que é o "Judas Swing" no ICT?',
    back: 'Judas Swing é o movimento inicial de uma sessão (especialmente NY Open) que vai na direção ERRADA — oposta à direção real do dia. O algoritmo cria esse movimento para coletar liquidez (varrer stops de um lado) antes de mover na direção verdadeira. Dura tipicamente os primeiros 15-30 mins da sessão.',
    institutionalLogic: 'Judas = o traidor. O swing "trai" os traders que entram na abertura seguindo o movimento inicial. Aprenda a esperar o final do Judas Swing antes de operar — a direção real emerge depois.',
  },
  {
    id: 'fc-il-4',
    conceptId: 'institutional-logic',
    category: 'foundation',
    front: 'O que é o Power of 3 (PO3) em SMC?',
    back: '1. ACUMULAÇÃO: Sessão asiática — instituições acumulam posição silenciosamente (range estreito)\n2. MANIPULAÇÃO: Abertura London/NY — algoritmo cria o Judas Swing (movimento falso para coletar liquidez)\n3. DISTRIBUIÇÃO: Movimento real do dia — preço vai para o alvo verdadeiro\nIdentificar em qual fase estamos define o tipo de operação.',
    institutionalLogic: 'PO3 não é uma teoria abstrata — é o padrão de como o algoritmo entrega preço a cada dia. Sessão asiática = range. London/NY abertura = manipulação. Mid-session = distribuição.',
  },

  // ── ESTRUTURA ──────────────────────────────────────────────────
  {
    id: 'fc-ms-1',
    conceptId: 'market-structure',
    category: 'structure',
    front: 'HH, HL, LH, LL — o que significa cada um?',
    back: 'HH = Higher High: nova máxima acima da anterior\nHL = Higher Low: nova mínima acima da anterior\nLH = Lower High: nova máxima abaixo da anterior\nLL = Lower Low: nova mínima abaixo da anterior\n\nAlta estruturada = HH + HL\nBaixa estruturada = LH + LL',
    institutionalLogic: 'A estrutura de mercado é a linguagem em que o algoritmo comunica a fase atual. Sem ler isso corretamente, você não sabe COM QUEM está operando.',
  },
  {
    id: 'fc-ms-2',
    conceptId: 'market-structure',
    category: 'structure',
    front: 'O que são Equal Highs (EQH) e Equal Lows (EQL)?',
    back: 'EQH = duas ou mais máximas no MESMO nível\nEQL = duas ou mais mínimas no MESMO nível\n\nPara ICT: EQH/EQL são pools de liquidez concentrados — ALVOS do algoritmo, não barreiras. O preço vai VARRER essas zonas (sweep) antes de mover na direção real. Não são suporte/resistência forte. São iscas.',
    institutionalLogic: 'Quanto mais traders acham que EQH é "resistência dupla forte", mais stops estão acumulados acima dele. O algoritmo vai buscar exatamente esse nível.',
  },
  {
    id: 'fc-ms-3',
    conceptId: 'market-structure',
    category: 'structure',
    front: 'Para definir um swing relevante, qual é a regra mínima de ICT?',
    back: 'Para ser considerado um swing significativo, deve haver NO MÍNIMO 5 velas de confluência de cada lado do topo/fundo. Isso evita marcar cada micro-oscilação como swing relevante. Timeframes maiores têm swings naturalmente mais relevantes.',
    institutionalLogic: 'Swings com menos de 5 velas de cada lado são microestrutura — ruído. Swings com 10+ velas de cada lado são estrutura maior — sinal. A força do swing define a força do OB/FVG formado nele.',
  },

  // ── BOS ────────────────────────────────────────────────────────
  {
    id: 'fc-bos-1',
    conceptId: 'bos',
    category: 'structure',
    front: 'O que é BOS e o que ele confirma?',
    back: 'BOS = Break of Structure\nConfirma CONTINUAÇÃO da tendência atual.\nEm alta = fechamento de vela ACIMA de uma HH anterior\nEm baixa = fechamento de vela ABAIXO de uma LL anterior\n\nBOS ≠ sinal de entrada. É confirmação de direção. A entrada vem no PULLBACK após o BOS.',
    institutionalLogic: 'BOS = as instituições comprometeram capital suficiente para romper a estrutura. Sinal de que o momentum institucional está mantido.',
  },
  {
    id: 'fc-bos-2',
    conceptId: 'bos',
    category: 'structure',
    front: 'BOS vs Stop Hunt — como diferenciar?',
    back: 'BOS: o preço FECHA além do nível e MANTÉM por 2+ velas\nStop Hunt: viola o nível com wick mas FECHA DE VOLTA ao range anterior\n\nRegra: sempre aguardar o FECHAMENTO da vela antes de classificar. Nunca classifique com o candle aberto.',
    institutionalLogic: 'Stop Hunt = coleta de liquidez — preço vai lá, pega os stops, volta. BOS = momentum real — as instituições estão comprometidas com a nova direção.',
  },
  {
    id: 'fc-bos-3',
    conceptId: 'bos',
    category: 'structure',
    front: 'O que forma um BOS válido no M15 segundo o SmartFlow?',
    back: '✅ Corpo da vela > 50% (não pode ser um wick longo com doji)\n✅ Velocidade acima da média (vela impulsiva, não lenta)\n✅ Fecha claramente além do nível, não apenas toca\n✅ O nível rompido deve ser swing relevante (5+ velas de cada lado)\n✅ Alinhado com estrutura H4',
    relatedConcept: 'complete-setup',
  },

  // ── CHOCH ──────────────────────────────────────────────────────
  {
    id: 'fc-choch-1',
    conceptId: 'choch',
    category: 'structure',
    front: 'O que é CHoCH e o que ele sinaliza?',
    back: 'CHoCH = Change of Character\nPrimeiro sinal de possível REVERSÃO da tendência.\nEm alta = fechamento abaixo de um HL relevante\nEm baixa = fechamento acima de um LH relevante\n\nCHoCH ≠ confirma reversão. É o AVISO para mudar o bias e aguardar BOS na nova direção.',
    institutionalLogic: 'CHoCH = as instituições pararam de defender a estrutura atual. Pode ser início de distribuição (reversão) ou mitigação antes de continuar.',
  },
  {
    id: 'fc-choch-2',
    conceptId: 'choch',
    category: 'structure',
    front: 'CHoCH vs BOS — a diferença fundamental',
    back: 'BOS = rompe na MESMA direção da tendência → CONTINUAÇÃO\nCHoCH = rompe na direção CONTRÁRIA à tendência → POSSÍVEL REVERSÃO\n\nExemplo em alta:\n- Preço rompe HH para cima = BOS (high continua)\n- Preço rompe HL para baixo = CHoCH (estrutura ameaçada)',
    relatedConcept: 'bos',
  },

  // ── LIQUIDEZ ───────────────────────────────────────────────────
  {
    id: 'fc-liq-1',
    conceptId: 'liquidity',
    category: 'liquidity',
    front: 'O que é BSL e SSL?',
    back: 'BSL = Buy Side Liquidity: stops de VENDEDORES acima das máximas\n  → quando acionados, criam ordens de COMPRA\n  → o preço "sobe" para coletar esses stops\n\nSSL = Sell Side Liquidity: stops de COMPRADORES abaixo das mínimas\n  → quando acionados, criam ordens de VENDA\n  → o preço "cai" para coletar esses stops',
    institutionalLogic: 'Para vender grande → precisa de compradores → busca BSL\nPara comprar grande → precisa de vendedores → busca SSL\nÉ sempre o inverso do que o varejo pensa.',
  },
  {
    id: 'fc-liq-2',
    conceptId: 'liquidity',
    category: 'liquidity',
    front: 'Qual é a principal regra sobre liquidez varrida?',
    back: 'Liquidez varrida = pool consumido = perde magnetismo.\nApós um sweep completo, aquele nível não é mais um alvo de liquidez — já foi executado.\nMapeie apenas pools INTACTOS (não visitados).\nPools visitados podem virar S/R ou Breaker Block — mas não são mais pools de liquidez da mesma natureza.',
  },
  {
    id: 'fc-liq-3',
    conceptId: 'liquidity',
    category: 'liquidity',
    front: 'PDH, PDL, PWH, PWL — o que são?',
    back: 'PDH = Previous Day High (máxima do dia anterior)\nPDL = Previous Day Low (mínima do dia anterior)\nPWH = Previous Week High (máxima da semana anterior)\nPWL = Previous Week Low (mínima da semana anterior)\n\nSão os maiores pools de liquidez para operações intraday. O algoritmo frequentemente usa esses níveis como alvos — ir do PDL até o PDH (ou vice-versa) num dia.',
    institutionalLogic: 'Esses níveis têm os maiores pools de stops acumulados — portanto são os alvos preferenciais do algoritmo para entrega de preço.',
  },
  {
    id: 'fc-liq-4',
    conceptId: 'liquidity',
    category: 'liquidity',
    front: 'Por que EQH/EQL são alvos, não barreiras?',
    back: 'EQH/EQL = dois ou mais topos/fundos no mesmo nível.\nPara o varejo: "resistência dupla forte" = colocam stops ACIMA/ABAIXO.\nPara ICT: concentração de stops = pool de BSL/SSL ainda maior = alvo MAGNÉTICO.\nQuanto mais "óbvia" a resistência para o varejo, mais stops lá = mais atraente para o algoritmo varrer.',
    relatedConcept: 'stop-hunt',
  },

  // ── STOP HUNT ─────────────────────────────────────────────────
  {
    id: 'fc-sh-1',
    conceptId: 'stop-hunt',
    category: 'liquidity',
    front: 'O que é um Stop Hunt e como identificar?',
    back: 'Stop Hunt = o preço viola uma máxima/mínima relevante por poucos pips/momentos e rapidamente reverte na direção oposta.\n\nSinais visuais:\n• Wick longo além do nível + fechamento de volta ao range\n• Volume elevado durante o spike\n• CHoCH ou FVG formado na volta\n\nNão é manipulação aleatória — é o algoritmo coletando liquidez.',
    institutionalLogic: 'O Stop Hunt cria o combustível (liquidez) para o movimento real. Após o sweep, você tem alta probabilidade de entrada na direção OPOSTA ao spike.',
  },
  {
    id: 'fc-sh-2',
    conceptId: 'stop-hunt',
    category: 'liquidity',
    front: 'Qual é a resposta correta ao ver um Stop Hunt?',
    back: 'NÃO: entrar imediatamente no spike esperando reversão\nNÃO: sair de posições existentes assustado pelo spike\nSIM: aguardar o fechamento da vela — confirmou o retorno ao range?\nSIM: identificar CHoCH ou FVG formado após o sweep\nSIM: se contexto H4 confirmar, planejar entrada na direção oposta ao spike',
    relatedConcept: 'fvg',
  },
  {
    id: 'fc-sh-3',
    conceptId: 'stop-hunt',
    category: 'liquidity',
    front: 'O que é o "Judas Swing" de sessão?',
    back: 'No início de cada sessão principal (especialmente NY Open 09h-10h30 NY), o algoritmo frequentemente cria um movimento na direção ERRADA (Judas Swing) antes de ir na direção real do dia.\n\nRegra prática: nos primeiros 15-30min da sessão, aguardar — o movimento inicial frequentemente é falso. A direção real emerge após o sweep do Judas.',
    institutionalLogic: 'O Judas Swing serve para criar liquidez da sessão — varrer stops de um lado antes de o dia real começar na outra direção.',
  },

  // ── ORDER BLOCK ────────────────────────────────────────────────
  {
    id: 'fc-ob-1',
    conceptId: 'order-block',
    category: 'poi',
    front: 'O que é um Order Block e por que funciona?',
    back: 'OB = última vela contrária antes de movimento impulsivo forte.\nBullish OB: última vela bearish antes de forte alta\nBearish OB: última vela bullish antes de forte queda\n\nFunciona porque: as instituições deixaram ordens de compra/venda INCOMPLETAS nesse nível. Quando o preço retorna, essas ordens são completadas — e o movimento continua.',
    institutionalLogic: 'O OB não é "suporte mágico" — é onde ordens reais de grande volume estão esperando execução. Isso é matematicamente previsível.',
  },
  {
    id: 'fc-ob-2',
    conceptId: 'order-block',
    category: 'poi',
    front: 'O que invalida um Order Block?',
    back: '❌ Preço fecha ALÉM do OB inteiro → inválido (pode virar Breaker Block)\n❌ OB formado contra a tendência do H4\n❌ Nenhum movimento impulsivo saiu do nível\n❌ Contexto de CHoCH mudou a estrutura\n\n⚠️ Parcialmente válido: Penetração até 50-70% → Mitigation Block (ordens residuais)',
    relatedConcept: 'breaker-block',
  },
  {
    id: 'fc-ob-3',
    conceptId: 'order-block',
    category: 'poi',
    front: 'O que é o CE (Consequent Encroachment) de um OB?',
    back: 'CE = ponto médio do OB = (high + low) / 2\nO preço frequentemente penetra o OB até o CE antes de reverter.\nÉ o ponto de entrada mais preciso dentro de um OB — coloca-se o SL abaixo do low do OB e entrada no CE para melhor R:R.',
    institutionalLogic: 'O CE representa onde a maior concentração de ordens residuais está — na metade do corpo da vela OB.',
  },
  {
    id: 'fc-ob-4',
    conceptId: 'order-block',
    category: 'poi',
    front: 'OB multi-timeframe: quando coincide H4 + H1 no mesmo nível?',
    back: 'OB H4 + OB H1 no mesmo nível = CONFLUÊNCIA MÁXIMA\n\nH4 OB: ordens institucionais de grande volume\nH1 OB: precisão de entrada dentro do nível\n\nA entrada é no OB H1 dentro da zona do OB H4. O SL fica abaixo do OB H4 (dá mais espaço mas protege a zona maior). O setup tem probabilidade muito maior de funcionar.',
    relatedConcept: 'premium-discount',
  },

  // ── FVG ───────────────────────────────────────────────────────
  {
    id: 'fc-fvg-1',
    conceptId: 'fvg',
    category: 'poi',
    front: 'Como identificar um Bullish FVG em 3 passos?',
    back: '1. Identifique 3 velas consecutivas\n2. Verifique: o LOW da vela 3 está ACIMA do HIGH da vela 1?\n3. Se sim → existe um gap de preço nunca negociado = Bullish FVG\n\nO FVG é o espaço entre HIGH(vela1) e LOW(vela3). Este é o "imbalance" que o algoritmo vai preencher.',
  },
  {
    id: 'fc-fvg-2',
    conceptId: 'fvg',
    category: 'poi',
    front: 'FVG preenchido vs FVG válido — a diferença',
    back: 'FVG válido: gap intacto — o preço ainda não retornou à zona\n  → Alta probabilidade de o preço retornar para preencher\n  → Use como zona de entrada\n\nFVG preenchido: preço fechou além do limite inferior (bullish FVG)\n  → Desequilíbrio resolvido\n  → Remove da análise. Sem magnetismo.',
  },
  {
    id: 'fc-fvg-3',
    conceptId: 'fvg',
    category: 'poi',
    front: 'FVG vs OB: quando usar cada um como zona de entrada?',
    back: 'FVG: melhor quando o gap é claro e relevante vs ATR. Entrada no CE do FVG (meio do gap). SL além do extremo oposto do FVG.\n\nOB: melhor quando não há FVG claro mas há OB válido com movimento impulsivo forte saindo. Entrada no CE do OB. SL abaixo do low do OB.\n\nIdeal: FVG DENTRO do OB = entrada de máxima precisão.',
    relatedConcept: 'order-block',
  },

  // ── PREMIUM DISCOUNT ──────────────────────────────────────────
  {
    id: 'fc-pd-1',
    conceptId: 'premium-discount',
    category: 'context',
    front: 'Como traçar Premium e Discount com Fibonacci?',
    back: 'Em ALTA: traçar Fibonacci do LOW para HIGH do swing\n  - Abaixo de 0.50 = DISCOUNT (barato → comprar)\n  - Acima de 0.50 = PREMIUM (caro → vender)\n\nEm BAIXA: traçar Fibonacci do HIGH para LOW do swing\n  - Região 0.50-0.79 = PREMIUM INSTITUCIONAL (melhor zona de venda)\n  - Abaixo de 0.50 = DISCOUNT',
    institutionalLogic: 'Instituições têm mandato de "melhor execução". Compram em discount (abaixo da média) e vendem em premium (acima da média). É fiduciário.',
  },
  {
    id: 'fc-pd-2',
    conceptId: 'premium-discount',
    category: 'context',
    front: 'Qual é a "Região de Prêmio ICT" no Fibonacci?',
    back: 'ICT define a Região de Prêmio como 0.50-0.79 do Fibonacci.\nEm tendência de BAIXA: é nessa zona que os institucionais entram vendidos (vende em premium).\nEm tendência de ALTA: o pullback ideal se dá nessa zona do swing de retração — você COMPRA quando o retrace recua para o premium do swing menor (que é o discount da pernada maior).\n\nPonto ideal: 0.618-0.786 = OTE (Optimal Trade Entry)',
  },
  {
    id: 'fc-pd-3',
    conceptId: 'premium-discount',
    category: 'context',
    front: 'Por que nunca comprar em premium ou vender em discount?',
    back: 'Comprar em premium (acima de 0.50 Fibonacci):\n→ Você está onde as instituições estão SAINDO (tomando lucro)\n→ Seu alvo está mais perto, seu risco está maior\n→ R:R desfavorável\n\nVender em discount (abaixo de 0.50):\n→ Você está onde as instituições estão ENTRANDO (comprando)\n→ A probabilidade está contra você\n\nSempre operar NA DIREÇÃO do fluxo institucional.',
  },

  // ── SESSÕES ───────────────────────────────────────────────────
  {
    id: 'fc-sess-1',
    conceptId: 'sessions',
    category: 'context',
    front: 'Quais são as killzones ICT para EURUSD?',
    back: 'London Open KZ: 02h-05h NY (05h-08h BRT)\nNY Open KZ: 07h-10h NY (10h-13h BRT)\nNY AM / Overlap KZ: 10h-12h NY (13h-15h BRT)\nLondon Close KZ: 10h-12h NY (coincide com overlap)\n\nEvitar: 12h-14h NY (almoço — baixo volume)\nEvitar: fora de sessão (18h-02h NY para EURUSD)',
    institutionalLogic: 'Killzones = quando os desks institucionais estão ativos e executando ordens. São as janelas de maior probabilidade de movimentos intencionais.',
  },
  {
    id: 'fc-sess-2',
    conceptId: 'sessions',
    category: 'context',
    front: 'Por que o ajuste de horário de verão EUA importa?',
    back: 'Os EUA adotam horário de verão (Daylight Saving Time — DST):\n• Muda em março (+1h) e novembro (-1h)\n• Afeta o horário das sessões em relação ao BRT\n• O Brasil NÃO adota DST\n\nEfeito prático:\n• No DST EUA: NY Open das 10h BRT vira 11h BRT\n• Killzones se deslocam 1h\n• O EA do SmartFlow calcula isso automaticamente',
    relatedConcept: 'complete-setup',
  },
  {
    id: 'fc-sess-3',
    conceptId: 'sessions',
    category: 'context',
    front: 'Por que o "almoço NY" (12h-14h NY) é perigoso?',
    back: 'Entre 12h-14h NY:\n• Volume institucional cai drasticamente (traders saem para almoço)\n• Spread pode aumentar\n• Movimentos são "choppy" — sem direção clara\n• Setups frequentemente falham ou não chegam ao TP antes de reverter\n\nRegra prática: evitar entradas novas nessa janela. Se já estiver em posição, reduzir expectativas de TP ou usar trailing stop.',
  },

  // ── DAILY BIAS ────────────────────────────────────────────────
  {
    id: 'fc-db-1',
    conceptId: 'daily-bias',
    category: 'context',
    front: 'Como construir o Daily Bias em 3 etapas?',
    back: '1. ESTRUTURA D1: HH+HL ou LH+LL? → macro bias\n2. ESTRUTURA H4: confirma o mesmo bias? → mezzo bias\n3. LIQUIDEZ: onde estão BSL e SSL? → para onde o algoritmo vai buscar?\n\nSe D1 e H4 bullish + SSL intacto abaixo:\nBias = buscar SSL → entrar comprado após sweep = trade bullish de alta convicção.',
    institutionalLogic: 'O Daily Bias é a narrativa que o algoritmo está contando hoje. Ler a narrativa correta é o diferencial entre operar com ou contra o fluxo.',
  },
  {
    id: 'fc-db-2',
    conceptId: 'daily-bias',
    category: 'context',
    front: 'O que fazer quando o Daily Bias muda intraday?',
    back: 'CHoCH forte no H4 contra o bias → Reclassificar como neutro\nNão force o bias original quando a estrutura mudou\n\nProcedimento:\n1. Fechar posições abertas na direção do bias antigo\n2. Reconstruir análise D1 + H4 na nova perspectiva\n3. Aguardar BOS na nova direção antes de entrar\n\nRegra: o mercado tem sempre razão. Você adapta.',
  },
  {
    id: 'fc-db-3',
    conceptId: 'daily-bias',
    category: 'context',
    front: 'PDH e PDL — como usá-los no Daily Bias?',
    back: 'PDH = Previous Day High\nPDL = Previous Day Low\n\nSe bias bullish → PDH é o alvo natural do dia (BSL a ser buscado)\nSe bias bearish → PDL é o alvo natural (SSL a ser buscado)\n\nPrincípio: o algoritmo frequentemente tenta atingir pelo menos um desses níveis por dia. Se PDH foi atacado e varrido → próximo alvo pode ser PWH (Previous Week High).',
    relatedConcept: 'liquidity',
  },

  // ── SETUP COMPLETO ────────────────────────────────────────────
  {
    id: 'fc-cs-1',
    conceptId: 'complete-setup',
    category: 'setup',
    front: 'Os 8 Passos do Setup SMC — quais são?',
    back: '1. Fibonacci na pernada maior → região de prêmio 50-79%\n2. Order Block dentro do prêmio (com rejeição confirmada)\n3. Liquidez mapeada (BSL/SSL identificados)\n4. Liquidez varrida (stop hunt executado)\n5. FVG formado na volta após o sweep\n6. BOS M15 confirmado (corpo >50% + velocidade)\n7. BOS M5 confirmado\n8. Engolfo M1 (corpo ≥60%, fecha no terço correto)',
    institutionalLogic: 'Cada passo é um filtro que elimina noise e confirma atividade institucional. 8/8 = as chances estão com você.',
  },
  {
    id: 'fc-cs-2',
    conceptId: 'complete-setup',
    category: 'setup',
    front: 'Quais são as REGRAS HARD (absolutas) do setup?',
    back: '⛔ H4 não alinhado = WAIT imediato. Sem exceções.\n⛔ Spread > 2.5 pips = não entra\n⛔ Fora de sessão ativa (18h-06h BRT) = não entra\n⛔ Notícia de alto impacto em <30min = não entra\n⛔ ATR H1 < 10 pips = volatilidade insuficiente = não entra\n\nEssas regras são HARD — nenhum score alto os compensa.',
  },
  {
    id: 'fc-cs-3',
    conceptId: 'complete-setup',
    category: 'setup',
    front: 'Score 9-10 vs Score 7-8 — como agir diferente?',
    back: 'Score 9-10 (FORTE 🟢):\n→ Todos os 8 passos validados\n→ Context optimal (killzone, spread, ATR)\n→ Tamanho de lote NORMAL\n\nScore 7-8 (MODERADO 🟡):\n→ 7/8 passos ou algum critério parcialmente fraco\n→ Passo fraco identificado no alerta\n→ Tamanho de lote REDUZIDO (50%)\n\n< 7 : WAIT em silêncio — sem alerta, grava no SQLite.',
    relatedConcept: 'institutional-logic',
  },
  {
    id: 'fc-cs-4',
    conceptId: 'complete-setup',
    category: 'setup',
    front: 'Por que o SmartFlow tem dois alertas (Alerta 1 e Alerta 2)?',
    back: 'Alerta 1: enviado quando passos 1-7 estão confirmados\n→ "Setup se formando — aguarde engolfo M1"\n→ Aviso antecipado para o trader se preparar\n\nAlerta 2: enviado quando engolfo M1 (passo 8) confirma\n→ "Setup completo — oportunidade ativa"\n→ Gerado pelo EA local (sem IA) = instantâneo\n\nMotivo dos dois: chamada de IA após engolfo M1 teria 10-15s de latência — um candle inteiro no M1. Pré-processar com a IA e usar EA para o trigger é a solução.',
    relatedConcept: 'sessions',
  },
];
