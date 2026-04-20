import type { ConceptData } from '../../types';

export const institutionalLogicConcept: ConceptData = {
  id: 'institutional-logic',
  number: 1,
  title: 'Lógica Institucional',
  subtitle: 'Por que o mercado se move do jeito que se move',
  category: 'foundation',
  emoji: '🏦',
  tagline: 'O mercado não é aleatório — ele segue o algoritmo das instituições.',
  diagramType: 'institutional-flow',
  relatedConcepts: ['liquidity', 'order-block', 'market-structure'],
  quizIds: ['q-il-1', 'q-il-2', 'q-il-3'],
  flashcardIds: ['fc-il-1', 'fc-il-2', 'fc-il-3', 'fc-il-4'],

  level1: {
    whatItIs: `ICT (Inner Circle Trader) é baseado em uma premissa central: o mercado
    forex é controlado por um algoritmo computacional criado pelo Federal Reserve e 
    grandes instituições para entregar preço de forma eficiente. Esse algoritmo tem padrões 
    previsíveis — e SMC é o estudo desses padrões.`,

    institutionalLogic: `Quando um banco precisa comprar €500 milhões em EURUSD, não pode 
    simplesmente clicar "comprar" — isso moveria o mercado violentamente contra ele. 
    
    A solução? O algoritmo:
    1. Movimenta o preço para CIMA para acionar stops dos vendedores (criando liquidez de venda para o banco comprar)
    2. Varre esses stops (sweep de liquidez)
    3. Executa a mega compra nesse nível
    4. Move o mercado para cima com força
    
    O trader de varejo vê o spike e pensa "manipulação". ICT diz: "esse é o algoritmo entregando 
    preço para os institucionais. Aprenda a surfar com eles."`,

    keyInsight: `Você não está competindo contra instituições — você está SEGUINDO elas. 
    Quando você identifica onde o algoritmo vai buscar liquidez e em qual direção vai mover 
    depois, você entra junto com o smart money. Essa é a essência do ICT.`,
  },

  level2: {
    identificationRules: [
      {
        text: 'Sempre pergunte: "Quem está comprando/vendendo esta quantidade?" — se a resposta é "não faz sentido para varejo", é institucional.',
        valid: true,
      },
      {
        text: 'Movimentos impulsivos (velas longas, sem hesitação) são institucionais — eles têm capital suficiente para mover o mercado.',
        valid: true,
      },
      {
        text: 'Spikes que violam máximas/mínimas importantes e fecham de volta são stop hunts institucionais, não "fakeouts aleatórios".',
        valid: true,
      },
      {
        text: 'Tentar entrar SEM identificar o contexto institucional (liquidez, OB, tendência HTF).',
        valid: false,
      },
    ],
    commonMistakes: [
      'Achar que qualquer padrão de candle é uma "sinalização institucional" — sem contexto de liquidez e estrutura, não é.',
      'Confundir o algoritmo de entrega de preço com manipulação aleatória — tem lógica clara e previsível.',
      'Operar contra a tendência do timeframe maior achando que encontrou "o topo/fundo institucional".',
      'Ignorar sessões — os institucionais são mais ativos em horários específicos (Killzones).',
    ],
    invalidationRules: [
      'Sem contexto de timeframe maior (H4/D1), nenhum setup de timeframe menor é válido.',
      'Sem liquidez mapeada, não há por que o preço se mover com força.',
    ],
  },

  level3: {
    edgeCases: [
      'IPDA (Interbank Price Delivery Algorithm): o algoritmo entrega preço em ciclos de 20, 40 e 60 dias buscando PDAs (Price Delivery Areas) específicas.',
      'Quando DXY e EURUSD NÃO se movem inversamente como esperado, pode indicar acumulação institucional secreta em ambos.',
      'Manipulação de 15min antes das Killzones: o algoritmo frequentemente faz um spike "falso" antes de 10h NY para criar liquidez para o movimento real.',
    ],
    confluences: [
      'Lógica institucional + sessão de killzone = máxima probabilidade de movimento intencional.',
      'IPDA cycle + OB em nível de liquidez = setup de alta convicção.',
      'DXY confirmando + liquidez varrida + CHoCH = confluência máxima para bias do dia.',
    ],
    advancedNotes: [
      'ICT ensina que o NYSE Open (09:30 NY) e o London Open (08:00 GMT) são momentos onde o algoritmo frequentemente "reseta" o preço.',
      'O conceito de "Judas Swing": movimento inicial da sessão frequentemente é na direção ERRADA para coletar liquidez antes do movimento real.',
      'A Teoria dos 3 Drives: o algoritmo frequentemente fecha o dia tendo feito 3 movimentos claros — útil para Daily Bias.',
    ],
  },
};

export const marketStructureConcept: ConceptData = {
  id: 'market-structure',
  number: 2,
  title: 'Estrutura de Mercado',
  subtitle: 'HH · HL · LH · LL — A linguagem do preço',
  category: 'structure',
  emoji: '📊',
  tagline: 'Antes de qualquer setup, identifique a estrutura. Sem ela, tudo é ruído.',
  diagramType: 'market-structure',
  relatedConcepts: ['bos', 'choch', 'institutional-logic'],
  quizIds: ['q-ms-1', 'q-ms-2', 'q-ms-3', 'q-ms-4'],
  flashcardIds: ['fc-ms-1', 'fc-ms-2', 'fc-ms-3'],

  level1: {
    whatItIs: `Estrutura de mercado é o mapa do território. Antes de operar qualquer coisa, 
    você precisa saber: onde estamos? Indo para onde? O preço comunica sua intenção através 
    de sequências de máximas e mínimas.`,

    institutionalLogic: `Instituições constroem posições em fases — não entram tudo de uma vez. 
    A estrutura de mercado revela QUAL fase estamos:
    - HH+HL (trending alta): instituições estão comprando em pullbacks (nos HLs)
    - LH+LL (trending baixa): instituições estão vendendo em pullbacks (nos LHs)  
    - Lateralidade: acumulação ou distribuição — instituições construindo posição antes do move
    
    Saber a estrutura do H4 te diz COM QUEM você deve operar.`,

    keyInsight: `A estrutura do timeframe maior (H4/D1) define o VIÉS. Você só opera 
    setups de compra se H4 está fazendo HH+HL. Você só opera setups de venda se H4 
    está fazendo LH+LL. Operar contra a estrutura maior é brigar com quem tem €500M.`,
  },

  level2: {
    identificationRules: [
      { text: 'HH (Higher High): nova máxima ACIMA da máxima anterior — estrutura de alta.', valid: true },
      { text: 'HL (Higher Low): nova mínima ACIMA da mínima anterior — alta mantida.', valid: true },
      { text: 'LH (Lower High): nova máxima ABAIXO da máxima anterior — estrutura de baixa.', valid: true },
      { text: 'LL (Lower Low): nova mínima ABAIXO da mínima anterior — baixa mantida.', valid: true },
      { text: 'Swing relevante: mínimo 5 velas de cada lado para considerar um swing como tal.', valid: true },
      { text: 'Considerar qualquer máxima como HH sem verificar se superou a máxima ANTERIOR.', valid: false },
      { text: 'Marcar swings em velas isoladas sem confluência lateral — isso não é swing significativo.', valid: false },
    ],
    commonMistakes: [
      'Confundir microestrutura (M1/M5) com macroestrutura (H4/D1) — o que importa é o timeframe de contexto.',
      'Marcar cada zig-zag como mudança de estrutura — sequências precisam ser estabelecidas (mínimo 2 pontos).',
      'Ignorar a estrutura quando ela "incomoda" o setup que você quer operar.',
      'Não identificar lateralidade como estrutura — range também é uma posição do mercado.',
    ],
    invalidationRules: [
      'Se o preço viola um HL sem retornar → a estrutura de alta pode estar quebrando (prepare-se para CHoCH).',
      'LH mantido com LL não confirmado = aviso de transição, não confirmação.',
    ],
  },

  level3: {
    edgeCases: [
      'Equal Highs/Lows (EQH/EQL): máximas ou mínimas no MESMO nível são pools de liquidez — não é estrutura estável, é isca.',
      'Estrutura fractal: H4 pode estar em alta mesmo com D1 em baixa — operar na direção do H4 mas com alvos mais conservadores (resistência do D1).',
      'False Structure Break: preço viola uma máxima/mínima, fecha além, mas na próxima vela fecha de volta → fakeout estrutural, não BOS verdadeiro.',
    ],
    confluences: [
      'HH+HL no H4 + pullback para OB H1 = setup de compra de alta convicção.',
      'LH+LL no D1 + LH no H4 = bias vendedor consistente em múltiplos timeframes.',
      'Equal Highs no H4 + sessão de killzone chegando = sweep de liquidez iminente.',
    ],
    advancedNotes: [
      'ICT usa o conceito de "Market Structure Shift (MSS)" para identificar mudanças antes que sejam óbvias para o mercado.',
      'O H4 é o timeframe de estrutura principal para day trading em EURUSD.',
      'Swings em D1 e H4 têm maior probabilidade de serem respeitados que swings em H1/M15.',
    ],
  },
};

