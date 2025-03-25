const data = [
    {
      category: "Lógica Digital",
      questions: [
        {
          question: "Qual é a base do sistema numérico binário?",
          options: ["10", "8", "2", "16"],
          answer: "2",
          tip: "É usado em sistemas computacionais.",
        },
        {
          question:
            "Qual é o valor da porta lógica AND se ambas as entradas forem 1?",
          options: ["0", "Nenhuma das anteriores", "2", "1"],
          answer: "1",
        },
        {
          question: "Qual tabela representa o funcionamento das portas lógicas?",
          options: [
            "Tabela binária",
            "Tabela de Karnaugh",
            "Tabela da verdade",
            "Tabela de circuitos",
          ],
          answer: "Tabela da verdade",
          tip: "É usada para verificar o comportamento lógico.",
        },
        {
          question:
            "Qual porta lógica retorna 1 se pelo menos uma das entradas for 1?",
          options: ["AND", "OR", "XOR", "NOT"],
          answer: "OR",
        },
        {
          question: "O que é um flip-flop em lógica digital?",
          options: [
            "Um tipo de porta lógica",
            "Uma forma de armazenar 1 bit de dados",
            "Uma unidade de processamento",
            "Uma técnica de codificação",
          ],
          answer: "Uma forma de armazenar 1 bit de dados",
          tip: "Esse componente é usado em circuitos digitais para armazenar um único valor, podendo ser 0 ou 1, e é essencial para a construção de registradores e memória.",
        },
      ],
    },
    {
      category: "Álgebra Booleana",
      questions: [
        {
          question:
            "Qual é a operação lógica representada por uma soma booleana?",
          options: ["AND", "OR", "XOR", "NOT"],
          answer: "OR",
          tip: "É usada para verificar se pelo menos uma condição é verdadeira.",
        },
        {
          question: "Qual é o inverso lógico de 0 em álgebra booleana?",
          options: ["0", "1", "Nenhuma das anteriores", "Depende do contexto"],
          answer: "1",
          tip: "O inverso é obtido pela operação NOT.",
        },
        {
          question: "Qual é o valor de A AND 0, onde A é qualquer valor?",
          options: ["0", "1", "A", "Nenhuma das anteriores"],
          answer: "0",
        },
        {
          question: "Qual é o valor de A OR 1, onde A é qualquer valor?",
          options: ["0", "1", "A", "Nenhuma das anteriores"],
          answer: "1",
        },
        {
          question: "Qual propriedade diz que A OR B = B OR A?",
          options: ["Associativa", "Distributiva", "Comutativa", "De Morgan"],
          answer: "Comutativa",
        },
      ],
    },
    {
      category: "Eletrônica Básica",
      questions: [
        {
          question: "Qual unidade mede a resistência elétrica?",
          options: ["Ohm", "Volt", "Ampere", "Watt"],
          answer: "Ohm",
        },
        {
          question: "Qual componente é usado para armazenar energia elétrica?",
          options: ["Resistor", "Capacitor", "Diodo", "Transistor"],
          answer: "Capacitor",
        },
        {
          question:
            "Qual componente permite o fluxo de corrente em apenas uma direção?",
          options: ["Resistor", "Capacitor", "Diodo", "Transistor"],
          answer: "Diodo",
        },
        {
          question: "Qual unidade mede a corrente elétrica?",
          options: ["Ohm", "Volt", "Ampere", "Watt"],
          answer: "Ampere",
        },
        {
          question: "Qual é a lei que relaciona tensão, corrente e resistência?",
          options: [
            "Lei de Kirchhoff",
            "Lei de Coulomb",
            "Lei de Ohm",
            "Lei de Faraday",
          ],
          answer: "Lei de Ohm",
          tip: "V = I x R",
        },
      ],
    },
  ];
  
  export default data;
  