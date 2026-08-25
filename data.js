const gameDatabase = {
    mode1: {
        "Lugares": [
            { word: "Hospital", hint: "Plantão" }, 
            { word: "Aeroporto", hint: "Bagagem" },
            { word: "Cinema", hint: "Pipoca" }, 
            { word: "Escola", hint: "Lousa" },
            { word: "Praia", hint: "Areia" }, 
            { word: "Shopping", hint: "Vitrine" },
            { word: "Parque", hint: "Grama" }, 
            { word: "Banco", hint: "Cofre" },
            { word: "Restaurante", hint: "Cardápio" }, 
            { word: "Academia", hint: "Suor" },
            { word: "Biblioteca", hint: "Silêncio" }, 
            { word: "Museu", hint: "Exposição" },
            { word: "Igreja", hint: "Altar" }, 
            { word: "Supermercado", hint: "Carrinho" },
            { word: "Estádio", hint: "Arquibancada" }, 
            { word: "Cemitério", hint: "Lápide" },
            { word: "Delegacia", hint: "Algemas" }, 
            { word: "Farmácia", hint: "Receita" },
            { word: "Padaria", hint: "Forno" }, 
            { word: "Teatro", hint: "Palco" },
            { word: "Zoológico", hint: "Jaula" }, 
            { word: "Cartório", hint: "Carimbo" },
            { word: "Escritório", hint: "Reunião" }
        ],
        "Profissões": [
            { word: "Médico", hint: "Jaleco" }, 
            { word: "Engenheiro", hint: "Capacete" },
            { word: "Professor", hint: "Prova" }, 
            { word: "Bombeiro", hint: "Sirene" },
            { word: "Advogado", hint: "Processo" }, 
            { word: "Policial", hint: "Farda" },
            { word: "Chef de Cozinha", hint: "Panela" }, 
            { word: "Programador", hint: "Código" },
            { word: "Astronauta", hint: "Foguete" }, 
            { word: "Piloto", hint: "Manche" },
            { word: "Analista Financeiro", hint: "Planilha" }, 
            { word: "Mecânico", hint: "Graxa" },
            { word: "Arquiteto", hint: "Maquete" }, 
            { word: "Dentista", hint: "Motorzinho" },
            { word: "Jornalista", hint: "Microfone" }, 
            { word: "Fotógrafo", hint: "Lente" },
            { word: "Psicólogo", hint: "Divã" }, 
            { word: "Contador", hint: "Imposto" },
            { word: "Designer UX/UI", hint: "Protótipo" }
        ],
        "Mitologia e Ficção": [
            { word: "Vampiro", hint: "Sangue" }, 
            { word: "Lobisomem", hint: "Lua" },
            { word: "Zumbi", hint: "Cérebro" }, 
            { word: "Dragão", hint: "Fogo" },
            { word: "Sereia", hint: "Canto" }, 
            { word: "Bruxa", hint: "Vassoura" },
            { word: "Homem de Ferro", hint: "Armadura" }, 
            { word: "Thanos", hint: "Estalo" },
            { word: "Minotauro", hint: "Labirinto" }, 
            { word: "Fantasma", hint: "Assombração" }
        ],
        "Tecnologia e Ferramentas": [
            { word: "Banco de Dados", hint: "Tabela" },
            { word: "Inteligência Artificial", hint: "Prompt" },
            { word: "API", hint: "Integração" },
            { word: "Nuvem (Cloud)", hint: "Servidor" },
            { word: "Git", hint: "Commit" }
        ]
    },
    mode2: {
        "Alimentos e Gastronomia": [
            { word: "Pizza", similar: "Calzone" }, { word: "Hambúrguer", similar: "Sanduíche de Carne" },
            { word: "Sorvete", similar: "Gelato" }, { word: "Bolo", similar: "Torta Doce" },
            { word: "Refrigerante", similar: "Água com Gás" }, { word: "Cerveja", similar: "Chopp" },
            { word: "Macarrão", similar: "Lasanha" }, { word: "Manteiga", similar: "Margarina" },
            { word: "Café Espresso", similar: "Café Coado" }, { word: "Sopa", similar: "Caldo" },
            { word: "Risoto", similar: "Paella" }, { word: "Biscoito", similar: "Bolacha" },
            { word: "Panqueca", similar: "Waffle" }, { word: "Queijo Mussarela", similar: "Queijo Prato" },
            { word: "Bife Ancho", similar: "Filet Mignon" }, { word: "Whisky", similar: "Bourbon" },
            { word: "Whey Protein", similar: "Hipercalórico" }, { word: "Sushi", similar: "Sashimi" },
            { word: "Coxinha", similar: "Croquete" }, { word: "Pastel", similar: "Empanada" }
        ],
        "Transportes": [
            { word: "Moto", similar: "Scooter" }, { word: "Carro Sedan", similar: "Carro Hatch" },
            { word: "Avião", similar: "Jato Particular" }, { word: "Navio de Cruzeiro", similar: "Iate" },
            { word: "Trem", similar: "Metrô" }, { word: "Ônibus Urbano", similar: "Ônibus de Viagem" },
            { word: "Skate", similar: "Longboard" }, { word: "Submarino", similar: "Cápsula de Mergulho" },
            { word: "Trator", similar: "Escavadeira" }, { word: "Uber", similar: "Táxi" },
            { word: "Foguete", similar: "Ônibus Espacial" }, { word: "Teleférico", similar: "Bondinho" },
            { word: "Jetski", similar: "Lancha Rápida" }, { word: "Ambulância", similar: "Viatura Policial" },
            { word: "Caminhão Baú", similar: "Carreta" }, { word: "Patinete Elétrico", similar: "Hoverboard" }
        ],
        "Corpo Humano e Treino": [
            { word: "Olho", similar: "Córnea" }, { word: "Mão", similar: "Punho" },
            { word: "Coração", similar: "Pulmão" }, { word: "Joelho", similar: "Tornozelo" },
            { word: "Cabelo", similar: "Sobrancelha" }, { word: "Nariz", similar: "Seios da Face" },
            { word: "Dente", similar: "Gengiva" }, { word: "Dedo Indicador", similar: "Polegar" },
            { word: "Bíceps", similar: "Tríceps" }, { word: "Costas", similar: "Lombar" },
            { word: "Panturrilha", similar: "Coxa" }, { word: "Queixo", similar: "Mandíbula" },
            { word: "Pescoço", similar: "Nuca" }, { word: "Tornozelo", similar: "Calcanhar" },
            { word: "Estômago", similar: "Intestino" }
        ],
        "Universo Nerd e Cultura Pop": [
            { word: "Homem de Ferro", similar: "Máquina de Combate" }, { word: "Batman", similar: "Demolidor" },
            { word: "Vingadores", similar: "Liga da Justiça" }, { word: "O Mentalista", similar: "Sherlock Holmes" },
            { word: "Star Wars", similar: "Star Trek" }, { word: "Goku", similar: "Vegeta" },
            { word: "PlayStation 5", similar: "Xbox Series X" }, { word: "Teclado Mecânico", similar: "Mouse Gamer" },
            { word: "Python", similar: "JavaScript" }, { word: "React", similar: "Next.js" },
            { word: "Tony Stark", similar: "Bruce Wayne" }, { word: "Minecraft", similar: "Roblox" }
        ]
    }
};