export const bosConcept: ConceptData = {
  id: 'bos',
  number: 3,
  title: 'BOS — Break of Structure',
  subtitle: 'Confirmação de mudança direcional',
  category: 'structure',
  emoji: '⚡',
  tagline: 'O BOS não é sinal de entrada — é confirmação de que a estrutura mudou.',
  diagramType: 'bos',
  relatedConcepts: ['choch', 'market-structure', 'fvg'],
  quizIds: ['q-bos-1', 'q-bos-2', 'q-bos-3'],
  flashcardIds: ['fc-bos-1', 'fc-bos-2', 'fc-bos-3'],

  level1: {
    whatItIs: `BOS (Break of Structure) é quando o preço rompe uma máxima ou mínima 
    relevante da estrutura atual, confirmando que a direção está se mantendo ou acelerando. 
    Em tendência de alta, BOS é romper uma máxima anterior para um novo HH.`,

    institutionalLogic: `Quando instituições completam uma rodada de compras e querem sinalizar 
    continuação para o mercado, elas empurram o preço além da máxima anterior. Isso:
    1. Aciona stops dos vendedores que estavam apostando na reversão
    2. Atrai mais compradores (breakout traders)
    3. Cria momentum para a próxima fase de acumulação
    O BOS é a confirmação de que as instituições estão comprometidas com a direção.`,

    keyInsight: `BOS ≠ entrada. BOS é a confirmação de que você tem o contexto certo. 
    Depois do BOS, você espera o pullback para um OB ou FVG para entrar. 
    Entrar no BOS é comprar no topo de uma vela impulsiva — amador.`,
  },

  level2: {
    identificationRules: [
      { text: 'Em tendência de alta: BOS = fechamento de vela acima de uma máxima relevante anterior (com corpo, não só wick).', valid: true },
      { text: 'Em tendência de baixa: BOS = fechamento de vela abaixo de uma mínima relevante anterior.', valid: true },
      { text: 'O nível rompido deve ser um swing significativo — mínimo 5 velas de confluência lateral.', valid: true },
      { text: 'BOS válido deve ter corpo de vela maior que 50% — wick sozinho não conta.', valid: true },
      { text: 'Considerar qualquer penetração de máxima como BOS, incluindo wicks sem fechamento.', valid: false },
      { text: 'BOS em M1 sozinho sem alinhamento com M15/H1 como confirmação de direção.', valid: false },
    ],
    commonMistakes: [
      'Entrar no BOS em vez de esperar o pullback — você compra o pico de momentum, não a zona de valor.',
      'Confundir BOS com CHoCH — BOS mantém a tendência, CHoCH é o INÍCIO de reversão.',
      'BOS inválido: rompe a máxima mas fecha abaixo dela (wick de rejeição) — isso é um sweep, não BOS.',
      'Usar BOS de M1 como referência para operações de H1/H4 — fractal errado.',
    ],
    invalidationRules: [
      'Se após o BOS o preço retorna e fecha abaixo do nível rompido → BOS falso, sinal de reversão.',
      'BOS sem volume relativo elevado é suspeito — pode ser liquidez sendo varrida antes de reversão.',
    ],
  },

  level3: {
    edgeCases: [
      'BOS Fraco vs BOS Forte: BOS com corpo pequeno e sem retração para testar o nível é fraco — probabilidade de pullback profundo antes de continuar.',
      'BOS na sessão de baixo volume (fora de killzone): menos confiável — pode ser squeeze de liquidez sem seguimento.',
      'Múltiplos BOS sem pullback: quando o preço faz 2-3 BOS consecutivos sem pullback, é exaustão — não chase.',
    ],
    confluences: [
      'BOS M15 + FVG formado na volta + OB alinhado = entrada clássica ICT.',
      'BOS H4 + pullback para OB H1 na killzone = setup premium.',
      'BOS M5 como confirmação adicional após BOS M15 = alta convicção (setup SmartFlow).',
    ],
    advancedNotes: [
      'ICT diferencia "external BOS" (rompe um swing externo) de "internal BOS" (rompe um swing interno da range) — o externo é mais significativo.',
      'O nível do BOS se torna suporte/resistência após ser rompido — preço frequentemente retorna para testá-lo.',
      'BOS na abertura de sessão (primeiros 15min) tem maior probabilidade de ser falso (Judas Swing).',
    ],
  },
};

export const chochConcept: ConceptData = {
  id: 'choch',
  number: 4,
  title: 'CHoCH — Change of Character',
  subtitle: 'O primeiro sinal de reversão',
  category: 'structure',
  emoji: '🔄',
  tagline: 'CHoCH é quando o preço te avisa: "o jogo pode estar mudando".',
  diagramType: 'choch',
  relatedConcepts: ['bos', 'market-structure', 'order-block'],
  quizIds: ['q-choch-1', 'q-choch-2', 'q-choch-3'],
  flashcardIds: ['fc-choch-1', 'fc-choch-2'],

  level1: {
    whatItIs: `CHoCH (Change of Character) é o PRIMEIRO sinal de que a tendência atual pode 
    estar se revertendo. Diferente do BOS (que confirma continuação), o CHoCH quebra a 
    estrutura NA DIREÇÃO CONTRÁRIA à tendência atual.
    
    Em tendência de alta: CHoCH = violação de um HL (Higher Low) anterior.
    Em tendência de baixa: CHoCH = violação de um LH (Lower High) anterior.`,

    institutionalLogic: `Quando as instituições decidem finalizar uma posição e começar a 
    distribuir (ou acumular no sentido contrário), o algoritmo precisa "quebrar o personagem" 
    do movimento atual. O CHoCH é essa quebra:
    - Em alta: as instituições param de defender os HLs e deixam o preço violar um deles
    - Em baixa: as instituições param de defender os LHs e deixam o preço violar um deles
    
    É o algoritmo sinalizando: "a ordem institucional mudou nesta direção."`,

    keyInsight: `CHoCH ≠ reversão confirmada. CHoCH é o AVISO. Você não entra no CHoCH 
    diretamente — você usa o CHoCH para começar a procurar setups na nova direção. 
    A confirmação vem quando o preço faz um BOS na nova direção.`,
  },

  level2: {
    identificationRules: [
      { text: 'Em alta: CHoCH = fechamento de vela ABAIXO de um HL relevante (violação da estrutura de alta).', valid: true },
      { text: 'Em baixa: CHoCH = fechamento de vela ACIMA de um LH relevante.', valid: true },
      { text: 'O nível violado deve ser um swing relevante (mínimo 5 velas de confluência).', valid: true },
      { text: 'CHoCH com fechamento fraco (menos de 50% do corpo) é sinal fraco — aguardar confirmação.', valid: true },
      { text: 'Tratar CHoCH como sinal de entrada imediata sem aguardar confirmação de BOS na nova direção.', valid: false },
      { text: 'Confundir um pullback profundo (mas que não viola o HL) com CHoCH.', valid: false },
    ],
    commonMistakes: [
      'Entrar imediatamente no CHoCH — é apenas o primeiro sinal, não a confirmação.',
      'Confundir CHoCH com BOS: BOS mantém tendência, CHoCH quebra ela.',
      'CHoCH em timeframe menor sem confirmação no timeframe maior — pode ser ruído.',
      'Ignorar CHoCH forte na H4 enquanto opera compras baseado em M15 — o H4 manda.',
    ],
    invalidationRules: [
      'Se após CHoCH o preço imediatamente retesta e fecha acima do nível violado → falso CHoCH.',
      'CHoCH sem subsequente BOS na nova direção = suspeito, pode ser apenas swing com profundidade.',
    ],
  },

  level3: {
    edgeCases: [
      'CHoCH Suave vs CHoCH Agressivo: suave = violação mínima (testou e fechou levemente abaixo); agressivo = corpo grande e decisivo. O agressivo tem maior probabilidade de ser o início de reversão.',
      'CHoCH Falso: frequente próximo a zonas de liquidez. O preço viola o HL, coleta os stops, e retoma a tendência de alta. Isso é um stop hunt, não uma reversão.',
      'CHoCH em múltiplos timeframes: CHoCH em M15 + CHoCH em H1 ao mesmo tempo = risco muito alto de reversão significativa.',
    ],
    confluences: [
      'CHoCH + OB na nova direção + killzone = primeiro setup na nova tendência.',
      'CHoCH em H4 + Daily confirma mudança de estrutura = oportunidade de swing.',
      'CHoCH + FVG + sweep de liquidez = confluência máxima para reversão.',
    ],
    advancedNotes: [
      'ICT usa CH"oC"H para identificar o início do "Smart Money Reversal" antes que o mercado perceba.',
      'O nível do CHoCH frequentemente se torna pivô — preço retorna para testá-lo antes de continuar.',
      'Na abertura NY, CHoCH frequente são parte do "Judas Swing" — aguardar até 10h-11h para confirmar.',
    ],
  },
};

