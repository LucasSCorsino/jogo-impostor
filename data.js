const gameDatabase = {
    mode1: {
        "Lugares": [
            { word: "Hospital", hint: "Saúde e tratamento" }, { word: "Aeroporto", hint: "Viagens longas" },
            { word: "Cinema", hint: "Entretenimento audiovisual" }, { word: "Escola", hint: "Educação e ensino" },
            { word: "Praia", hint: "Natureza e lazer" }, { word: "Shopping", hint: "Comércio e consumo" },
            { word: "Parque", hint: "Área verde urbana" }, { word: "Banco", hint: "Transações financeiras" },
            { word: "Restaurante", hint: "Gastronomia" }, { word: "Academia", hint: "Exercício físico" },
            { word: "Biblioteca", hint: "Leitura e silêncio" }, { word: "Museu", hint: "História e cultura" },
            { word: "Igreja", hint: "Religião e fé" }, { word: "Supermercado", hint: "Compras de rotina" },
            { word: "Estádio", hint: "Eventos esportivos" }, { word: "Cemitério", hint: "Descanso final" },
            { word: "Delegacia", hint: "Segurança e lei" }, { word: "Farmácia", hint: "Venda de remédios" },
            { word: "Padaria", hint: "Pão fresco" }, { word: "Teatro", hint: "Artes cênicas" },
            { word: "Zoológico", hint: "Exposição de animais" }, { word: "Circo", hint: "Espetáculo itinerante" },
            { word: "Hotel", hint: "Hospedagem temporária" }, { word: "Rodoviária", hint: "Viagens terrestres" },
            { word: "Cartório", hint: "Registros e firmas" }
        ],
        "Profissões": [
            { word: "Médico", hint: "Trabalha com saúde" }, { word: "Engenheiro", hint: "Projetos e cálculos" },
            { word: "Professor", hint: "Transmite conhecimento" }, { word: "Bombeiro", hint: "Resgate e emergências" },
            { word: "Advogado", hint: "Leis e justiça" }, { word: "Policial", hint: "Segurança pública" },
            { word: "Chef de Cozinha", hint: "Alta gastronomia" }, { word: "Programador", hint: "Tecnologia e código" },
            { word: "Astronauta", hint: "Exploração espacial" }, { word: "Pintor", hint: "Trabalha com cores e telas" },
            { word: "Piloto", hint: "Conduz veículos grandes" }, { word: "Juiz", hint: "Toma decisões no tribunal" },
            { word: "Padeiro", hint: "Trabalha de madrugada/manhã" }, { word: "Mecânico", hint: "Consertos e motores" },
            { word: "Arquiteto", hint: "Desenha construções" }, { word: "Dentista", hint: "Saúde bucal" },
            { word: "Veterinário", hint: "Saúde animal" }, { word: "Jornalista", hint: "Notícias e reportagens" },
            { word: "Ator", hint: "Interpretação" }, { word: "Músico", hint: "Toca instrumentos" },
            { word: "Fotógrafo", hint: "Captura imagens" }, { word: "Marceneiro", hint: "Trabalha com madeira" },
            { word: "Enfermeiro", hint: "Auxilia médicos" }, { word: "Psicólogo", hint: "Saúde mental" },
            { word: "Contador", hint: "Finanças e impostos" }
        ],
        "Mitologia e Ficção": [
            { word: "Vampiro", hint: "Bebe sangue" }, { word: "Lobisomem", hint: "Transformação na lua cheia" },
            { word: "Zumbi", hint: "Morto-vivo" }, { word: "Dragão", hint: "Cospe fogo" },
            { word: "Fada", hint: "Criatura mágica pequena" }, { word: "Sereia", hint: "Metade humana, metade peixe" },
            { word: "Unicórnio", hint: "Cavalo com chifre" }, { word: "Fantasma", hint: "Espírito penado" },
            { word: "Bruxa", hint: "Faz feitiços e poções" }, { word: "Gigante", hint: "Estatura colossal" },
            { word: "Elfo", hint: "Orelhas pontudas" }, { word: "Anão", hint: "Minerador de cavernas" },
            { word: "Minotauro", hint: "Cabeça de touro" }, { word: "Ciclope", hint: "Apenas um olho" },
            { word: "Centauro", hint: "Metade homem, metade cavalo" }
        ]
    },
    mode2: {
        "Alimentos": [
            { word: "Pizza", similar: "Esfiha" }, { word: "Hambúrguer", similar: "Sanduíche" },
            { word: "Sorvete", similar: "Picolé" }, { word: "Bolo", similar: "Torta" },
            { word: "Refrigerante", similar: "Suco" }, { word: "Cerveja", similar: "Vinho" },
            { word: "Macarrão", similar: "Nhoque" }, { word: "Manteiga", similar: "Margarina" },
            { word: "Café", similar: "Chá" }, { word: "Sopa", similar: "Caldo" },
            { word: "Arroz", similar: "Feijão" }, { word: "Biscoito", similar: "Bolacha" },
            { word: "Panqueca", similar: "Crepe" }, { word: "Queijo", similar: "Requeijão" },
            { word: "Limão", similar: "Laranja" }, { word: "Uva", similar: "Morango" },
            { word: "Maçã", similar: "Pera" }, { word: "Melancia", similar: "Melão" },
            { word: "Coxinha", similar: "Empada" }, { word: "Pastel", similar: "Risoles" }
        ],
        "Transportes": [
            { word: "Moto", similar: "Bicicleta" }, { word: "Carro", similar: "Caminhonete" },
            { word: "Avião", similar: "Helicóptero" }, { word: "Navio", similar: "Barco" },
            { word: "Trem", similar: "Metrô" }, { word: "Ônibus", similar: "Van" },
            { word: "Skate", similar: "Patins" }, { word: "Submarino", similar: "Lancha" },
            { word: "Trator", similar: "Escavadeira" }, { word: "Carroça", similar: "Charrete" },
            { word: "Foguete", similar: "Satélite" }, { word: "Teleférico", similar: "Tirolesa" },
            { word: "Jetski", similar: "Prancha de Surf" }, { word: "Ambulância", similar: "Viatura" },
            { word: "Caminhão", similar: "Trio Elétrico" }, { word: "Patinete", similar: "Hoverboard" }
        ],
        "Corpo Humano": [
            { word: "Olho", similar: "Ouvido" }, { word: "Mão", similar: "Pé" },
            { word: "Coração", similar: "Pulmão" }, { word: "Joelho", similar: "Cotovelo" },
            { word: "Cabelo", similar: "Barba" }, { word: "Nariz", similar: "Boca" },
            { word: "Dente", similar: "Língua" }, { word: "Dedo", similar: "Unha" },
            { word: "Perna", similar: "Braço" }, { word: "Costas", similar: "Peito" },
            { word: "Sobrancelha", similar: "Cílios" }, { word: "Queixo", similar: "Testa" },
            { word: "Pescoço", similar: "Nuca" }, { word: "Tornozelo", similar: "Pulso" },
            { word: "Estômago", similar: "Fígado" }
        ],
        "Universo Nerd": [
            { word: "Marvel", similar: "DC Comics" }, { word: "Homem de Ferro", similar: "Batman" },
            { word: "Vingadores", similar: "Liga da Justiça" }, { word: "Coringa", similar: "Duende Verde" },
            { word: "Star Wars", similar: "Star Trek" }, { word: "Goku", similar: "Naruto" },
            { word: "Super Nintendo", similar: "Mega Drive" }, { word: "PlayStation", similar: "Xbox" },
            { word: "Teclado Mecânico", similar: "Mouse Gamer" }, { word: "Hacker", similar: "Programador" }
        ]
    }
};