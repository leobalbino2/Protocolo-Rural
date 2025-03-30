  /*----------------------------------- Guardar Nome da Avaliação  -----------------------------------*/

  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('avaliacaoNomeForm').addEventListener('submit', function(event) {
      event.preventDefault();  
      const nomeAvaliacao = document.getElementById('nomeAvaliacao').value;  
      localStorage.setItem('nomeAvaliacao', nomeAvaliacao); 
      window.location.href = './avaliacao/index.html'; 
    });
  });
  
  /*----------------------------------- Puxar Nome da Avaliação  -----------------------------------*/

  document.addEventListener('DOMContentLoaded', function() {
    const nomeAvaliacao = localStorage.getItem('nomeAvaliacao');
    if (nomeAvaliacao) {
      document.getElementById('nomeAvaliacao').textContent = nomeAvaliacao;
    }
  });

  /*----------------------------------- Indicadores, Perguntas e Respostas -----------------------------------*/

let perguntas = [
    {
      titulo: "Situação das Nascentes",
      opcoes: [
        { label: "100% protegidas com mata ciliar de raio > 50m", value: "5" },
        { label: "100% protegidas com mata ciliar de raio < 50m e > 15m", value: "4" },
        { label: "+ 50% protegidas com mata ciliar de raio > 50m", value: "3" },
        { label: "+ 50% protegidas com mata ciliar de raio < 50m e > 15m", value: "2" },
        { label: "- 50% protegidas com mata ciliar independente do raio", value: "1" },
        { label: "Todas as nascentes desprotegidas", value: "0" }
      ],
      resposta: null
    },
    {
      titulo: "Áreas de Preservação Permanente (APP)",
      opcoes: [
        { label: "100% com vegetação remanescente/restaurada/em restauração de acordo com o artigo 4º da Lei Federal nº. 12.651/2012", value: "5" },
        { label: "100% com vegetação remanescente/restaurada/em restauração de acordo com o artigo 61 da Lei Federal nº. 12.651/2012", value: "4" },
        { label: "+ 50% com vegetação remanescente/restaurada/em restauração de acordo com o artigo 4º da Lei Federal nº. 12.651/2012", value: "3" },
        { label: "+ 50% com vegetação remanescente/restaurada/em restauração de acordo com o artigo 61 da Lei Federal nº. 12.651/2012", value: "2" },
        { label: "- 50% com vegetação remanescente/restaurada/em restauração de acordo com o artigo 4º ou 61 da Lei Federal nº. 12.651/2012", value: "1" },
        { label: "100% desprotegidas", value: "0" }
      ],
      resposta: null
    },
    {
        titulo: "Reserva legal (RL)",
        opcoes: [
          { label: "Totalidade da RL com vegetação remanescente/restaurada/em restauração na propriedade (conforme o Capítulo IV da Lei Federal nº. 12.651/2012).", value: "5" },
          { label: "Pelo menos 50% da RL com vegetação remanescente/restaurada/em restauração na propriedade (conforme o Capítulo IV da Lei Federal nº. 12651/2012) e o restante compensada na região/bacia hidrográfica (conforme o artigo 66 da Lei Federal nº. 12.651/2012).", value: "4" },
          { label: "Pelo menos 50% da RL com vegetação remanescente/restaurada/em restauração na propriedade (conforme o Capítulo IV da Lei Federal nº. 12651/2012) e restante compensada fora de região/bacia hidrográfica (conforme o artigo 66 da Lei Federal nº. 12.651/2012).", value: "3" },
          { label: "Menos de 50% da RL com vegetação remanescente/restaurada/em restauração na propriedade (conforme o Capítulo IV da Lei Federal nº. 12651/2012), e o restante compensada na região/bacia hidrográfica ou 100% da RL compensada na região/bacia hidrográfica (conforme o artigo 66 da Lei Federal nº. 12.651/2012).", value: "3" },
          { label: "Menos de 50% da RL com vegetação remanescente/restaurada/em restauração na propriedade (conforme o Capítulo IV da Lei Federal nº. 12651/2012), e o restante compensada fora da região/bacia hidrográfica 100% da RL compensada fora da região/bacia hidrográfica (conforme o artigo 66 da Lei Federal nº. 12.651/2012).", value: "3" },
          { label: "Sem RL e/ou compensação.", value: "0" }
        ],
        resposta: null
      },
      {
        titulo: "Regularização ambiental",
        opcoes: [
          { label: "A propriedade está cadastrada no CAR, possui PRA (ou dispensa) e tem suas licenças ambientais e outorgas (ou dispensa de outorga) atualizadas em conformidade com as atividades que exerce.", value: "5" },
          { label: "A propriedade está cadastrada no CAR, não possui PRA, e tem suas licenças ambientais e outorgas (ou dispensa de outorga) atualizadas em conformidade com as atividades que exerce.", value: "4" },
          { label: "A propriedade está cadastrada no CAR, não possui PRA, e suas licenças ambientais ou outorgas não estão atualizadas em conformidade com as atividades que exerce.", value: "3" },
          { label: "A propriedade não está cadastrada no CAR, e suas licenças ambientais e outorgas não estão atualizadas em conformidade com as atividades que exerce. ", value: "2" },
          { label: "A propriedade não está cadastrada no CAR e não possui parte das licenças ambientais e outorgas em conformidade com as atividades que exerce.", value: "1" },
          { label: "A propriedade não está cadastrada no CAR e não tem as licenças ambientais e outorgas que permitem exercer suas atividades.", value: "0" }
        ],
        resposta: null
      },
      {
        titulo: "Áreas degradadas",
        opcoes: [
          { label: "Inexistência de voçorocas, sulcos e ravinas. Sem movimentos de massa recentes nas encostas e taludes fluviais. Assoreamento dos corpos hídricos não observado.", value: "5" },
          { label: "Inexistência de voçorocas e sulcos, com ravinas. Sem movimentos de massa recentes nas encostas e taludes fluviais. Assoreamento dos corpos hídricos não observado.", value: "4" },
          { label: "Inexistência de voçorocas e sulcos, com ravinas. Sem movimentos de massa recentes nas encostas e taludes fluviais. Assoreamento leve dos corpos hídricos.", value: "3" },
          { label: "Inexistência de voçorocas. Com sulcos e ravinas. Sem movimentos de massa recentes nas encostas e taludes fluviais. Assoreamento moderado dos corpos hídricos. ", value: "2" },
          { label: "Presença de voçoroca, sulcos e ravinas frequentes. Movimentos de massa recentes nas encostas e/ou taludes fluviais. Assoreamento moderado/intenso dos corpos hídricos.", value: "1" },
          { label: "Voçorocas ativas, sulcos e ravinas frequentes. Movimentos de massa recentes nas encostas e/ou taludes fluviais. Erosão severa de taludes fluviais. Assoreamento intenso dos corpos hídricos.", value: "0" }
        ],
        resposta: null
      },
      {
        titulo: "Conservação de solo, carreadores e estradas rurais",
        opcoes: [
          { label: "Práticas para a conservação de solos suficientes em áreas agrícolas, carreadores e estradas rurais.", value: "5" },
          { label: "Práticas para a conservação de solos suficientes em áreas agrícolas e parcialmente suficientes em carreadores e/ou estradas rurais.", value: "4" },
          { label: "Práticas para a conservação de solos parcialmente suficientes em áreas agrícolas e em carreadores e/ou estradas rurais.", value: "3" },
          { label: "Práticas para a conservação de solos parcialmente suficientes em áreas agrícolas e insuficientes em carreadores e/ou estradas rurais.", value: "2" },
          { label: "Práticas para a conservação de solos insuficientes em áreas agrícolas e em carreadores e/ou estradas rurais.", value: "1" },
          { label: "Práticas para a conservação de solos inexistentes em áreas agrícolas, carreadores e/ou estradas rurais.", value: "0" }
        ],
        resposta: null
      },
      {
        titulo: "Diversidade do agrossistema",
        opcoes: [
          { label: "> 3 atividades agrícolas e/ou silvícolas e/ou pastoris com SAF e/ou ILPF", value: "5" },
          { label: "> 3 atividades agrícolas e/ou silvícolas e/ou pastoris", value: "4" },
          { label: "2 atividades agrícolas e/ou silvícolas e/ou pastoris com SAF e/ou ILPF", value: "3" },
          { label: "2 atividades agrícolas e/ou silvícolas e/ou pastoris  ", value: "2" },
          { label: "Monocultura", value: "1" },
          { label: "Somente pastagens degradadas", value: "0" }
        ],
        resposta: null
      },
      {
        titulo: "Manejo agronômico",
        opcoes: [
          { label: "100% da área agricultável com agricultura orgânica/agroecologia, sem uso de agroquímicos.", value: "5" },
          { label: "80% ou mais da área agricultável com agricultura orgânica/agroecologia sem uso de agroquímicos e 20% ou menos com uso de agroquímicos.", value: "4" },
          { label: "50% ou mais da área agricultável com agricultura orgânica/agroecologia em uso de agroquímicos, e 50% ou menos com uso de agroquímicos.", value: "3" },
          { label: "50% ou mais da área agricultável com agricultura orgânica/agroecologia (sem uso), e 50% ou menos com uso de agroquímicos.", value: "2" },
          { label: "100% da área agricultável com uso adequado e racional de agroquímicos.  ", value: "1" },
          { label: "100% da área agricultável com uso inadequado e sem controle de agroquímicos. ", value: "0" }
        ],
        resposta: null
      },
      {
        titulo: "Ecotecnologias",
        opcoes: [
          { label: "Utilização de pelo menos 5 tecnologias sustentáveis: Geração de energia fotovoltaica e/ou eólica e/ou hidráulica, reuso de água, aproveitamento de água de chuva, biodigestores, etc.", value: "5" },
          { label: "Utilização de pelo menos 4 tecnologias sustentáveis: Geração de energia fotovoltaica e/ou eólica e/ou hidráulica, reuso de água, aproveitamento de água de chuva, biodigestores, etc.", value: "4" },
          { label: "Utilização de pelo menos 3 tecnologias sustentáveis: Geração de energia fotovoltaica e/ou eólica e/ou hidráulica, reuso de água, aproveitamento de água de chuva, biodigestores, etc.", value: "3" },
          { label: "Utilização de pelo menos 2 tecnologias sustentáveis: Geração de energia fotovoltaica e/ou eólica e/ou hidráulica, reuso de água, aproveitamento de água de chuva, biodigestores, etc.", value: "2" },
          { label: "Utilização de pelo menos 1 tecnologia sustentável: Geração de energia fotovoltaica e/ou eólica e/ou hidráulica, reuso de água, aproveitamento de água de chuva, biodigestores, etc.", value: "1" },
          { label: "Não utilização de tecnologias sustentáveis.", value: "0" }
        ],
        resposta: null
      },
      {
        titulo: "Infraestrutura do imóvel rural",
        opcoes: [
          { label: "Proprietários e colaboradores com acesso a energia, água encanada e celular. Propriedade com acesso a internet, trator(es) com GPS e outras tecnologias embarcadas e drones.", value: "5" },
          { label: "Proprietários e colaboradores com acesso a energia, água encanada e celular. Propriedade com acesso a internet, trator(es) com GPS e outras tecnologias embarcadas.m", value: "4" },
          { label: "Proprietários e colaboradores com acesso a energia água encanada e celular. Propriedade com acesso a internet, trator(es) sem GPS e outras tecnologias.", value: "3" },
          { label: "Proprietários e colaboradores com acesso a energia, água encanada e celular. Propriedade sem acesso a internet, trator(es) sem GPS e outras tecnologias.", value: "2" },
          { label: "Proprietários e/ou colaboradores com acesso a energia, água encanada e celular. Propriedade sem acesso a internet, trator(es) sem GPS e outras tecnologias.", value: "1" },
          { label: "Proprietários e/ou colaboradores com acesso a energia, água encanada e celular. Propriedade sem acesso a internet, sem trator(es).", value: "0" }
        ],
        resposta: null
      },
      {
        titulo: "Produtividade e rentabilidade",
        opcoes: [
          { label: "Renda da atividade principal < 30% do total do faturamento; verticalização de pelo menos 30% do total produzido; venda direta ao consumidor de pelo menos 20% da produção.", value: "5" },
          { label: "Renda da atividade principal < 50% do total do faturamento; verticalização de pelo menos 30% do total produzido; venda direta ao consumidor de pelo menos 20% da produção.", value: "4" },
          { label: "Renda da atividade principal < 50% do total do faturamento; verticalização de pelo menos 15% do total produzido e/ou venda direta ao consumidor de pelo menos 10% da produção.", value: "3" },
          { label: "Renda da atividade principal > 50% do total do faturamento; verticalização de pelo menos 15% do total produzido ou venda direta ao consumidor de pelo menos 10% da produção.", value: "2" },
          { label: "Renda da atividade principal > 50% do total do faturamento; sem verticalização e sem venda direta ao consumidor.", value: "1" },
          { label: "Renda da atividade principal = 100% do total do faturamento, sem verticalização e sem venda direta ao consumidor.", value: "0" }
        ],
        resposta: null
      },
      {
        titulo: "Gerenciamento de residuos solídos",
        opcoes: [
          { label: "Totalidade dos resíduos orgânicos gerados, compostados utilizados na propriedade ou comercializados, resíduos perigosos descartados de acordo com a legislação, segregação de resíduos na geração, resíduos recicláveis encaminhados a coleta seletiva e rejeitos encaminhados ao aterro sanitário.", value: "5" },
          { label: "Maior parte (+ de 50%) dos resíduos orgânicos gerados, compostados e utilizados na propriedade ou comercializados, resíduos perigosos descartados de acordo com a legislação, segregação de resíduos na geração, resíduos recicláveis encaminhados a coleta seletiva e rejeitos encaminhados ao aterro sanitário.", value: "4" },
          { label: "Menor parte (- de 50%) dos resíduos orgânicos gerados, compostados e utilizados na propriedade ou comercializados, resíduos perigosos descartados de acordo com a legislação, segregação de resíduos na geração, resíduos recicláveis encaminhados a coleta seletiva e rejeitos encaminhados ao aterro sanitário.", value: "3" },
          { label: "Resíduos orgânicos gerados não compostados nem utilizados na propriedade ou comercializados, resíduos perigosos descartados de acordo com a legislação, segregação de resíduos na geração, resíduos recicláveis encaminhados a coleta seletiva e rejeitos encaminhados ao aterro sanitário.", value: "2" },
          { label: "Resíduos orgânicos gerados não compostados nem utilizados na propriedade ou comercializados, resíduos perigosos descartados de acordo com a legislação, sem segregação de resíduos na geração, resíduos recicláveis e rejeitos encaminhados ao aterro sanitário.", value: "1" },
          { label: "Resíduos orgânicos gerados não compostados, nem utilizados na propriedade ou comercializados, resíduos perigosos descartados incorretamente, resíduos recicláveis e rejeitos aterrados na propriedade.", value: "0" }
        ],
        resposta: null
      },
      {
        titulo: "Saneamento rural",
        opcoes: [
          { label: "Captação de água protegida de contaminação; com sistema de tratamento simplificado; efluentes tratados por sistemas de fossa séptica + filtro anaeróbio, ou biodigestor ou outro com remoção mínima de 80% da DBO.", value: "5" },
          { label: "Captação de água protegida de contaminação; sem sistema de tratamento simplificado; efluentes tratados por sistemas de fossa séptica + filtro anaeróbio, ou biodigestor ou entro com remoção de 80% da DBO.", value: "4" },
          { label: "Captação de água protegida de contaminação; sem sistema de tratamento simplificado; efluentes tratados por sistemas sem controle da remoção de DBO.", value: "3" },
          { label: "Captação de água protegida de contaminação; sem sistema de tratamento simplificado; Maior parte (+ de 50%) dos efluentes tratados por sistemas sem controle da remoção de DBO.", value: "2" },
          { label: "Captação de água protegida de contaminação; sem sistema de tratamento simplificado; Menor parte (- de 50%) dos efluentes tratados por sistemas sem controle da remoção de DBO.", value: "1" },
          { label: "Captação de água desprotegida de contaminação; sem sistema de tratamento simplificado; efluentes lançados ao solo e/ou corpo d’água sem tratamento.", value: "0" }
        ],
        resposta: null
      },
      {
        titulo: "Saúde e segurança no trabalho rural",
        opcoes: [
          { label: "Ambiente de trabalho seguro e saudável, riscos controlados, todos os colaboradores capacitados, trabalhadores expostos a riscos devidamente protegidos com EPI’s e EPC’s.", value: "5" },
          { label: "Ambiente de trabalho seguro e saudável, riscos controlados, maior parte (+ de 50%) dos colaboradores capacitados, trabalhadores expostos a riscos devidamente protegidos com EPI’s e EPC’s.", value: "4" },
          { label: "Ambiente de trabalho seguro e saudável, riscos controlados, menor parte (+ de 50%) dos colaboradores capacitados, trabalhadores expostos a riscos devidamente protegidos com EPI’s e EPC’s.", value: "3" },
          { label: "Ambiente de trabalho seguro e saudável, riscos controlados, colaboradores não capacitados, trabalhadores expostos a riscos devidamente protegidos com EPI’s e EPC’s.", value: "2" },
          { label: "Ambiente de trabalho insalubre, riscos parcialmente controlados, colaboradores não capacitados, trabalhadores expostos a riscos devidamente protegidos com EPI’s e EPC’s.", value: "1" },
          { label: "Ambiente de trabalho insalubre, riscos parcialmente controlados, colaboradores não capacitados, trabalhadores expostos a riscos sem a devida proteção.", value: "0" }
        ],
        resposta: null
      },
      {
        titulo: "Educação e capacitação",
        opcoes: [
          { label: "Proprietários e colaboradores com ensino superior e/ou técnico concluídos. Comprovação de no mínimo 20 horas de capacitação/ano/ pessoa no último ano.", value: "5" },
          { label: "Proprietários e colaboradores com ensino superior e/ou técnico concluídos. Sem comprovação de capacitação no último ano.", value: "4" },
          { label: "Proprietários ou colaboradores com ensino médio concluído. Comprovação de no mínimo 20 horas de capacitação/ano/ pessoa no último ano.", value: "3" },
          { label: "Proprietários ou colaboradores com ensino médio concluído. Sem comprovação de capacitação no último ano.", value: "2" },
          { label: "Proprietários ou colaboradores com ensino fundamental concluído.", value: "1" },
          { label: "Proprietários ou colaboradores sem ensino fundamental concluído e/ou analfabetos.", value: "0" }
        ],
        resposta: null
      }
  ];

    /*----------------------------------- Código da Avaliação -----------------------------------*/

  // Variável que guarda qual indicador o usuário está visualizando em sua avaliação
  let perguntaAtual = 0;

  // Essa função mostra qual a pergunta o usuário está respondendo
  function mostrarPergunta() {
    // Variável para guardar o indice da pergunta atual
    const pergunta = perguntas[perguntaAtual];
    
    // Variável que guarda o texto do indicador
    const perguntaTexto = document.getElementById('pergunta-titulo');
    perguntaTexto.textContent = pergunta.titulo;  
  
    // Aqui ele seleciona todo o conteúdo na tabela pra alterar os parágrafos de cada questão do indicador, também verifica se o radio foi respondido e controla qual posição estava cada vez que o usuário clicar em "anterior" ou "avançar" 
    const opcoes = document.querySelectorAll('#perguntasContainer tr');
    opcoes.forEach((opcao, index) => {
      if (index < pergunta.opcoes.length) {
        const paragrafo = opcao.querySelector('p');
        paragrafo.textContent = pergunta.opcoes[index].label;
  
        const radio = opcao.querySelector('input[type="radio"]');
        radio.value = pergunta.opcoes[index].value;
        radio.checked = pergunta.resposta === pergunta.opcoes[index].value;
        radio.addEventListener('change', () => {
          perguntas[perguntaAtual].resposta = radio.value;
          verificarRespostas(); 
        });
      }
    });
  
    const avancarBtn = document.getElementById('avancarBtn');
    if (perguntaAtual === perguntas.length - 1) {
      avancarBtn.textContent = "Finalizar";
    } else {
      avancarBtn.textContent = "Avançar";
    }
  
    verificarRespostas();
  }
  
  // Aqui ele verifica se a resposta foi preenchida para habilitar o botão
  function verificarRespostas() {
    const proximoBtn = document.getElementById('avancarBtn');
    const pergunta = perguntas[perguntaAtual];
  
    if (pergunta.resposta) {
      proximoBtn.disabled = false;
    } else {
      proximoBtn.disabled = true;
    }
  }
  
    /*----------------------------------- Botão Próximo -----------------------------------*/

  // Botão para o próximo indicador
  function proximaPergunta() {
    const avancarBtn = document.getElementById('avancarBtn');
  
    if (perguntaAtual < perguntas.length - 1) {
      perguntaAtual++; 
      mostrarPergunta(); 
    } else if (avancarBtn.textContent === "Finalizar") {
      window.location.href = 'resultados.html';
    }
  }
  
    /*----------------------------------- Botão Anterior -----------------------------------*/

  // Botão para o indicador anterior
  function anteriorPergunta() {
    if (perguntaAtual > 0) {
      perguntaAtual--; 
      mostrarPergunta(); 
    }
  }
  
  // Eventos que conectam os botões de avançar e voltar com as funções no script
  document.getElementById('avancarBtn').addEventListener('click', proximaPergunta);
  document.getElementById('voltarBtn').addEventListener('click', anteriorPergunta);
  
  mostrarPergunta();