export const liquidityConcept: ConceptData = {
  id: 'liquidity',
  number: 5,
  title: 'Liquidez',
  subtitle: 'BSL · SSL · EQH · EQL — Onde os stops estão',
  category: 'liquidity',
  emoji: '💧',
  tagline: 'O mercado é magnético para stops. Saiba onde estão e você sabe onde o preço vai.',
  diagramType: 'liquidity-pools',
  relatedConcepts: ['stop-hunt', 'order-block', 'market-structure', 'institutional-logic'],
  quizIds: ['q-liq-1', 'q-liq-2', 'q-liq-3', 'q-liq-4'],
  flashcardIds: ['fc-liq-1', 'fc-liq-2', 'fc-liq-3', 'fc-liq-4'],

  level1: {
    whatItIs: `Liquidez em SMC são os stops acumulados acima de máximas e abaixo de mínimas 
    relevantes. Quando traders de varejo colocam stop loss acima de uma máxima (em shorts) 
    ou abaixo de uma mínima (em longs), eles criam um pool de ordens que as instituições 
    precisam para executar suas posições.
    
    BSL = Buy Side Liquidity (stops de vendedores acima das máximas)
    SSL = Sell Side Liquidity (stops de compradores abaixo das mínimas)`,

    institutionalLogic: `Uma instituição que quer vender €1 bilhão em EURUSD precisa de 
    compradores para absorver essa venda. Onde estão os compradores a mercado? 
    Nos stops dos vendedores (BSL) — acima das máximas.
    
    Então o algoritmo SOBE o preço até as máximas, aciona os stops (compradores automáticos), 
    e a instituição VENDE para esses compradores. 
    O preço então cai — e os traders de varejo ficam sem entender por que o "breakout" falhou.`,

    keyInsight: `Antes de qualquer setup, mapeie a liquidez. Pergunte: 
    "Se o preço subir, quais stops vai acionar?" e "Se cair, quais stops vai acionar?"
    O preço sempre busca liquidez ANTES de mover na direção verdadeira.`,
  },

  level2: {
    identificationRules: [
      { text: 'BSL: identificar máximas relevantes onde traders provavelmente estão com stops (acima de resistências óbvias).', valid: true },
      { text: 'SSL: identificar mínimas relevantes onde traders provavelmente estão com stops (abaixo de suportes óbvios).', valid: true },
      { text: 'EQH (Equal Highs): duas ou mais máximas no mesmo nível = pool de liquidez BSL concentrado.', valid: true },
      { text: 'EQL (Equal Lows): duas ou mais mínimas no mesmo nível = pool de liquidez SSL concentrado.', valid: true },
      { text: 'Quanto mais óbvio o nível de suporte/resistência para o varejo, maior o pool de liquidez.', valid: true },
      { text: 'Assumir que porque é uma resistência óbvia o preço vai reverter ali — exatamente o oposto: vai swept primeiro.', valid: false },
    ],
    commonMistakes: [
      'Não mapear a liquidez antes de entrar — você entra sem saber se o preço vai buscar seus stops primeiro.',
      'Colocar stop exatamente na mínima/máxima óbvia — exatamente onde o algoritmo vai buscar.',
      'EQH/EQL como resistência/suporte → na verdade são ALVOS do algoritmo, não pontos de reversão.',
      'Confundir pool de liquidez já varrido com pool ainda intacto — uma vez varrido, perde o magnetismo.',
    ],
    invalidationRules: [
      'Liquidez já varrida (swept): após o preço visitar o nível e fechar de volta, o pool foi consumido.',
      'Liquidez em timeframe menor pode ser irrelevante se não há pool correspondente no timeframe maior.',
    ],
  },

  level3: {
    edgeCases: [
      'Liquidez em cascata: múltiplos pools alinhados — o preço pode varrer o primeiro e pausar antes de continuar para o segundo.',
      'Trendline Liquidity: traders colocam stops ao longo de uma trendline — o algoritmo varre a trendline antes de continuar na direção.',
      'Old Highs/Lows (PDH/PDL): Previous Day High/Low são pools de liquidez especialmente importantes para operações intraday.',
    ],
    confluences: [
      'EQH + OB logo abaixo = setup de venda após sweep (sell the rip).',
      'SSL + FVG logo acima = compra após sweep das mínimas.',
      'Liquidez na região de prêmio do Fibonacci = zoom-in do setup completo ICT.',
    ],
    advancedNotes: [
      'Previous Week High/Low (PWH/PWL), Previous Month High/Low (PMH/PML) são os grandes alvos institucionais.',
      'ICT ensina que o NY Open (09:30) frequentemente varre ou testa o Previous Day High or Low antes de estabelecer direção.',
      'Quando o preço varre BSL e fecha de volta abaixo da máxima → bearish reversal signal.',
    ],
  },
};

