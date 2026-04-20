import type { QuizQuestion } from '../types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  // ─────────────────────────────────────────
  // LÓGICA INSTITUCIONAL
  // ─────────────────────────────────────────
  {
    id: 'q-il-1',
    conceptId: 'institutional-logic',
    type: 'conceptual',
    difficulty: 'beginner',
    level: 1,
    question: 'Por que um banco que quer comprar €500 milhões não simplesmente executa a ordem de uma vez?',
    options: [
      { id: 'a', text: 'Porque não tem capital suficiente para tanto', isCorrect: false, explanation: 'Bancos têm capital mais do que suficiente — o problema é de mercado, não de capital.' },
      { id: 'b', text: 'Porque isso moveria o mercado violentamente contra ele antes de completar a compra', isCorrect: true, explanation: 'Correto. Uma ordem de €500M num mercado de varejo causaria slippage enorme — o preço subiria tanto durante a execução que a compra ficaria cara demais. Daí a necessidade do algoritmo de entrega.' },
      { id: 'c', text: 'Porque é ilegal executar ordens dessa magnitude', isCorrect: false, explanation: 'Não é ilegal — é o mecanismo normal de market making institucional.' },
      { id: 'd', text: 'Porque precisam da aprovação do Federal Reserve para cada trade', isCorrect: false, explanation: 'Instituições não precisam de aprovação para cada trade — operam com autonomia dentro de seus mandatos.' },
    ],
    explanation: 'O núcleo do ICT: instituições precisam de liquidez para executar posições grandes. Elas criam e coletam essa liquidez através do algoritmo — varrendo stops, criando FVGs e usando OBs.',
    institutionalNote: 'Este é o fundamento de TUDO em SMC. Se você entender por que os institucionais precisam de liquidez, entende por que o mercado se comporta como se comporta.',
  },
  {
    id: 'q-il-2',
    conceptId: 'institutional-logic',
    type: 'application',
    difficulty: 'beginner',
    level: 1,
    question: 'O preço sobe rapidamente, viola a máxima do dia anterior, e imediatamente reverte e cai forte. Do ponto de vista institucional, o que provavelmente aconteceu?',
    options: [
      { id: 'a', text: 'Um evento de notícia causou volatilidade aleatória', isCorrect: false, explanation: 'Se fosse aleatório, o retorno seria mais lento e impreciso. A velocidade do retorno sugere intenção.' },
      { id: 'b', text: 'O mercado está em modo de incerteza e não sabe para onde ir', isCorrect: false, explanation: 'A incerteza não gera spikes precisos em máximas específicas. A precisão sugere intenção institucional.' },
      { id: 'c', text: 'O algoritmo coletou os stops dos vendedores (BSL) e usou essa liquidez para uma venda institucional grande', isCorrect: true, explanation: 'Perfeito. Os stops acima da máxima do dia anterior (BSL) foram acionados, criando ordens de compra automáticas. Os institucionais usaram essas compras para vender sua posição enorme. Resultado: spike + reversão.' },
      { id: 'd', text: 'Traders de varejo compraram o breakout e depois se arrependeram', isCorrect: false, explanation: 'Parcialmente verdade — traders compraram o breakout (stops acionados = compras). Mas quem vendeu para eles foram os institucionais, não "outros varejistas se arrependendo".' },
    ],
    explanation: 'Stop hunt clássico: BSL varrida → liquidez coletada → venda institucional. O resultado é um spike com wieck longo que fecha de volta ao range.',
  },
  {
    id: 'q-il-3',
    conceptId: 'institutional-logic',
    type: 'differentiation',
    difficulty: 'intermediate',
    level: 2,
    question: 'Qual é a diferença fundamental entre a visão de "suporte e resistência" do trader de varejo e a visão de "liquidez" do ICT?',
    options: [
      { id: 'a', text: 'São a mesma coisa com nomes diferentes', isCorrect: false, explanation: 'Não — a diferença é fundamental e muda completamente a lógica de trading.' },
      { id: 'b', text: 'Suporte/resistência assume que o preço VAI PARAR naquele nível. ICT assume que o preço vai BUSCAR o nível para coletar liquidez e então mover na direção real.', isCorrect: true, explanation: 'Exatamente. Para o varejo, resistência = barreira. Para ICT, resistência = pool de liquidez = ALVO. O preço não para nas resistências — ele as varre antes de mover. Essa inversão muda tudo.' },
      { id: 'c', text: 'ICT usa mais indicadores técnicos que a análise de suporte/resistência', isCorrect: false, explanation: 'ICT na verdade usa menos indicadores — é análise de price action puro com lógica institucional.' },
      { id: 'd', text: 'São abordagens equivalentes com resultados similares', isCorrect: false, explanation: 'Os resultados são radicalmente diferentes: varejo compra na resistência esperando reverter; ICT espera o sweep da resistência para entrar na direção da reversão.' },
    ],
    explanation: 'Esta é a inversão mental central do ICT. Resistências não são barreiras — são iscas. O varejo coloca stops acima delas, criando liquidez. As instituições varrem esse nível, coletam a liquidez, e então movem o preço.',
    institutionalNote: 'Quando você vê uma resistência óbvia, pense: "quantos stops estão acima disso?" — e lembre que esse é o alvo do algoritmo.',
  },

  // ─────────────────────────────────────────
  // ESTRUTURA DE MERCADO
  // ─────────────────────────────────────────
  {
    id: 'q-ms-1',
    conceptId: 'market-structure',
    type: 'conceptual',
    difficulty: 'beginner',
    level: 1,
    question: 'Em tendência de alta, qual é a sequência de máximas e mínimas esperada?',
    options: [
      { id: 'a', text: 'LH + LL (Lower High + Lower Low)', isCorrect: false, explanation: 'LH+LL é tendência de BAIXA — o oposto do que a pergunta pede.' },
      { id: 'b', text: 'HH + HL (Higher High + Higher Low)', isCorrect: true, explanation: 'Correto. HH (nova máxima acima da anterior) + HL (nova mínima acima da anterior mínima) = tendência de alta estruturada. O mercado está fazendo novos topos E novos fundos mais altos — confirmação clara de alta.' },
      { id: 'c', text: 'HH + LL (Higher High + Lower Low)', isCorrect: false, explanation: 'Combinação contraditória — HH indica alta, LL indica baixa. Isso seria volatilidade extrema sem tendência clara.' },
      { id: 'd', text: 'LH + HL (Lower High + Higher Low)', isCorrect: false, explanation: 'LH+HL é compressão/convergência — o mercado está se contraindo, possível formação de range ou reversão próxima.' },
    ],
    explanation: 'Estrutura básica mas fundamental. HH+HL = alta estruturada. LH+LL = baixa estruturada. Todo setup SMC começa confirmando qual das duas estamos.',
  },
  {
    id: 'q-ms-2',
    conceptId: 'market-structure',
    type: 'visual',
    difficulty: 'beginner',
    level: 1,
    question: 'Um gráfico mostra: fundo em 1.0800, topo em 1.0900, novo fundo em 1.0820 (acima do anterior), novo topo em 1.0880 (abaixo do anterior). Qual é a estrutura?',
    options: [
      { id: 'a', text: 'Tendência de alta (HH + HL)', isCorrect: false, explanation: 'Não — o segundo topo (1.0880) está ABAIXO do primeiro (1.0900). Isso não é HH, é LH.' },
      { id: 'b', text: 'Tendência de baixa (LH + LL)', isCorrect: false, explanation: 'Não — o segundo fundo (1.0820) está ACIMA do primeiro (1.0800). Isso não é LL, é HL.' },
      { id: 'c', text: 'Compressão/Convergência — possível range (HL + LH)', isCorrect: true, explanation: 'Correto. HL (fundo mais alto) + LH (topo mais baixo) = o mercado está comprimindo. Preço está se contraindo entre suporte ascendente e resistência descendente. Possível breakout ou formação de range próxima.' },
      { id: 'd', text: 'Estrutura lateral pura (EQH + EQL)', isCorrect: false, explanation: 'EQH/EQL seria máximas E mínimas no mesmo nível, não ascendentes/descendentes.' },
    ],
    explanation: 'HL + LH = convergência. O mercado está indeciso. Em SMC, isso é frequentemente o período antes de um stop hunt que define a direção. Aguardar o CHoCH antes de operar.',
  },
  {
    id: 'q-ms-3',
    conceptId: 'market-structure',
    type: 'application',
    difficulty: 'intermediate',
    level: 2,
    question: 'Você está analisando o H4 de EURUSD e vê clara tendência de alta (HH+HL). No M15, o preço fez 3 LH+LL consecutivos. O que você faz?',
    options: [
      { id: 'a', text: 'Vende imediatamente baseado na estrutura de baixa do M15', isCorrect: false, explanation: 'Nunca opere contra o H4 baseado apenas em M15. O H4 é o contexto, o M15 é ruído dentro do pullback.' },
      { id: 'b', text: 'Aguarda — o M15 em baixa pode ser o pullback do H4, procura bullish OB ou FVG do M15 para comprar no pullback', isCorrect: true, explanation: 'Exato. H4 manda. M15 em queda DENTRO de tendência de alta H4 = pullback normal. Você procura onde o preço vai parar (OB ou FVG) e entra comprado alinhado com o H4.' },
      { id: 'c', text: 'Ignora o M15 e opera apenas pelo H4', isCorrect: false, explanation: 'O M15 é o timeframe de entrada — você não ignora, usa para afinar a entrada. A diferença é que você só opera setups de COMPRA no M15, alinhados com o H4.' },
      { id: 'd', text: 'Considera o contexto neutro e não opera', isCorrect: false, explanation: 'Não é neutro — é claramente bullish no H4 com pullback no M15. Essa é uma oportunidade de entrada, não de abstenção.' },
    ],
    explanation: 'A hierarquia de timeframes é sagrada em SMC. H4 define a tendência, H1/M15 definem a estrutura de entrada, M5/M1 definem o timing. Nunca opere contra o timeframe maior.',
  },
  {
    id: 'q-ms-4',
    conceptId: 'market-structure',
    type: 'differentiation',
    difficulty: 'intermediate',
    level: 2,
    question: 'Qual é a diferença entre Equal Highs (EQH) e uma resistência clássica de suporte/resistência?',
    options: [
      { id: 'a', text: 'EQH e resistência clássica são exatamente a mesma coisa', isCorrect: false, explanation: 'Superficialmente parecem igual, mas o SMC trata de forma completamente diferente.' },
      { id: 'b', text: 'EQH é uma concentração de stops (BSL) — ALVO do algoritmo. Resistência clássica é vista como barreira que vai travar o preço.', isCorrect: true, explanation: 'Perfeito. EQH = dois ou mais topos no mesmo nível = stops concentrados acima. Para ICT, isso é um ALVO MAGNÉTICO — o algoritmo vai buscar esse nível para varrer os stops antes de qualquer movimento real. Resistência clássica? O varejo a vê como barreira. ICT a vê como combustível.' },
      { id: 'c', text: 'EQH é sempre mais forte que resistência clássica', isCorrect: false, explanation: 'Não é uma questão de força como barreira — o ICT não usa EQH como barreira, mas como zona de liquidez que será varrida.' },
      { id: 'd', text: 'EQH ocorre apenas em timeframes menores (M1-M5)', isCorrect: false, explanation: 'EQH pode ocorrer em qualquer timeframe — EQH em D1 ou H4 são ainda mais significativos como pools de liquidez.' },
    ],
    explanation: 'Esta é uma das maiores mudanças de paradigma do ICT. O que o varejo chama de "resistência dupla forte" — ICT chama de "pool de liquidez concentrado que o algoritmo vai varrer". Opostos.',
  },

  // ─────────────────────────────────────────
  // BOS
  // ─────────────────────────────────────────
  {
    id: 'q-bos-1',
    conceptId: 'bos',
    type: 'conceptual',
    difficulty: 'beginner',
    level: 1,
    question: 'Um BOS (Break of Structure) em tendência de alta ocorre quando:',
    options: [
      { id: 'a', text: 'O preço viola uma mínima anterior (HL), sinalizando possível reversão', isCorrect: false, explanation: 'Violar uma mínima anterior em tendência de alta é CHoCH, não BOS.' },
      { id: 'b', text: 'O preço fecha ACIMA de uma máxima anterior relevante, confirmando continuação da alta', isCorrect: true, explanation: 'Correto. BOS = confirmação de continuação. Em alta, o preço rompe uma máxima anterior (HH), confirmando que a tendência está se mantendo ou acelerando. Note: fechamento de vela acima,  não apenas wick.' },
      { id: 'c', text: 'O preço toca brevemente a máxima anterior mas fecha abaixo dela', isCorrect: false, explanation: 'Wick sem fechamento = sweep de liquidez, não BOS. Para ser BOS, precisa de fechamento além do nível.' },
      { id: 'd', text: 'O volume aumenta significativamente por 3 velas consecutivas', isCorrect: false, explanation: 'Volume é contexto, não definição de BOS. BOS é sobre estrutura (fechamento além de máxima/mínima relevante).' },
    ],
    explanation: 'BOS = Break Of Structure = confirmação de que a estrutura está se mantendo na direção da tendência. Fechamento de vela (não wick) além do nível relevante.',
  },
  {
    id: 'q-bos-2',
    conceptId: 'bos',
    type: 'application',
    difficulty: 'intermediate',
    level: 1,
    question: 'Você identifica um BOS bullish no M15. Qual deve ser sua próxima ação?',
    options: [
      { id: 'a', text: 'Entrar comprado imediatamente no BOS — sinal de força', isCorrect: false, explanation: 'Entrar no BOS é comprar no pico de momentum — você estará no pior preço possível. O BOS confirma a direção, não é o ponto de entrada.' },
      { id: 'b', text: 'Aguardar o pullback para um OB ou FVG formado abaixo do BOS e entrar nesse nível', isCorrect: true, explanation: 'Exato. BOS confirma tendência. Depois do BOS, você aguarda o preço recuar para o nível de valor (OB ou FVG), entra com SL abaixo dessas zonas e TP no próximo alvo de liquidez.' },
      { id: 'c', text: 'Marcar o nível do BOS como stop loss para uma posição existente de venda', isCorrect: false, explanation: 'BOS na direção contrária à posição é sinal para fechar a posição, não colocar stop lá.' },
      { id: 'd', text: 'Considerar o BOS inválido se não houver volume acima da média', isCorrect: false, explanation: 'BOS pode ocorrer em volume moderado — o critério principal é o fechamento além do nível relevante.' },
    ],
    explanation: 'BOS é contexto, não entrada. A sequência correta: BOS confirma direção → aguardar pullback para POI (OB/FVG) → entrar com precisão.',
  },
  {
    id: 'q-bos-3',
    conceptId: 'bos',
    type: 'differentiation',
    difficulty: 'intermediate',
    level: 2,
    question: 'Qual é a diferença crítica entre um BOS e um Liquidity Sweep (Stop Hunt)?',
    options: [
      { id: 'a', text: 'BOS tem volume maior que Stop Hunt', isCorrect: false, explanation: 'Volume não é o critério definitivo — ambos podem ter volume elevado.' },
      { id: 'b', text: 'No BOS, o preço fecha ALÉM do nível e mantém. No Stop Hunt, o preço viola brevemente e fecha DE VOLTA ao range anterior.',  isCorrect: true, explanation: 'Perfeito. Essa é a distinção técnica crítica: fechamento é o árbitro. Fechou além e manteve = BOS. Violou mas fechou de volta = Stop Hunt/Sweep. O wick além sem fechamento é sempre tentativa de coletar liquidez.' },
      { id: 'c', text: 'BOS ocorre apenas em H4/D1, Stop Hunt apenas em M1/M5', isCorrect: false, explanation: 'Ambos ocorrem em todos os timeframes. A distinção é técnica (fechamento), não de timeframe.' },
      { id: 'd', text: 'Stop Hunt ocorre apenas em notícias de alto impacto', isCorrect: false, explanation: 'Stop Hunts ocorrem o tempo todo, em qualquer sessão, sempre que há pool de liquidez próximo.' },
    ],
    explanation: 'Rule of thumb: aguarde o fechamento da vela. Se fechou além do nível → BOS. Se voltou → Sweep. Nunca decida com o candle aberto.',
  },

  // ─────────────────────────────────────────
  // CHOCH
  // ─────────────────────────────────────────
  {
    id: 'q-choch-1',
    conceptId: 'choch',
    type: 'conceptual',
    difficulty: 'beginner',
    level: 1,
    question: 'Em tendência de alta estabelecida, um CHoCH (Change of Character) ocorre quando:',
    options: [
      { id: 'a', text: 'O preço cria um novo HH (Higher High)', isCorrect: false, explanation: 'Novo HH é BOS de confirmação — a tendência de alta está se mantendo, não mudando.' },
      { id: 'b', text: 'O preço fecha abaixo de um HL (Higher Low) relevante — violando a estrutura de alta', isCorrect: true, explanation: 'Correto. Em tendência de alta, os HLs são os "pilares" da estrutura. Quando o preço viola um HL (fecha abaixo dele), é o primeiro sinal de que a estrutura de alta pode estar quebrando. Isso é CHoCH.' },
      { id: 'c', text: 'O volume cai por 5 velas consecutivas', isCorrect: false, explanation: 'Volume decrescente pode indicar fraqueza, mas não é CHoCH por si só.' },
      { id: 'd', text: 'O preço testa o mesmo HH pela terceira vez sem romper', isCorrect: false, explanation: 'Teste triplo de resistência é um padrão mas não é CHoCH — para CHoCH precisa de violação da estrutura na direção contrária.' },
    ],
    explanation: 'CHoCH em alta = preço viola um HL. Em baixa = preço viola um LH. É o PRIMEIRO sinal da possível reversão — não a confirmação.',
  },
  {
    id: 'q-choch-2',
    conceptId: 'choch',
    type: 'application',
    difficulty: 'intermediate',
    level: 1,
    question: 'Você identifica um CHoCH no H4. Qual deve ser sua reação imediata?',
    options: [
      { id: 'a', text: 'Vender imediatamente — CHoCH é sinal de venda confirmado', isCorrect: false, explanation: 'CHoCH não é sinal de entrada — é o AVISO de que algo está mudando. Entrar no CHoCH é operar sem confirmação.' },
      { id: 'b', text: 'Parar de operar comprado. Mudar o bias para neutro/bearish e aguardar BOS na nova direção como confirmação', isCorrect: true, explanation: 'Correto. CHoCH muda o bias, não diretamente o trade. Você para de buscar compras, prepara a cabeça para a nova direção, e aguarda um BOS bearish (confirmação de que a reversão está estabelecida) antes de vender.' },
      { id: 'c', text: 'Ignorar e continuar comprando — CHoCH em H4 pode ser apenas pullback', isCorrect: false, explanation: 'CHoCH em H4 não é pullback — é violação de estrutura de alto timeframe. Isso invalida o contexto bullish.' },
      { id: 'd', text: 'Usar o nível do CHoCH como novo alvo de TP para posições de compra existentes', isCorrect: false, explanation: 'Se há posições de compra abertas, o CHoCH é um sinal para FECHAR, não para usar como TP.' },
    ],
    explanation: 'CHoCH = mudar o modo mental. Sua cabeça sai do "estou caçando compras" e entra no "vou esperar confirmação para vender". A entrada vem depois, com o BOS bearish.',
  },
  {
    id: 'q-choch-3',
    conceptId: 'choch',
    type: 'differentiation',
    difficulty: 'advanced',
    level: 3,
    question: 'Você vê um spike agressivo que viola um HL no H4 mas imediatamente fecha de volta acima do HL. Isso é CHoCH ou Stop Hunt?',
    options: [
      { id: 'a', text: 'CHoCH — violar o HL é suficiente, independente do fechamento', isCorrect: false, explanation: 'Assim como no BOS, o fechamento é o árbitro. Wick sem fechamento além do nível = sweep, não mudança estrutural.' },
      { id: 'b', text: 'Stop Hunt / False CHoCH — o fechamento de volta acima do HL invalida a quebra estrutural', isCorrect: true, explanation: 'Exato. Se o preço viola o HL mas fecha acima dele → False CHoCH (Stop Hunt). As ordens abaixo do HL foram acionadas (liquidez coletada) e o preço voltou. A estrutura de alta ainda está intacta — de fato, esse tipo de falso CHoCH frequentemente precede aceleração da alta.' },
      { id: 'c', text: 'Neutro — nem CHoCH nem Stop Hunt sem mais contexto', isCorrect: false, explanation: 'Com o fechamento de volta acima do HL, há contexto suficiente: é um sweep/false break, não CHoCH.' },
      { id: 'd', text: 'Depende do volume durante o spike', isCorrect: false, explanation: 'O critério é o fechamento, não o volume. Alto volume durante o spike pode ser os stops sendo acionados.' },
    ],
    explanation: 'Fechamento é sempre o árbitro. Viola mas fecha de volta = sweep (coleta de liquidez). Fecha além = mudança estrutural real. Esta distinção evita que você saia de posições boas por "CHoCH falso".',
    institutionalNote: 'Falsos CHoCH são o "Judas Swing" do nível de estrutura — criados exatamente para expulsar posições long antes da subida real.',
  },

  // ─────────────────────────────────────────
  // LIQUIDEZ
  // ─────────────────────────────────────────
  {
    id: 'q-liq-1',
    conceptId: 'liquidity',
    type: 'conceptual',
    difficulty: 'beginner',
    level: 1,
    question: 'O que é BSL (Buy Side Liquidity) em SMC?',
    options: [
      { id: 'a', text: 'Uma zona de compra onde compradores estão ativos', isCorrect: false, explanation: 'Não — é onde os STOPS dos vendedores estão. Esses stops são ordens de compra automáticas (Buy Stops), daí o nome Buy Side Liquidity.' },
      { id: 'b', text: 'Os stops loss de vendedores posicionados ACIMA de máximas relevantes', isCorrect: true, explanation: 'Correto. Traders que estão vendidos colocam stops acima das máximas (se o preço subir até lá e ativar o stop, eles compram para fechar a posição de venda). Esses stops são ordens de compra automáticas = Buy Side Liquidity acima das máximas.' },
      { id: 'c', text: 'Ordens de compra limitadas abaixo do preço atual', isCorrect: false, explanation: 'Ordens limitadas de compra são SSL (Sell Side... não, são limit buy orders). BSL são especificamente os STOPS dos vendedores — acima das máximas.' },
      { id: 'd', text: 'O volume de compras em qualquer vela de alta', isCorrect: false, explanation: 'Volume de vela não é BSL. BSL são stops acumulados em zonas específicas (acima de máximas).' },
    ],
    explanation: 'BSL = Buy Side Liquidity = stops de vendedores ACIMA das máximas. SSL = Sell Side Liquidity = stops de compradores ABAIXO das mínimas. O preço busca esses pools antes de mover na direção real.',
  },
  {
    id: 'q-liq-2',
    conceptId: 'liquidity',
    type: 'application',
    difficulty: 'intermediate',
    level: 1,
    question: 'O gráfico mostra 3 mínimas no mesmo nível (EQL) — Equal Lows. O que você espera que aconteça?',
    options: [
      { id: 'a', text: 'O preço vai respeitar esse nível forte de suporte e subir de lá', isCorrect: false, explanation: 'Essa é a visão do trader de varejo. ICT enxerga diferente: três mínimas no MESMO nível = stops concentrados abaixo delas = SSL pool. O algoritmo vai VARRER essas mínimas antes de qualquer movimento real.' },
      { id: 'b', text: 'O preço vai violar as EQL para varrer os stops abaixo delas (SSL) antes de decidir a direção real', isCorrect: true, explanation: 'Correto. EQL = pool de SSL altamente concentrado. Quanto mais óbvio o suporte duplo/triplo para o varejo, mais stops abaixo. O algoritmo PRECISA varrer esses stops para executar posições institucionais. Espere o sweep e então avalie a direção real pelo contexto H4.' },
      { id: 'c', text: 'O padrão EQL é neutro e não tem implicação direcional', isCorrect: false, explanation: 'EQL tem implicação muito clara: existe um pool de SSL concentrado abaixo delas. O algoritmo vai targetar esse pool.' },
      { id: 'd', text: 'Na quarta visita, o suporte vai quebrar permanentemente', isCorrect: false, explanation: 'A "regra do suporte triplo" é lore de varejo. ICT diz: qualquer visita ao EQL pode ser o sweep — o que determina a direção é o que acontece DEPOIS do sweep.' },
    ],
    explanation: 'EQL = isca para vendedores esperando o breakout E compradores arriscando comprar num suporte "forte". Todos perdem para o algoritmo que coleta ambos os stops antes de mover.',
  },
  {
    id: 'q-liq-3',
    conceptId: 'liquidity',
    type: 'conceptual',
    difficulty: 'beginner',
    level: 1,
    question: 'Uma vez que o preço varrend uma zona de liquidez (BSL ou SSL), o que acontece com aquele pool de liquidez?',
    options: [
      { id: 'a', text: 'O pool se regenera — novos stops são colocados no mesmo nível', isCorrect: false, explanation: 'Eventualmente sim, mas imediatamente após o sweep o pool está consumido. Não há magnetismo imediato no mesmo nível.' },
      { id: 'b', text: 'O pool foi consumido (varrido) — perde sua função como alvo magnético para o algoritmo', isCorrect: true, explanation: 'Correto. Após o sweep, as ordens que estavam lá foram executadas. O nível perde seu magnetismo imediato. Traders que esperaram a "liquidez intacta" e ainda usam o nível varrido como referência estão operando com dado stale.' },
      { id: 'c', text: 'O nível varrido se torna automaticamente um OB', isCorrect: false, explanation: 'Não necessariamente — o nível varrido pode se tornar S/R ou um Breaker Block, mas não é automaticamente um OB.' },
      { id: 'd', text: 'O preço nunca mais retorna àquele nível', isCorrect: false, explanation: 'O preço pode retornar — mas sem o mesmo magnetismo de pool de liquidez intacto. Pode ser testado como S/R ou Breaker.' },
    ],
    explanation: 'Liquidez varrida = pool consumido. Quando você mapeia liquidez, identifique apenas pools INTACTOS (não visitados ainda). Pools varridos não têm mais o magnetismo original.',
  },
  {
    id: 'q-liq-4',
    conceptId: 'liquidity',
    type: 'application',
    difficulty: 'intermediate',
    level: 2,
    question: 'O H4 está em tendência de alta. Você vê SSL intacto (mínimas não varridas) bem abaixo do preço atual. O que isso implica para a próxima operação?',
    options: [
      { id: 'a', text: 'Vender imediatamente porque o preço vai buscar o SSL abaixo', isCorrect: false, explanation: 'Vender em tendência de alta contra o H4 por causa de SSL abaixo é perigoso — e mesmo que o price vá buscar o SSL, na tendência de alta ele provavelmente vai de volta para cima depois.' },
      { id: 'b', text: 'O SSL não afeta o trade atual — só importa BSL acima', isCorrect: false, explanation: 'SSL intacto pode ser usado como alvo de saída ou indicar que pode haver um pullback profundo antes da continuação.' },
      { id: 'c', text: 'Possível pullback até o SSL antes da continuação da alta — mapear o SSL como zona de compra potencial se coincidir com OB/FVG', isCorrect: true, explanation: 'Correto. Em tendência de alta, SSL intacto abaixo pode ser o alvo do próximo pullback. Se no nível do SSL houver um OB bullish ou FVG, essa é a zona de entrada premium — você compra onde o algoritmo varre os stops dos compradores antes de continuar subindo.' },
      { id: 'd', text: 'Aguardar o preço atingir o SSL antes de tomar qualquer decisão', isCorrect: false, explanation: 'Parcialmente correto — você mapeia o SSL mas não precisa esperar ele ser atingido para planejar. Você planeja o que vai fazer SE o preço chegar lá.' },
    ],
    explanation: 'SSL em tendência de alta = possível zona de entrada premium se houver OB/FVG no mesmo nível. O algoritmo pode varrer os stops dos compradores para alimentar uma nova perna de alta.',
  },

  // ─────────────────────────────────────────
  // ORDER BLOCK
  // ─────────────────────────────────────────
  {
    id: 'q-ob-1',
    conceptId: 'order-block',
    type: 'conceptual',
    difficulty: 'beginner',
    level: 1,
    question: 'O que define um Bullish Order Block (OB de compra)?',
    options: [
      { id: 'a', text: 'Qualquer vela de alta (bullish) que antecede uma queda', isCorrect: false, explanation: 'Invertido. Bullish OB é vela BEARISH (de baixa) antes de movimento BULLISH forte.' },
      { id: 'b', text: 'A última vela bearish (de baixa) imediatamente antes de um movimento bullish impulsivo forte', isCorrect: true, explanation: 'Correto. Bullish OB = última vela bearish antes da alta impulsiva. Por quê? Porque é onde as instituições colocaram ordens de compra que não foram totalmente executadas — a vela bearish "tentou cair" mas o movimento bullish impulsivo logo após indica que as compras institucionais venceram.' },
      { id: 'c', text: 'O primeiro candle bullish de um movimento de alta', isCorrect: false, explanation: 'O primeiro candle bullish É parte do movimento, não o OB. O OB é a última vela ANTES do movimento começar.' },
      { id: 'd', text: 'Uma zona de consolidação com múltiplos candles pequenos', isCorrect: false, explanation: 'Consolidação pode preceder movimentos, mas OB é especificamente a última vela contrária antes do impulso.' },
    ],
    explanation: 'Bullish OB: última vela bearish → movimento bullish forte. Bearish OB: última vela bullish → movimento bearish forte. O OB é contrário ao movimento que cria.',
  },
  {
    id: 'q-ob-2',
    conceptId: 'order-block',
    type: 'application',
    difficulty: 'intermediate',
    level: 2,
    question: 'O preço retornou a um bullish OB e penetrou até 60% do corpo da vela OB sem fechar além dela. O OB ainda é válido?',
    options: [
      { id: 'a', text: 'Não — qualquer penetração invalida o OB', isCorrect: false, explanation: 'Penetração parcial é normal — ICT até tem um conceito para isso (Mitigation Block). A invalidação ocorre quando o preço fecha ALÉM do OB.' },
      { id: 'b', text: 'Sim — o OB ainda é válido. A penetração parcial cria um "Mitigation Block" — zona de entrada mais precisa no meio do OB', isCorrect: true, explanation: 'Correto. Penetração até 50-60% do OB sem fechar além = o OB foi parcialmente "mitigado" mas ainda contém ordens. O nível de maior concentração agora é o Mitigation Block — tipicamente o CE (meio do OB). Esse pode ser um ponto de entrada mais preciso.' },
      { id: 'c', text: 'Depende exclusivamente do volume durante a penetração', isCorrect: false, explanation: 'Volume é contexto mas não é o critério de validação. A chave é: o preço FECHOU além do OB?' },
      { id: 'd', text: 'Sim, mas apenas se o preço rejeitar imediatamente com um wick', isCorrect: false, explanation: 'O wick de rejeição é positivo mas não é o único critério. Fechamento dentro do OB (não além) mantém a validade.' },
    ],
    explanation: 'OB parcialmente penetrado ≠ OB inválido. Continue monitorando o CE (meio do OB) como ponto de entrada refinado — o Mitigation Block.',
  },
  {
    id: 'q-ob-3',
    conceptId: 'order-block',
    type: 'differentiation',
    difficulty: 'intermediate',
    level: 2,
    question: 'O que diferencia um Order Block válido de uma simples vela de baixa aleatória?',
    options: [
      { id: 'a', text: 'O tamanho do corpo da vela — OB tem sempre corpo maior que 70%', isCorrect: false, explanation: 'Tamanho de corpo não é o critério. Existem OBs com corpo pequeno que são válidos.' },
      { id: 'b', text: 'O movimento impulsivo que SAIU do OB — deve ser forte, rápido e pelo menos 2-3x o tamanho da vela OB', isCorrect: true, explanation: 'Exato. A vela OB em si pode ser qualquer tamanho — o que valida o OB é o movimento que saiu dela.움포 impulsivo = muitas ordens institucionais executadas naquele nível. Se a saída for fraca, não há evidência de atividade institucional suficiente.' },
      { id: 'c', text: 'O OB deve sempre estar na região de premium do Fibonacci de um swing maior', isCorrect: false, explanation: 'OBs podem estar em qualquer nível. O que aumenta a probabilidade é quando o OB está em premium/discount — mas não é requisito de validade.' },
      { id: 'd', text: 'O OB precisa ser a primeira vela de uma série de velas bearish', isCorrect: false, explanation: 'Não — o OB é a ÚLTIMA vela bearish antes do movimento bullish. Pode ter múltiplas velas bearish antes; o OB é a última delas.' },
    ],
    explanation: 'O OB é identificado retroativamente pelo movimento que gerou. Se saiu forte e impulsivo → há evidência de ordens institucionais. Se saiu fraco → suspeito, pode ser apenas ruído.',
  },
  {
    id: 'q-ob-4',
    conceptId: 'order-block',
    type: 'application',
    difficulty: 'advanced',
    level: 3,
    question: 'Você identifica um bullish OB no H1 que coincide com um bearish OB no H4 no mesmo nível de preço. O que isso indica?',
    options: [
      { id: 'a', text: 'Conflito de timeframes — evitar operar nesse nível', isCorrect: false, explanation: 'Conflito sim, mas a solução não é necessariamente evitar — é entender qual timeframe domina e qual é o contexto maior.' },
      { id: 'b', text: 'O H4 domina — o nível provavelmente funcionará como resistência/bearish OB, tornando o bullish OB do H1 menos confiável', isCorrect: true, explanation: 'Correto. Hierarquia de timeframes: H4 > H1. Se o H4 tem um bearish OB naquele nível, a pressão vendedora institucional de timeframe maior domina. O bullish OB do H1 perde força significativamente. O contexto do H4 invalida ou enfraquece o setup de H1.' },
      { id: 'c', text: 'Os dois OBs se cancelam e o nível se torna zona neutra de consolidação', isCorrect: false, explanation: 'Não necessariamente se cancelam — o HTF domina, então o bearish OB do H4 tem precedência.' },
      { id: 'd', text: 'É uma confluência rara — opera qualquer dos dois lados com mais confiança', isCorrect: false, explanation: 'Não é confluência positiva — é conflito. E conflito no mesmo nível entre OBs opostos em timeframes diferentes é sinal de cautela, não de oportunidade.' },
    ],
    explanation: 'Regra de ouro: quando H4 conflita com H1, o H4 ganha. Sempre. Só opere bull OBs de H1 quando o contexto de H4 também for bullish.',
  },

  // ─────────────────────────────────────────
  // FVG
  // ─────────────────────────────────────────
  {
    id: 'q-fvg-1',
    conceptId: 'fvg',
    type: 'conceptual',
    difficulty: 'beginner',
    level: 1,
    question: 'O que precisa acontecer entre 3 velas para formar um Bullish FVG?',
    options: [
      { id: 'a', text: 'O corpo da vela 2 deve ser maior que as velas 1 e 3 combinadas', isCorrect: false, explanation: 'Tamanho de corpo não é o critério. O FVG é definido pelas EXTREMIDADES (wicks) das velas 1 e 3.' },
      { id: 'b', text: 'O wick BAIXO da vela 3 deve estar ACIMA do wick ALTO da vela 1 — criando um espaço não negociado', isCorrect: true, explanation: 'Correto. Bullish FVG: existe um espaço entre o high da vela 1 e o low da vela 3 que nunca foi negociado. Este "gap" é o FVG. A vela 2 (impulsiva) "pulou" esse espaço de preço, deixando um desequilíbrio que o algoritmo vai preencher.' },
      { id: 'c', text: 'As 3 velas devem ser todas bullish (fechamento acima de abertura)', isCorrect: false, explanation: 'As cores das velas não definem o FVG. O que define é o gap entre as extremidades da vela 1 e da vela 3.' },
      { id: 'd', text: 'O volume da vela 2 deve ser 3x acima da média', isCorrect: false, explanation: 'Volume elevado na vela 2 é esperado (movimento impulsivo), mas não é o critério de definição do FVG.' },
    ],
    explanation: 'FVG = gap de 3 velas. Visualize: vela 1 (normal) → vela 2 (impulsiva, cria o gap) → vela 3 (o low dela está acima do high da vela 1). O espaço entre high(vela1) e low(vela3) é o FVG.',
  },
  {
    id: 'q-fvg-2',
    conceptId: 'fvg',
    type: 'application',
    difficulty: 'intermediate',
    level: 2,
    question: 'Você identifica um bullish FVG. O preço retornou e preencheu 100% do FVG (fechou além do limite inferior do FVG). O que fazemos com esse FVG?',
    options: [
      { id: 'a', text: 'O FVG ainda é válido — pode funcionar como suporte na segunda visita', isCorrect: false, explanation: 'FVG 100% preenchido perde sua validade como zona de entrada. A lógica do "desequil íbrio" foi resolvida.' },
      { id: 'b', text: 'O FVG foi invalidado — preenchimento completo significa que o desequilíbrio foi resolvido. Remover da análise.', isCorrect: true, explanation: 'Correto. Quando o FVG é 100% preenchido (preço fechou abaixo do low do FVG no caso bullish), o desequilíbrio foi resolvido pelo algoritmo. Esse FVG não tem mais magnetismo. Remova-o da análise e busque o próximo PoI.' },
      { id: 'c', text: 'O FVG virou um Bearish FVG — pode entrar vendido ali', isCorrect: false, explanation: 'FVG preenchido não vira FVG na direção oposta. O nível pode se tornar S/R ou Breaker Block, mas não FVG invertido.' },
      { id: 'd', text: 'Isso nunca acontece — FVGs nunca são 100% preenchidos', isCorrect: false, explanation: 'FVGs são frequentemente 100% preenchidos — especialmente quando não alinhados com a tendência maior ou em contextos de range.' },
    ],
    explanation: 'FVG preenchido = objetivo cumprido. O desequilíbrio foi resolvido. Limpe o nível da sua análise. FVGs com preenchimento parcial (50%) ainda têm valor como zona de entrada refinada (CE).',
  },
  {
    id: 'q-fvg-3',
    conceptId: 'fvg',
    type: 'differentiation',
    difficulty: 'advanced',
    level: 3,
    question: 'FVG pequeno (0.5 pip) em M1 vs FVG grande (5 pips) em M15. Em qual você confia mais para uma entrada?',
    options: [
      { id: 'a', text: 'FVG de M1 — timeframe menor = entrada mais precisa', isCorrect: false, explanation: 'Precisão de entrada ≠ qualidade do FVG. FVG minúsculo de M1 pode ser ruído de spread.' },
      { id: 'b', text: 'FVG de M15 — timeframe maior + tamanho relevante vs ATR = mais evidência de desequilíbrio institucional', isCorrect: true, explanation: 'Correto. Hierarquia de FVGs: quanto maior o timeframe, mais evidência de atividade institucional. Além disso, o tamanho do FVG relativo ao ATR importa — 5 pips em M15 com ATR de 15 pips é relevante. 0.5 pip em M1 pode ser ruído de microestrutura.' },
      { id: 'c', text: 'São equivalentes — o que importa é o contexto, não o tamanho ou timeframe', isCorrect: false, explanation: 'Contexto importa, mas timeframe e tamanho relativo ao ATR também. Não são equivalentes.' },
      { id: 'd', text: 'FVG de M1 — porque vai ser preenchido mais rápido e você entra sooner', isCorrect: false, explanation: 'Velocidade de preenchimento não é critério de qualidade. FVG de M15 sendo preenchido = movimento institucional de maior magnitude.' },
    ],
    explanation: 'Hierarquia: FVG H4 > FVG H1 > FVG M15 > FVG M5 > FVG M1. Use FVGs de LTF para afinar entrada dentro de FVGs de HTF — nunca substitua um pelo outro.',
  },

  // ─────────────────────────────────────────
  // SETUP COMPLETO
  // ─────────────────────────────────────────
  {
    id: 'q-cs-1',
    conceptId: 'complete-setup',
    type: 'application',
    difficulty: 'intermediate',
    level: 1,
    question: 'Num setup dos 8 passos, qual é a REGRA ABSOLUTA que invalida todo o setup imediatamente?',
    options: [
      { id: 'a', text: 'FVG não formado no M15', isCorrect: false, explanation: 'FVG é importante (passo 5) mas pode ser substituído por OB em contextos específicos. Não é a regra ABSOLUTA.' },
      { id: 'b', text: 'Spread acima de 2.5 pips', isCorrect: false, explanation: 'Spread alto é filtro hard mas não é A regra absoluta que invalida ANTES de checar qualquer outro critério.' },
      { id: 'c', text: 'H4 não alinhado com a direção do setup — sem alinhamento H4 = WAIT imediato, sem exceções', isCorrect: true, explanation: 'CORRETO. Esta é a regra #1 do SmartFlow e ICT: sem o H4 alinhado, nenhum outro critério importa. Mesmo 7/8 passos perfeitos — se H4 não confirmar, é WAIT. O H4 é o filtro que elimina a maioria dos trades perdedores.' },
      { id: 'd', text: 'Ausência de notícias de alto impacto no calendário', isCorrect: false, explanation: 'Notícias são filtro de contexto importante, mas o H4 não alinhado é a regra mais fundamental.' },
    ],
    explanation: 'Grave no músculo: H4 alinhado é a fundação de tudo. Antes de verificar qualquer outro critério, check H4. Se não estiver alinhado — pare. Não continue a análise. WAIT.',
    institutionalNote: 'Esta regra existe porque sem H4 alinhado, você estaria operando contra a tendência de maior impacto institucional — exatamente o oposto de surfar com o smart money.',
  },
  {
    id: 'q-cs-2',
    conceptId: 'complete-setup',
    type: 'application',
    difficulty: 'intermediate',
    level: 2,
    question: 'Um setup tem os passos 1-7 confirmados (7/8). O BOS M5 (passo 7) foi fraco (corpo 40%). Engolfo M1 (passo 8) ainda não formou. O que fazer?',
    options: [
      { id: 'a', text: 'Entrar agora com 7/8 — a confluência é alta o suficiente', isCorrect: false, explanation: 'O passo 8 (engolfo M1) é o gatilho de entrada precisa — aguardar garante que você entra quando has institucionais estão ativamente comprando/vendendo.' },
      { id: 'b', text: 'Aguardar o engolfo M1. Se confirmar, entrar com lote reduzido por causa do BOS M5 fraco.', isCorrect: true, explanation: 'Correto. Os 8 passos são sequenciais — aguardar o engolfo M1. O BOS M5 fraco (40% de corpo) reduz a convicção (setup 7/10 → 8/10), indicando lote reduzido quando entrar. Mas o engolfo M1 ainda é necessário como gatilho.' },
      { id: 'c', text: 'Cancelar o setup — BOS M5 fraco invalida todo o setup', isCorrect: false, explanation: 'BOS M5 fraco não invalida — reduz a nota do setup (talvez de 9 para 7-8). Você aguarda o engolfo e enter com lote menor.' },
      { id: 'd', text: 'Aumentar o alvo (TP) para compensar o risco do BOS M5 fraco', isCorrect: false, explanation: 'A resposta ao BOS fraco é reduzir o TAMANHO da posição, não aumentar o alvo. Alvos são definidos por estrutura, não por compensação de risco.' },
    ],
    explanation: 'Setup de 7/8 com BOS M5 fraco = score 7-8/10 (MODERADO). Aguardar engolfo M1 como gatilho obrigatório. Entrar com lote reduzido. Nunca antecipar o passo 8.',
  },
  {
    id: 'q-cs-3',
    conceptId: 'complete-setup',
    type: 'conceptual',
    difficulty: 'advanced',
    level: 3,
    question: 'O preço fez o setup completo (8/8) às 16h BRT. Você decide entrar. O que está errado?',
    options: [
      { id: 'a', text: 'Nada — 8/8 é sempre válido independente do horário', isCorrect: false, explanation: 'O horário é um filtro obrigatório. 8/8 no horário errado tem performance muito inferior ao mesmo setup na killzone correta.' },
      { id: 'b', text: '16h BRT (13h NY) é a transição NY AM / NY PM — zona de baixo volume (almoço NY). O timing invalida parcialmente o setup.', isCorrect: true, explanation: 'Perfeito. 12h-14h NY é o "almoço" — volume institucional cai drasticamente. Setups nessa janela têm muito mais falsos começos e retornos choppy. Mesmo um 8/8 nesse horário tem probabilidade reduzida. Na dúvida, aguardar a sessão NY PM (14h-17h).' },
      { id: 'c', text: 'O setup está correto. Mas verificar se o spread está ok.', isCorrect: false, explanation: 'Spread é importante mas o problema principal aqui é o horário — fora de killzone de alta probabilidade.' },
      { id: 'd', text: 'O setup é válido para EURUSD apenas até 15h BRT', isCorrect: false, explanation: 'Não há um cutoff fixo de 15h. O problema é o período de baixo volume (12h-14h NY = 13h-15h BRT), não uma regra de cutoff absoluto.' },
    ],
    explanation: 'Timing + setup = probabilidade final. Um 8/8 na killzone correta (NY AM 10h-12h NY) tem probabilidade muito maior que o mesmo 8/8 no almoço NY. Ambos têm os critérios, mas o contexto de volume é diferente.',
  },
  {
    id: 'q-cs-4',
    conceptId: 'complete-setup',
    type: 'differentiation',
    difficulty: 'advanced',
    level: 3,
    question: 'Você tem um setup 9/10 (forte) EURUSD. O Gemini Flash gerou análise. O Gemini Pro confirmou com "score 9, COMPRA". O que você faz?',
    options: [
      { id: 'a', text: 'Executar imediatamente — 9/10 com IA confirmando é certeza', isCorrect: false, explanation: 'Não existe certeza em trading. E a IA sugere — o trader decide. Esse é o princípio #1 do SmartFlow.' },
      { id: 'b', text: 'Avaliar o alerta, confirmar com sua própria análise rápida, e DECIDIR. A IA sugere — você decide sempre.', isCorrect: true, explanation: 'Exato. SmartFlow (e ICT) tem como princípio fundamental que o trader mantém a tomada de decisão. A IA é um filtro e confirmação — nunca uma ordem automática. Você pode discordar da IA se sua análise ver algo que o contexto não capturou.' },
      { id: 'c', text: 'Aguardar um segundo sinal da IA antes de executar', isCorrect: false, explanation: 'O segundo sinal é o Alerta 2 (engolfo M1) — e este é gerado pelo EA local, não pela IA. E mesmo assim, você ainda decide.' },
      { id: 'd', text: 'Nunca seguir sugestões de IA — operar apenas com análise própria', isCorrect: false, explanation: 'O objetivo do SmartFlow é AMPLIFICAR a análise do trader, não substituí-la. Ignorar os alertas quando eles existem desperdiça a vantagem do sistema.' },
    ],
    explanation: 'Princípio SmartFlow: "A sua própria estratégia, com um filtro inteligente, chegando no seu celular." Você lidera, a IA confirma. Nunca o inverso.',
  },
];