export const stopHuntConcept: ConceptData = {
  id: 'stop-hunt',
  number: 6,
  title: 'Stop Hunt / Liquidity Sweep',
  subtitle: 'O pré-movimento que confunde o varejo',
  category: 'liquidity',
  emoji: '🪤',
  tagline: 'Não é manipulação. É o algoritmo coletando combustível antes de decolar.',
  diagramType: 'stop-hunt',
  relatedConcepts: ['liquidity', 'choch', 'order-block', 'fvg'],
  quizIds: ['q-sh-1', 'q-sh-2', 'q-sh-3'],
  flashcardIds: ['fc-sh-1', 'fc-sh-2', 'fc-sh-3'],

  level1: {
    whatItIs: `Stop Hunt (ou Liquidity Sweep) é quando o preço ultrapassa uma máxima ou 
    mínima relevante — acionando os stops dos traders — e rapidamente reverte na direção 
    oposta. É um dos padrões mais frustrantes para o trader de varejo e mais lucrativos 
    quando você aprende a reconhecê-lo.`,

    institutionalLogic: `O algoritmo precisa de ordens a mercado para executar posições 
    institucionais de grande volume. A melhor fonte são os stops dos traders.
    
    Mecanismo do Stop Hunt:
    1. Preço sobe até uma máxima visível (EQH, PDH, resistência óbvia)
    2. Viola essa máxima por alguns pips — acionando stops de vendedores e ordens de compra de breakout
    3. Essas novas ordens de compra = liquidez para as instituições VENDEREM
    4. Preço fecha de volta abaixo da máxima e cai
    
    O stop hunt cria o combustível que alimenta o movimento real.`,

    keyInsight: `Quando você vê um spike que viola uma máxima/mínima e rapidamente reverte: 
    ISSO É OPORTUNIDADE, não motivo para sair. Após um stop hunt bem-feito (com CHoCH ou 
    FVG na volta), você tem alta probabilidade de entrada na direção REAL do movimento.`,
  },

  level2: {
    identificationRules: [
      { text: 'Violação rápida de máxima/mínima relevante (1-3 velas) seguida de fechamento de volta ao range anterior.', valid: true },
      { text: 'Wick longo além do nível sem fechar além — sinal claro de rejeição/sweep.', valid: true },
      { text: 'Volume elevado durante o spike — stops sendo acionados geram volume.', valid: true },
      { text: 'Após o sweep, identificar CHoCH ou FVG na volta = confirmação de reversão.', valid: true },
      { text: 'Entrar vendido/comprado imediatamente no spike sem aguardar fechamento de confirmação.', valid: false },
      { text: 'Assumir que todo spike é stop hunt — alguns são BOS verdadeiros. Aguardar o fechamento.', valid: false },
    ],
    commonMistakes: [
      'Entrar no spike (stop hunt) antes da confirmação → pode ser o início de BOS verdadeiro.',
      'Ignorar um stop hunt óbvio e entrar na direção do spike → você é a liquidez sendo coletada.',
      'Não verificar se há CHoCH ou FVG formado após o sweep antes de entrar.',
      'Stop hunt sem contexto de estrutura maior → pode ser apenas ruído no timeframe menor.',
    ],
    invalidationRules: [
      'Se o preço fecha além do nível violado e mantém por 2+ velas → não é stop hunt, é BOS.',
      'Stop hunt em timeframe menor sem contexto de liquidez no timeframe maior = ruído.',
    ],
  },

  level3: {
    edgeCases: [
      'Double Stop Hunt: preço faz stop hunt para cima, atrai vendedores, depois faz stop hunt para baixo, coleta os stops dos vendedores, e sobe de verdade.',
      'Stop Hunt sem FVG: o preço sweep + reverte mas sem FVG → reversão menos limpa, entrada com menos convicção.',
      'Stop Hunt em killzone vs fora dela: em killzone tem muito mais probabilidade de ser o movimento real.',
    ],
    confluences: [
      'Stop Hunt em EQH/EQL + CHoCH M15 + FVG = setup completo de reversão ICT.',
      'Stop Hunt na abertura de sessão + OB no nível varrido = entrada na killzone.',
      'Stop Hunt + Daily Bias confirmando reversão + sessão de alta liquidez = máxima convicção.',
    ],
    advancedNotes: [
      'ICT chama o stop hunt no início de sessão de "Judas Swing" — o preço vai na direção errada primeiro para criar liquidez.',
      'O nível de stop hunt frequentemente se torna o PoI (Point of Interest) mais forte depois — o preço pode retornar para testá-lo como nova s/r.',
      'A velocidade do retorno após o sweep importa: retorno lento = fraco; retorno com vela grande = forte reversão.',
    ],
  },
};

export const orderBlockConcept: ConceptData = {
  id: 'order-block',
  number: 7,
  title: 'Order Block',
  subtitle: 'Onde as ordens institucionais incompletas estão esperando',
  category: 'poi',
  emoji: '📦',
  tagline: 'O OB não é suporte/resistência — é onde os institucionais têm skin in the game.',
  diagramType: 'order-block',
  relatedConcepts: ['fvg', 'breaker-block', 'liquidity', 'bos'],
  quizIds: ['q-ob-1', 'q-ob-2', 'q-ob-3', 'q-ob-4'],
  flashcardIds: ['fc-ob-1', 'fc-ob-2', 'fc-ob-3', 'fc-ob-4'],

  level1: {
    whatItIs: `Order Block (OB) é a última vela contrária antes de um movimento impulsivo forte. 
    Bullish OB = última vela bearish antes de forte alta.
    Bearish OB = última vela bullish antes de forte queda.
    
    É o nível onde as instituições deixaram ordens de compra/venda que não foram completamente 
    executadas. Quando o preço retorna ao OB, essas ordens são completadas — e o movimento continua.`,

    institutionalLogic: `Uma instituição que queria comprar €500M:
    1. Colocou ordens de compra no nível X (o OB)
    2. O mercado apenas passou por ali rapidamente — não havia vendedores suficientes
    3. Executou apenas €200M das ordens
    4. Os outros €300M ficaram como ordens abertas no sistema
    5. Quando o preço retorna ao nível X, as ordens são completadas → preço sobe novamente
    
    É por isso que o OB "funciona" — não é suporte mágico, é ordens reais.`,

    keyInsight: `A diferença entre um OB e um suporte comum: o OB foi CRIADO por um 
    movimento impulsivo. Um suporte comum pode ser qualquer nível. 
    Quanto mais impulsivo o movimento que saiu do OB, mais orders estão presas lá.`,
  },

  level2: {
    identificationRules: [
      { text: 'Bullish OB: última vela bearish (close < open) antes de movimento bullish forte e impulsivo.', valid: true },
      { text: 'Bearish OB: última vela bullish (close > open) antes de movimento bearish forte e impulsivo.', valid: true },
      { text: 'O movimento que saiu do OB deve ser impulsivo — pelo menos 2-3x o tamanho do OB.', valid: true },
      { text: 'OB em contexto de estrutura alinhada: bullish OB apenas em tendência de alta do HTF.', valid: true },
      { text: 'Preferir OBs dentro da região de prêmio/desconto Fibonacci do swing maior.', valid: true },
      { text: 'Marcar qualquer vela bearish como bullish OB sem verificar o movimento que se seguiu.', valid: false },
      { text: 'Usar OB em timeframe que conflita com a estrutura do timeframe maior.', valid: false },
    ],
    commonMistakes: [
      'Marcar OB após o fato — parece fácil retroativamente, difícil em tempo real. Pratique identificar em tempo real.',
      'OB sem wick de rejeição quando o preço retorna: um OB robusto rejeita na primeira visita com wick claro.',
      'Confundir OB com suporte/resistência comum — OB precisa do movimento impulsivo subsequente para ser válido.',
      'OB "invertido": alguns confundem, mas o OB é ANTES do movimento, não a vela de impulso em si.',
    ],
    invalidationRules: [
      'OB mitigado: se o preço fecha PELA METADE ou mais do body do OB → parcialmente inválido (use breaker/mitigation block).', 
      'OB totalmente violado: preço fecha além do OB inteiro → OB inválido, vira bearish OB (breaker).',
      'OB em contexto de CHoCH: se a estrutura mudou, OBs da direção anterior perdem força.',
    ],
  },

  level3: {
    edgeCases: [
      'OB em múltiplos timeframes: um bullish OB em H4 que coincide com um bullish OB em H1 no mesmo nível → confluência máxima.',
      'OB em FVG: quando o OB está dentro de um FVG maior → ponto de entrada preciso dentro de zona de desequilíbrio.',
      'OB que foi tested mas não violado (protected OB): OBs que o preço visitou e rejeitou FICAM válidos para visitas futuras.',
    ],
    confluences: [
      'OB + Fibonacci premium (50-79%) + killzone + CHoCH = setup completo ICT/SmartFlow.',
      'OB H1 + FVG dentro do OB + BOS M15 = entrada de alta precisão.',
      'OB H4 + liquidez varrida logo abaixo + DXY confirmando = bias claro.',
    ],
    advancedNotes: [
      'ICT usa "Consequent Encroachment of OB" — o preço penetra até o meio do OB (CE) antes de reverter. CE = high+low/2 do OB.',
      'OBs mais recentes > OBs mais antigos em geral — mas OBs de HTF (H4/D1) têm mais força que OBs de LTF.',
      'O "Breaker Block" é o que acontece quando um OB é completamente violado e depois testado de volta.',
    ],
  },
};

export const fvgConcept: ConceptData = {
  id: 'fvg',
  number: 8,
  title: 'FVG — Fair Value Gap',
  subtitle: 'O desequilíbrio que o algoritmo precisa preencher',
  category: 'poi',
  emoji: '🕳️',
  tagline: 'O FVG é a evidência visual de que os institucionais passaram rápido demais.',
  diagramType: 'fvg',
  relatedConcepts: ['order-block', 'bos', 'stop-hunt'],
  quizIds: ['q-fvg-1', 'q-fvg-2', 'q-fvg-3'],
  flashcardIds: ['fc-fvg-1', 'fc-fvg-2', 'fc-fvg-3'],

  level1: {
    whatItIs: `Fair Value Gap (FVG) é uma lacuna de preço formada por 3 velas onde a vela 
    do meio é tão grande que há um espaço entre a vela 1 e a vela 3 que nunca foi negociado.
    
    Bullish FVG: wick baixo da vela 3 está ACIMA do wick alto da vela 1 (gap para cima).
    Bearish FVG: wick alto da vela 3 está ABAIXO do wick baixo da vela 1 (gap para baixo).
    
    Esse gap representa um desequilíbrio de preço que o algoritmo eventualmente preenche.`,

    institutionalLogic: `Quando instituições movem o preço impulsivamente (comprando em quantidade), 
    elas avançam tão rápido que não há negociação em toda a faixa de preço — cria-se um gap.
    O algoritmo de entrega de preço tem como função garantir "equilíbrio" — eventualmente 
    o preço volta para preencher esse gap, oferecendo a outros participantes a chance de negociar 
    no nível de "fair value". 
    
    Isso cria uma zona previsível onde o preço vai RETORNAR antes de continuar.`,

    keyInsight: `FVG = zona de entrada premium. O preço cria o FVG numa vela impulsiva, 
    depois RETORNA para preenchê-lo (parcialmente ou totalmente), e então continua na direção 
    do impulso. Entre no FVG, com SL abaixo do FVG, TP na próxima zona de liquidez.`,
  },

  level2: {
    identificationRules: [
      { text: 'Bullish FVG: low da vela 3 está ACIMA do high da vela 1 — gap visual entre as duas extremidades.', valid: true },
      { text: 'Bearish FVG: high da vela 3 está ABAIXO do low da vela 1.', valid: true },
      { text: 'FVG relevante: tamanho do gap deve ser proporcional ao ATR atual — gaps menores que 20% do ATR podem ser ruído.', valid: true },
      { text: 'FVG na direção da tendência do HTF tem maior probabilidade de ser respeitado.', valid: true },
      { text: 'Considerar FVG já totalmente preenchido (filled) como zona de entrada — perdeu a validade.', valid: false },
      { text: 'Entrar no início do FVG sem aguardar o retorno do preço à zona.', valid: false },
    ],
    commonMistakes: [
      'FVG em range lateral: sem contexto de tendência, FVGs são preenchidos imediatamente e não geram movimento.',
      'Confundir o FVG com a vela impulsiva em si — o FVG é o ESPAÇO entre as velas 1 e 3.',
      'Usar FVG de M1 como referência sem verificar se há OB ou estrutura maior suportando.',
      'FVG já visitado e preenchido: não tem mais magnetismo — não entrar nele de novo.',
    ],
    invalidationRules: [
      'FVG 100% preenchido: quando o preço fecha completamente dentro e além do FVG → inválido.',
      'FVG formado contra a tendência do H4: muito maior probabilidade de ser simplesmente preenchido sem dar continuidade.',
    ],
  },

  level3: {
    edgeCases: [
      'FVG Stacking: múltiplos FVGs em sequência — o preço preenche o mais próximo, pausa, e continua para o seguinte.',
      'FVG na abertura de sessão (Opening Gap): FVGs formados entre fechamento e abertura de sessão são especialmente fortes.',
      'FVG dentro de OB: entrada de alta precisão — você está no FVG E no OB simultaneamente.',
    ],
    confluences: [
      'FVG + OB no mesmo nível = zona de confluência máxima para entrada.',
      'FVG + BOS confirmado + killzone = setup completo ICT.',
      'FVG em premium (para venda) ou discount (para compra) + liquidez varrida = setup SmartFlow completo.',
    ],
    advancedNotes: [
      'ICT diferencia IFVG (Inversion Fair Value Gap) — FVG que depois de preenchido, inverte e se torna suporte/resistência.',
      'O ponto de entrada ideal dentro do FVG é o CE (Consequent Encroachment) = meio do FVG.',
      'Timeframes: FVG de H1 > FVG de M15 > FVG de M5 em termos de força. Mas confluence com OB de H4 é o melhor.',
    ],
  },
};

export const breakerBlockConcept: ConceptData = {
  id: 'breaker-block',
  number: 9,
  title: 'Breaker Block',
  subtitle: 'O OB que falhou — e virou o oposto',
  category: 'poi',
  emoji: '🔀',
  tagline: 'Um OB violado não está morto — ele inverteu de lado.',
  diagramType: 'breaker-block',
  relatedConcepts: ['order-block', 'choch', 'bos'],
  quizIds: ['q-bb-1', 'q-bb-2'],
  flashcardIds: ['fc-bb-1', 'fc-bb-2'],

  level1: {
    whatItIs: `Breaker Block é um Order Block que foi completamente violado pelo preço — 
    e então se torna uma zona de resistência (se era bullish OB) ou suporte (se era bearish OB).
    
    O conceito: quando o preço viola totalmente um bullish OB, significa que as compras 
    institucionais faliram. Quando o preço retorna ao nível do OB violado, as instituições 
    que estavam presas nas compras agora VENDEM (para cortar perda ou inverter posição) — 
    criando resistência.`,

    institutionalLogic: `Imagine: instituição comprou no OB bullish. O preço violou esse OB 
    para baixo — as compras estão com prejuízo. Quando o preço retorna ao nível do OB, 
    a instituição tem duas opções: segurar e rezar, ou VENDER para limitar o prejuízo.
    
    A maioria vende. Isso transforma o antigo suporte (bullish OB) numa resistência (bearish Breaker).`,

    keyInsight: `Identifique OBs que foram violados. Quando o preço retornar ao nível desses 
    OBs violados, considere a operação NA DIREÇÃO OPOSTA — agora é um Breaker Block, 
    não mais um OB de entrada na direção original.`,
  },

  level2: {
    identificationRules: [
      { text: 'Bullish OB que foi violado para baixo (preço fechou abaixo do low do OB) → vira Bearish Breaker.', valid: true },
      { text: 'Bearish OB que foi violado para cima (preço fechou acima do high do OB) → vira Bullish Breaker.', valid: true },
      { text: 'Breaker Block mais forte quando a violação foi acompanhada de CHoCH ou BOS na nova direção.', valid: true },
      { text: 'Usar o Breaker Block para entrada na MESMA direção do OB original.', valid: false },
    ],
    commonMistakes: [
      'Confundir OB parcialmente violado com Breaker — para ser Breaker, o OB inteiro deve ser violado.',
      'Usar Breaker como entrada sem confirmar que o retorno ao nível é uma nova oportunidade e não continuação de breakout.',
    ],
    invalidationRules: [
      'Se o preço retorna ao Breaker e fecha além dele (violando o Breaker também) → caos estrutural, sem entrada.',
    ],
  },

  level3: {
    edgeCases: [
      'Breaker + FVG: quando um Breaker Block coincide com um FVG na nova direção = zona de alta confluência.',
      'Múltiplos Breakers empilhados: indica caos estrutural — evitar operar até estrutura se estabelecer.',
    ],
    confluences: [
      'Breaker Block + estrutura H4 na nova direção = reversão de alta probabilidade.',
      'CHoCH + Breaker Block + FVG = trio de confirmação para reversão.',
    ],
    advancedNotes: [
      'ICT usa Breaker Blocks especialmente para identificar onde o smart money vai tomar lucro.',
      'Em mercados em tendência forte, Breakers frequentemente funcionam como pontos de S/R precisos para day trading.',
    ],
  },
};

export const mitigationBlockConcept: ConceptData = {
  id: 'mitigation-block',
  number: 10,
  title: 'Mitigation Block',
  subtitle: 'O OB parcialmente preenchido — ainda em jogo',
  category: 'poi',
  emoji: '⚖️',
  tagline: 'Quando o OB é visitado mas não violado, ele fica mais forte, não mais fraco.',
  diagramType: 'mitigation-block',
  relatedConcepts: ['order-block', 'breaker-block', 'fvg'],
  quizIds: ['q-mb-1', 'q-mb-2'],
  flashcardIds: ['fc-mb-1', 'fc-mb-2'],

  level1: {
    whatItIs: `Mitigation Block é o nível onde um Order Block foi parcialmente preenchido 
    — o preço entrou no OB mas não o violou completamente. As ordens remanescentes ainda 
    estão lá, e o bloco de mitigação é onde essas ordens residuais ficam concentradas.`,

    institutionalLogic: `A instituição tinha X ordens no OB. Na primeira visita, apenas 
    parte dessas ordens foi executada (mitigada). As ordens remanescentes estão no meio 
    do OB — no Mitigation Block. Na próxima visita, essas ordens residuais são completadas.`,

    keyInsight: `Mitigation Block = entrada de precisão cirúrgica dentro de um OB maior. 
    Se o OB é uma zona de X pips, o Mitigation Block afina essa zona para os pips mais 
    relevantes — onde as ordens residuais estão concentradas.`,
  },

  level2: {
    identificationRules: [
      { text: 'Identificar o OB válido primeiro, depois verificar se houve visita parcial ao OB.', valid: true },
      { text: 'Mitigation Block = zona DENTRO do OB onde o preço parou na primeira visita.', valid: true },
      { text: 'Usar o 50% do OB (CE) como referência para o Mitigation Block.', valid: true },
      { text: 'Considerar OB com primeira visita como OB normal para segunda entrada.', valid: false },
    ],
    commonMistakes: [
      'Confundir Mitigation Block com OB violado — no Mitigation, o OB não foi violado, apenas parcialmente penetrado.',
    ],
    invalidationRules: [
      'Se o preço fecha além do OB original → não é Mitigation, é violação → avalia Breaker.',
    ],
  },

  level3: {
    edgeCases: [
      'Mitigation Block + FVG dentro do OB = entrada de menor tamanho de SL com alta probabilidade.',
    ],
    confluences: [
      'OB H4 + Mitigation Block H1 + BOS M15 = escalada de entrada de risco mínimo.',
    ],
    advancedNotes: [
      'ICT usa o nível de 50% do OB (CE = Consequent Encroachment) como referência para entrada de mitigação.',
    ],
  },
};

export const premiumDiscountConcept: ConceptData = {
  id: 'premium-discount',
  number: 11,
  title: 'Premium & Discount',
  subtitle: 'Fibonacci Institucional — compre barato, venda caro',
  category: 'context',
  emoji: '📐',
  tagline: 'Instituições compram em desconto e vendem em prêmio. Faça o mesmo.',
  diagramType: 'fibonacci-pd',
  relatedConcepts: ['order-block', 'ote', 'liquidity', 'market-structure'],
  quizIds: ['q-pd-1', 'q-pd-2', 'q-pd-3'],
  flashcardIds: ['fc-pd-1', 'fc-pd-2', 'fc-pd-3'],

  level1: {
    whatItIs: `Em SMC, Premium e Discount são definidos pelo Fibonacci de um swing relevante:
    - Acima de 50% do swing = região de PRÊMIO (caro para comprar, barato para vender)
    - Abaixo de 50% do swing = região de DESCONTO (barato para comprar, caro para vender)
    
    A lógica: em tendência de alta, você COMPRA em desconto (abaixo de 50%) e VENDE 
    em prêmio (acima de 50%). Nunca compre em prêmio se quer o melhor R:R.`,

    institutionalLogic: `Instituições têm mandato fiduciário de "melhor execução". 
    Não podem simplesmente comprar no topo — precisam justificar o preço de entrada.
    Comprar em Discount (abaixo de 50%) = preço abaixo da média do swing = boa execução.
    A Região de Prêmio ICT é 0.50-0.79 do Fibonacci — onde os institucionais são mais 
    ativos para entradas na direção do setup.`,

    keyInsight: `Toda análise SMC começa com: "Estamos em prêmio ou desconto?"
    Comprar em prêmio ou vender em desconto é atacar de desvantagem — você está onde 
    as instituições estão tomando lucro, não entrando.`,
  },

  level2: {
    identificationRules: [
      { text: 'Traçar Fibonacci do swing low para swing high (em alta) ou high para low (em baixa).', valid: true },
      { text: 'Premum ICT: 0.50 a 0.79 Fibonacci — zona de entrada para vendas em tendência de baixa.', valid: true },
      { text: 'Discount ICT: 0.50 a 0.79 Fibonacci (medido de alto para baixo) — zona de entrada para compras.', valid: true },
      { text: 'Ideal entry premium: 0.618 Fibonacci = OTE level.', valid: true },
      { text: 'Comprar em 0.20 Fibonacci (prêmio extremo) esperando continuar a alta.', valid: false },
    ],
    commonMistakes: [
      'Usar Fibonacci em swings pequenos e irrelevantes — use o swing mais relevante do timeframe de análise.',
      'Traçar Fibonacci incorretamente (de baixo para cima em tendência de baixa).',
      'Ignorar Premium/Discount e entrar em qualquer lugar do retracemen.',
    ],
    invalidationRules: [
      'Se o contexto institucional muda (CHoCH, nova estrutura), retraçar o Fibonacci no novo swing relevante.',
    ],
  },

  level3: {
    edgeCases: [
      'Discount dentro de Discount: em tendência forte, o pullback ideal fica em 0.50-0.616 do swing — mas se o swing menor também confirma discount, é confluência.',
      'Premium extremo (0.786+): em setups de alta convicção, preço pode ir até 0.786 antes de reverter — isso é normal e esperado.',
    ],
    confluences: [
      'OB dentro da zona de prêmio/desconto = entrada premium ICT.',
      'FVG no nível de 0.50-0.618 + estrutura alinhada = OTE de alta precisão.',
    ],
    advancedNotes: [
      'ICT define "Optimal Trade Entry" (OTE) como a zona entre 0.618-0.786 Fibonacci de um swing.',
      'PDAuth zonas: 0.5 = equilíbrio puro, 0.618 = Golden Ratio (golden pocket), 0.786 = deep retracement.',
    ],
  },
};

export const oteConcept: ConceptData = {
  id: 'ote',
  number: 12,
  title: 'OTE — Optimal Trade Entry',
  subtitle: 'A entrada de maior probabilidade e melhor R:R',
  category: 'context',
  emoji: '🎯',
  tagline: 'OTE é quando todos os elementos se alinham num único ponto de entrada.',
  diagramType: 'ote',
  relatedConcepts: ['premium-discount', 'order-block', 'fvg', 'complete-setup'],
  quizIds: ['q-ote-1', 'q-ote-2'],
  flashcardIds: ['fc-ote-1', 'fc-ote-2'],

  level1: {
    whatItIs: `OTE (Optimal Trade Entry) é a zona de entrada de maior probabilidade dentro 
    de um setup SMC completo. É definido pela zona de 0.618-0.786 Fibonacci de um pullback, 
    coincidindo com outros PoIs (OB, FVG) e estrutura alinhada.
    
    OTE = confluência de Fibonacci + OB/FVG + estrutura + sessão ativa.`,

    institutionalLogic: `Instituições executam posições em fases. O OTE é o ponto onde 
    os institucionais estão COMPLETANDO suas posições antes do movimento principal. 
    Você não está "entrando cedo" — está entrando junto com as últimas compras institucionais.`,

    keyInsight: `Se você só opera setups OTE completos (Fibonacci 0.618-0.786 + OB/FVG + 
    estrutura alinhada + killzone), você reduz drasticamente o número de trades — e 
    aumenta drasticamente a qualidade. Menos operações, maior taxa de acerto.`,
  },

  level2: {
    identificationRules: [
      { text: 'Fibonacci 0.618-0.786 do swing de retração.', valid: true },
      { text: 'OB ou FVG presente na zona OTE.', valid: true },
      { text: 'Estrutura do HTF alinhada com a direção do trade.', valid: true },
      { text: 'Killzone ativa (01h-05h NY, 07h-10h NY, 10h-14h NY).', valid: true },
      { text: 'Entrar no OTE sem verificação de estrutura e liquidez — o OTE sozinho não é suficiente.', valid: false },
    ],
    commonMistakes: [
      'Usar OTE como único critério de entrada — sem estrutura, liquidez e PoI, é apenas Fibonacci.',
      'OTE em tendência lateral — sem momentum, OTE perde a vantagem estatística.',
    ],
    invalidationRules: [
      'OTE violado (preço sai da zona 0.786 sem reagir) → setup inválido, reavaliar estrutura.',
    ],
  },

  level3: {
    edgeCases: [
      'Micro-OTE: dentro do OTE, usar timeframe menor para afinar a entrada (OB de M5 dentro do OTE de H1).',
    ],
    confluences: [
      'OTE + OB H1 + FVG M15 + killzone = setup de 9-10/10 de convicção.',
    ],
    advancedNotes: [
      'ICT define OTE como o setup de "máxima probabilidade e melhor R:R" dentro do modelo ICT 2022.',
      'O OTE é o passo 11 da estratégia SmartFlow — aparece após todos os outros elementos estarem alinhados.',
    ],
  },
};

export const sessionsConcept: ConceptData = {
  id: 'sessions',
  number: 13,
  title: 'Sessões e Killzones',
  subtitle: 'Quando o algoritmo é mais ativo',
  category: 'context',
  emoji: '🕐',
  tagline: 'O horário certo vale mais que o setup perfeito no horário errado.',
  diagramType: 'sessions-killzones',
  relatedConcepts: ['daily-bias', 'institutional-logic', 'complete-setup'],
  quizIds: ['q-sess-1', 'q-sess-2', 'q-sess-3'],
  flashcardIds: ['fc-sess-1', 'fc-sess-2', 'fc-sess-3'],

  level1: {
    whatItIs: `O mercado forex não é igualmente ativo 24 horas. Existem janelas específicas 
    onde o volume institucional (e, portanto, os movimentos significativos) se concentra:
    
    Sessões principais:
    - Ásia: 20h-00h NY (BRT: 21h-01h)
    - Londres: 03h-08h NY (BRT: 04h-09h)  
    - New York: 08h-17h NY (BRT: 09h-18h)
    
    Killzones ICT (janelas de alta probabilidade):
    - London Open Killzone: 02h-05h NY
    - NY Open Killzone: 07h-10h NY
    - NY AM Killzone: 10h-12h NY
    - London Close Killzone: 10h-12h NY (overlap)`,

    institutionalLogic: `Bancos e fundos têm traders específicos para cada sessão. 
    O volume de ordens institucionais se concentra quando os desks estão ativos e quando 
    há sobreposição de sessões (Londres + NY = Overlap = maior volume do dia).
    
    O algoritmo de entrega de preço é mais eficiente (e previsível) quando há volume 
    institucional suficiente para mover o mercado de forma ordenada.`,

    keyInsight: `Setup perfeito às 2h da tarde (em lateralidade) vs setup 7/10 às 10h 
    (killzone NY AM): o segundo tem muito mais probabilidade de funcionar. Sincronize 
    seus setups com as killzones.`,
  },

  level2: {
    identificationRules: [
      { text: 'Killzone London Open (02h-05h NY): melhor para EURUSD — início do movimento europeu.', valid: true },
      { text: 'Killzone NY Open (07h-10h NY): maior movimento do dia frequentemente acontece aqui.', valid: true },
      { text: 'Overlap (10h-12h NY): convergência Londres+NY = maior liquidez e movimentos mais limpos.', valid: true },
      { text: 'Evitar operar entre 12h-14h NY (almoço NY) — baixo volume, movimentos choppy.', valid: true },
      { text: 'Operar EURUSD às 22h BRT esperando movimentos institucionais significativos.', valid: false },
    ],
    commonMistakes: [
      'Ignorar o horário e operar qualquer setup em qualquer hora — volume define a qualidade do movimento.',
      'Não ajustar para horário de verão dos EUA — as killzones mudam 1 hora em março e novembro.',
      'Confundir alta volatilidade com alta qualidade — notícias geram volatilidade mas não clareza direcional.',
    ],
    invalidationRules: [
      'Setup fora de killzone com score menor que 9/10: não opera — o timing desfaz a vantagem.',
      'Qualquer setup durante news de alto impacto — spread e slippage tornam o risco imprevisível.',
    ],
  },

  level3: {
    edgeCases: [
      'Judas Swing na abertura: nos primeiros 15-30min da killzone, o preço frequentemente vai na direção ERRADA antes de ir na direção real.',
      'Sessão Ásia como range: a sessão asiática frequentemente estabelece a range que Londres ou NY vai varrer.',
      'Power of 3 (PO3): Acumulação (Ásia) → Manipulação/Sweep (abertura Londres/NY) → Distribuição (movimento real).',
    ],
    confluences: [
      'Killzone NY Open + CHoCH após Judas Swing + OB = setup de alta convicção.',
      'Overlap + Daily Bias confirmado + stop hunt de sessão Ásia varrido = trade de dia inteiro.',
    ],
    advancedNotes: [
      'ICT recomenda que iniciantes se concentrem APENAS na NY AM Killzone (10h-12h NY) até dominar o modelo.',
      'A London Close (10h-12h NY) frequentemente reverte o movimento da manhã NY — importante para alvos.',
      'Dados econômicos de alto impacto (CPI, NFP, FOMC) mudam o comportamento do algoritmo — evitar nessas janelas.',
    ],
  },
};

export const dailyBiasConcept: ConceptData = {
  id: 'daily-bias',
  number: 14,
  title: 'Daily Bias',
  subtitle: 'A visão do dia — para onde o algoritmo quer ir',
  category: 'context',
  emoji: '🧭',
  tagline: 'Sem bias diário definido, você é um barco sem leme em mar agitado.',
  diagramType: 'daily-bias',
  relatedConcepts: ['sessions', 'market-structure', 'liquidity', 'institutional-logic'],
  quizIds: ['q-db-1', 'q-db-2', 'q-db-3'],
  flashcardIds: ['fc-db-1', 'fc-db-2', 'fc-db-3'],

  level1: {
    whatItIs: `Daily Bias é a direção que o algoritmo tem mais probabilidade de entregar 
    durante o dia. É definido pela análise de timeframes maiores (D1 e H4) antes do início 
    da sessão — não é um feeling, é uma análise estruturada.
    
    Bias Bullish: D1/H4 em tendência de alta, liquidez abaixo (SSL) varrida ou preço em 
    zona de desconto pronto para mover para cima.
    
    Bias Bearish: D1/H4 em tendência de baixa, liquidez acima (BSL) varrida ou preço em 
    zona de prêmio pronto para cair.`,

    institutionalLogic: `O algoritmo de entrega de preço opera em ciclos. Cada dia, ele 
    precisa "entregar" o preço para algum alvo — que é geralmente um pool de liquidez 
    (PDH, PDL, PWH, PWL) ou um FVG/OB de timeframe maior. O Daily Bias é identificar 
    qual alvo o algoritmo está mirando hoje.`,

    keyInsight: `Construa o Daily Bias antes de abrir qualquer operação. Uma vez definido 
    — bullish ou bearish — só opere setups NESSA direção. Se o mercado te oferecer um 
    setup contrário ao bias, ignore. O bias diz qual lado vai com o vento.`,
  },

  level2: {
    identificationRules: [
      { text: 'D1 em tendência: analise estrutura D1 (HH/HL ou LH/LL) para macro bias.', valid: true },
      { text: 'H4 em alinhamento: H4 deve confirmar o mesmo bias do D1 para alta convicção.', valid: true },
      { text: 'Liquidez mapeada: onde estão BSL e SSL? O bias é frequentemente em direção à liquidez.', valid: true },
      { text: 'Previous Day High/Low: PDH é alvo bullish natural, PDL é alvo bearish natural.', valid: true },
      { text: 'Trocar o bias intraday baseado em movimentos de M15 sem revisar H4/D1.', valid: false },
    ],
    commonMistakes: [
      'Definir bias baseado em notícias ou sentimento, não em estrutura — bias é técnico, não emocional.',
      'Mudar de bias a cada movimento de M15 — o bias é diário, não de candle a candle.',
      'Operar sem bias definido — cada trade se torna uma aposta sem contexto.',
    ],
    invalidationRules: [
      'CHoCH no H4 contra o bias → reconstruir análise antes de continuar operando.',
      'PDH/PDL atingido + CHoCH = bias pode ter se esgotado para o dia — verificar novo setup.',
    ],
  },

  level3: {
    edgeCases: [
      'Dia sem bias claro (neutralidade): H4 em range, D1 no meio do swing. Nesses dias, reduzir tamanho ou não operar.',
      'Bias muda intraday após CHoCH H4 forte: aceitar que o contexto mudou e não brigar com ele.',
      'Dias de alta volatilidade (NFP, CPI, FOMC): o bias pode ser irrelevante se o dado mudar a narrativa institucional.',
    ],
    confluences: [
      'Bias bullish + sellside liquidity varrida na killzone + OB H1 = máxima convicção.',
      'D1 + H4 + sessão alinhados com bias = triple confluence para o dia.',
    ],
    advancedNotes: [
      'ICT usa o conceito de "IPDA Draw on Liquidity" — o algoritmo tem um alvo específico de liquidez que vai buscar no dia/semana/mês.',
      'Power of 3 (Accumulation/Manipulation/Distribution) ocorre dentro do contexto do Daily Bias.',
      'Dias de quinta e sexta geralmente têm o bias mais claro (execuções institucionais de encerramento de semana).',
    ],
  },
};

export const completeSetupConcept: ConceptData = {
  id: 'complete-setup',
  number: 15,
  title: 'Setup Completo — Os 8 Passos',
  subtitle: 'Integrando todos os conceitos num setup de alta convicção',
  category: 'setup',
  emoji: '🏆',
  tagline: 'O setup completo é a soma de tudo que você aprendeu. Cada passo é um filtro.',
  diagramType: 'complete-setup',
  relatedConcepts: ['institutional-logic', 'market-structure', 'liquidity', 'order-block', 'fvg', 'bos', 'sessions', 'daily-bias'],
  quizIds: ['q-cs-1', 'q-cs-2', 'q-cs-3', 'q-cs-4'],
  flashcardIds: ['fc-cs-1', 'fc-cs-2', 'fc-cs-3', 'fc-cs-4'],

  level1: {
    whatItIs: `O Setup Completo é a sequência de 8 passos sequenciais e eliminatórios que 
    integram todos os conceitos SMC/ICT numa decisão de trading de alta convicção. 
    Se qualquer passo falhar → WAIT. Sem exceções.
    
    Os 8 Passos:
    1. Fibonacci na pernada maior → região de prêmio: 50%-79%
    2. Order Block dentro da região de prêmio (com rejeição confirmada)
    3. Liquidez mapeada acima/abaixo
    4. Liquidez efetivamente varrida (stop hunt executado)
    5. FVG formado na volta (gatilho principal)
    6. BOS M15 confirmado (corpo + velocidade)
    7. BOS M5 confirmado
    8. Engolfo M1 (corpo ≥ 60%, fecha no terço correto)`,

    institutionalLogic: `Cada passo elimina noise e confirma presença institucional:
    - Fibonacci: confirma que estamos numa zona de valor institucional
    - OB: confirma que há ordens institucionais incompletas
    - Liquidez varrida: confirma que o algoritmo coletou combustível
    - FVG: confirma desequilíbrio criado pelo mov. institucional
    - BOS M15: confirma que a nova direção está estabelecida
    - BOS M5: confirmação adicional
    - Engolfo M1: entrada de precisão cirúrgica
    
    Cada passo é uma camada de evidência de atividade institucional.`,

    keyInsight: `O setup completo parece raro — e deveria! Setups de 8/8 acontecem 2-5 
    vezes por dia em EURUSD nas sessões ativas. Você não precisa de mais que isso. 
    Qualidade > Quantidade. Sempre.`,
  },

  level2: {
    identificationRules: [
      { text: 'Passo 1: Fibonacci traçado na pernada maior do dia. Preço em 0.50-0.79 = válido.', valid: true },
      { text: 'Passo 2: OB presente dentro da zona premium/discount. Rejeição confirmada (wick).', valid: true },
      { text: 'Passo 3: Liquidez mapeada — saber onde estão BSL e SSL próximos.', valid: true },
      { text: 'Passo 4: Liquidez de fato varrida — spike que viola o nível e fecha de volta.', valid: true },
      { text: 'Passo 5: FVG formado no movimento de volta após o sweep. Tamanho relevante vs ATR.', valid: true },
      { text: 'Passo 6: BOS M15 com corpo de vela > 50% e velocidade.', valid: true },
      { text: 'Passo 7: BOS M5 na mesma direção confirma.', valid: true },
      { text: 'Passo 8: Engolfo M1 com corpo ≥ 60%, fecha no terço correto, volume acima da média.', valid: true },
      { text: 'Pular qualquer passo quando o setup "parece bom demais" para esperar.', valid: false },
    ],
    commonMistakes: [
      'Entrar no passo 6 (BOS M15) sem aguardar o engolfo M1 — você antecipa, o mercado te para.',
      'Considerar setup completo quando tem 7/8 passos — todos os 8 são obrigatórios.',
      'Operar fora de killzone mesmo com 8/8 — o timing ainda importa.',
      'Ignorar o spread antes do engolfo — spread alto = risco de slippage no stop.',
    ],
    invalidationRules: [
      'H4 não alinhado = WAIT imediato, independente do score — regra absoluta.',
      'Spread > 2.5 pips no momento do engolfo → não entra.',
      'News de alto impacto em menos de 30min → não entra.',
      'Fora de sessão ativa → não entra.',
    ],
  },

  level3: {
    edgeCases: [
      'Plano B: o preço passou direto sem reagir ao setup → pode inverter a visão se H4 também quebrar estrutura.',
      'Setup 7/8 (sem BOS M5 limpo mas BOS M15 forte): reduzir tamanho de posição, não zerar.',
      'Múltiplos setups no mesmo dia: priorize o da killzone de maior volume (geralmente NY AM overlap).',
      'ATR baixo (<10 pips no H1): mesmo com setup 8/8, o SL estrutural não cabe → WAIT.',
    ],
    confluences: [
      '8 Passos + Killzone ativa + DXY confirmando + ATR saudável = máxima convicção (FORTE 🟢).',
      '7 Passos + BOS M5 fraco = score 7-8/10 — lote reduzido (MODERADO 🟡).',
      '< 7 passos = WAIT em silêncio — grava para análise.',
    ],
    advancedNotes: [
      'Este setup é exatamente o que o SmartFlow automatiza — o sistema verifica cada passo sequencialmente.',
      'A regra "sem H4 alinhado = WAIT imediato" elimina a maioria dos trades perdedores.',
      'O engolfo M1 é o gatilho de precisão — o sinal de que os institucionais estão entrando agora.',
    ],
  },
};

// ══════════════════════════════════════════════
// ARRAY CONSOLIDADO — exportar na ordem pedagógica
// ══════════════════════════════════════════════

export const ALL_CONCEPTS: ConceptData[] = [
  institutionalLogicConcept,
  marketStructureConcept,
  bosConcept,
  chochConcept,
  liquidityConcept,
  stopHuntConcept,
  orderBlockConcept,
  fvgConcept,
  breakerBlockConcept,
  mitigationBlockConcept,
  premiumDiscountConcept,
  oteConcept,
  sessionsConcept,
  dailyBiasConcept,
  completeSetupConcept,
];

export const CONCEPT_MAP = Object.fromEntries(
  ALL_CONCEPTS.map((c) => [c.id, c])
) as Record<string, ConceptData>;

export const CATEGORY_LABELS: Record<string, string> = {
  foundation: 'Fundação',
  structure:  'Estrutura',
  liquidity:  'Liquidez',
  poi:        'POIs',
  context:    'Contexto',
  setup:      'Setup',
};
