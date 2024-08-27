import { http, HttpResponse } from 'msw'

export const GetMoviesRecomendationByGenreMocks = http.get(
  '/api/filme/recomendacao_genero/*',
  () => {
    return new HttpResponse(
      JSON.stringify([
        {
          backdropPath:
            'https://image.tmdb.org/t/p/w500https://image.tmdb.org/t/p/w500/3WP0RObZ2t7ShHfqQpKPljF9B22.jpg',
          generos: {
            '28': {
              id: 28,
              name: 'Ação',
            },
            '14': {
              id: 14,
              name: 'Fantasia',
            },
          },
          id: 364,
          overview:
            'O monstruoso Pinguim, que vive nos arredores de Gotham, se junta ao diabólico empresário Max Shreck para vencer Batman de uma vez por todas. Porém, a secretária de Shreck, Selina Kyle, descobre os planos e se transforma na irresistível Mulher Gato que se alia na destruição de Batman.',
          posterPath:
            'https://image.tmdb.org/t/p/w500https://image.tmdb.org/t/p/w500/trmToqPh8XYS6tzI2Nmv5ctfuSI.jpg',
          releaseDate: '1992-06-19',
          title: 'Batman: O Retorno',
          voteAverage: 6.9,
        },
        {
          backdropPath:
            'https://image.tmdb.org/t/p/w500https://image.tmdb.org/t/p/w500/bxxupqG6TBLKC60M6L8iOvbQEr6.jpg',
          generos: {
            '80': {
              id: 80,
              name: 'Crime',
            },
            '35': {
              id: 35,
              name: 'Comédia',
            },
            '28': {
              id: 28,
              name: 'Ação',
            },
          },
          id: 2661,
          overview:
            'Em Gotham City, Charada, Pinguim, Coringa e Mulher-Gato roubam uma invenção secreta e planejam usá-la de forma maléfica. Além disto, planejam também destruir o Homem-Morcego e o Menino-Prodígio.',
          posterPath:
            'https://image.tmdb.org/t/p/w500https://image.tmdb.org/t/p/w500/ocfATpIo0O4JYaDc5jpyePPG87k.jpg',
          releaseDate: '1966-07-30',
          title: 'Batman: O Homem Morcego',
          voteAverage: 6.4,
        },
        {
          backdropPath:
            'https://image.tmdb.org/t/p/w500https://image.tmdb.org/t/p/w500/tgPFZxhDuxWd4VXYaz8eAUznGTF.jpg',
          generos: {
            '28': {
              id: 28,
              name: 'Ação',
            },
            '12': {
              id: 12,
              name: 'Aventura',
            },
            '878': {
              id: 878,
              name: 'Ficção científica',
            },
          },
          id: 415,
          overview:
            'A dupla dinâmica enfrenta os supervilões Mr. Freeze e sedutora ecoterrorista Hera Venenosa. Mas, para poder livrar Gotham City das garras dos vilões, Batman e Robin contam com uma nova companheira, a Batgirl.',
          posterPath:
            'https://image.tmdb.org/t/p/w500https://image.tmdb.org/t/p/w500/cGRDufDDSrFrv7VI4YnmWnslne0.jpg',
          releaseDate: '1997-06-20',
          title: 'Batman & Robin',
          voteAverage: 4.361,
        },
        {
          backdropPath:
            'https://image.tmdb.org/t/p/w500https://image.tmdb.org/t/p/w500/snlu32RmjldF9b068UURJg8sQtn.jpg',
          generos: {
            '80': {
              id: 80,
              name: 'Crime',
            },
            '28': {
              id: 28,
              name: 'Ação',
            },
            '14': {
              id: 14,
              name: 'Fantasia',
            },
          },
          id: 414,
          overview:
            'Duas-Caras e Charada, dois excêntricos bandidos, decidem descobrir a identidade do Homem-Morcego para depois matá-lo. Este por sua vez recebe a ajuda de um jovem que tem sede de vingança, por ter perdido a família em um acidente provocado exatamente pelo Duas-Caras.',
          posterPath:
            'https://image.tmdb.org/t/p/w500https://image.tmdb.org/t/p/w500/tEwd28NegRgXmZdiEJeVrclYZfX.jpg',
          releaseDate: '1995-06-16',
          title: 'Batman Eternamente',
          voteAverage: 5.429,
        },
        {
          backdropPath:
            'https://image.tmdb.org/t/p/w500https://image.tmdb.org/t/p/w500/9UUikoZdhXglbIIbUifXFsAbPUE.jpg',
          generos: {
            '18': {
              id: 18,
              name: 'Drama',
            },
            '53': {
              id: 53,
              name: 'Thriller',
            },
            '878': {
              id: 878,
              name: 'Ficção científica',
            },
          },
          id: 10200,
          overview:
            'Helen Benson é uma cientista que mantém contato com Klaatu, um alienígena que veio à Terra para alertar sobre uma crise global. Ele deseja conversar com os líderes globais, mas por ser considerado hostil, passa a ser ameaçado pela humanidade.',
          posterPath:
            'https://image.tmdb.org/t/p/w500https://image.tmdb.org/t/p/w500/mFT6PNXqDpYwE0Zgsqard9nvrke.jpg',
          releaseDate: '2008-12-10',
          title: 'O Dia em Que a Terra Parou',
          voteAverage: 5.615,
        },
        {
          backdropPath:
            'https://image.tmdb.org/t/p/w500https://image.tmdb.org/t/p/w500/lh5lbisD4oDbEKgUxoRaZU8HVrk.jpg',
          generos: {
            '80': {
              id: 80,
              name: 'Crime',
            },
            '18': {
              id: 18,
              name: 'Drama',
            },
            '28': {
              id: 28,
              name: 'Ação',
            },
          },
          id: 272,
          overview:
            'Marcado pelo assassinato de seus pais quando ainda era criança, o milionário Bruce Wayne (Christian Bale) decide viajar pelo mundo em busca de encontrar meios que lhe permitam combater a injustiça e provocar medo em seus adversários. Após retornar a Gotham City, sua cidade-natal, ele idealiza seu alter-ego: Batman, um justiceiro mascarado que usa força, inteligência e um arsenal tecnológico para combater o crime.',
          posterPath:
            'https://image.tmdb.org/t/p/w500https://image.tmdb.org/t/p/w500/7EyhcdfiLtH0xa6CZkyYuoWL2GJ.jpg',
          releaseDate: '2005-06-10',
          title: 'Batman Begins',
          voteAverage: 7.709,
        },
        {
          backdropPath:
            'https://image.tmdb.org/t/p/w500https://image.tmdb.org/t/p/w500/g1h8OE4ZPg5aLbwUm7DPeCOBuHC.jpg',
          generos: {
            '35': {
              id: 35,
              name: 'Comédia',
            },
            '878': {
              id: 878,
              name: 'Ficção científica',
            },
          },
          id: 957,
          overview:
            'O planeta Spaceball está em crise, após seus vilões atrapalhados desperdiçarem a atmosfera do lugar. Agora, eles vão tentar roubar o ar de um planeta mais fraco, fazendo com que a princesa Vespa peça ajuda de dois mercenários intergalácticos.',
          posterPath:
            'https://image.tmdb.org/t/p/w500https://image.tmdb.org/t/p/w500/AtKEMsKVesAGM5hXCmTyU5CyBfy.jpg',
          releaseDate: '1987-06-24',
          title: 'S.O.S.: Tem um Louco Solto no Espaço',
          voteAverage: 6.846,
        },
        {
          backdropPath:
            'https://image.tmdb.org/t/p/w500https://image.tmdb.org/t/p/w500/aQFBJPlPv8wAe4qUWDMQC7CN9Za.jpg',
          generos: {
            '10752': {
              id: 10752,
              name: 'Guerra',
            },
            '18': {
              id: 18,
              name: 'Drama',
            },
            '36': {
              id: 36,
              name: 'História',
            },
          },
          id: 10142,
          overview:
            'Pecados de Guerra é baseado na história real de um esquadrão de soldados retidos no pântano moral dos tempos da guerra do Vietnã. Testemunha de um crime em uma vila, o soldado Eriksson é forçado a permanecer sozinho contra seus companheiros e seu oficial de comando, o sargento Meserve, um homem poderoso e carismático pressionado ao limite da barbárie pelo terror e brutalidade do combate.',
          posterPath:
            'https://image.tmdb.org/t/p/w500https://image.tmdb.org/t/p/w500/tUYjkW4fcQYFq9qn5dYRGr86qB5.jpg',
          releaseDate: '1989-08-18',
          title: 'Pecados de Guerra',
          voteAverage: 7.133,
        },
        {
          backdropPath:
            'https://image.tmdb.org/t/p/w500https://image.tmdb.org/t/p/w500/7KGdTzKux4fp5sW7hUM33NWqBU1.jpg',
          generos: {
            '12': {
              id: 12,
              name: 'Aventura',
            },
            '28': {
              id: 28,
              name: 'Ação',
            },
          },
          id: 89,
          overview:
            'O arqueólogo Indiana Jones tem acesso à um misterioso envelope que contém informações sobre a localização do lendário Santo Graal, o cálice que Jesus Cristo teria utilizado na Última Ceia. Quando seu pai, o professor Henry Jones, é sequestrado pelos nazistas, o aventureiro irá embarcar numa missão perigosa para salvá-lo e impedir que a relíquia sagrada caia em mãos erradas.',
          posterPath:
            'https://image.tmdb.org/t/p/w500https://image.tmdb.org/t/p/w500/cJP4wT4RB85E3gbwRe3LWJORXXM.jpg',
          releaseDate: '1989-05-24',
          title: 'Indiana Jones e a Última Cruzada',
          voteAverage: 7.849,
        },
        {
          backdropPath:
            'https://image.tmdb.org/t/p/w500https://image.tmdb.org/t/p/w500/bHxJA9rllKF2jhb11ARAwZJYSp6.jpg',
          generos: {
            '80': {
              id: 80,
              name: 'Crime',
            },
            '10752': {
              id: 10752,
              name: 'Guerra',
            },
            '53': {
              id: 53,
              name: 'Thriller',
            },
            '28': {
              id: 28,
              name: 'Ação',
            },
            '12': {
              id: 12,
              name: 'Aventura',
            },
            '878': {
              id: 878,
              name: 'Ficção científica',
            },
          },
          id: 125249,
          overview:
            'Em Gotham City, Batman (Lewis Wilson) luta contra Dr. Daka (J. Carrol Naish), um japonês mentor de um grupo de espionagem que sabota instituições. Daka tem um aparelho que pulveriza uma radiação mortal, tendo assim, muita facilidade de destruir seus inimigos, além de poder recrutar homens, fazer uma lavagem cerebral neles e transformá-los em seus servos. Batman precisa usar todo o seu poder de morcego para enfrentar este inimigo.',
          posterPath:
            'https://image.tmdb.org/t/p/w500https://image.tmdb.org/t/p/w500/AvzD3mrtokIzZOiV6zAG7geIo6F.jpg',
          releaseDate: '1943-07-16',
          title: 'Batman',
          voteAverage: 6.5,
        },
        {
          backdropPath:
            'https://image.tmdb.org/t/p/w500https://image.tmdb.org/t/p/w500/rRKkjLh8gKa4NYA9zDEi4lSinF2.jpg',
          generos: {
            '37': {
              id: 37,
              name: 'Faroeste',
            },
          },
          id: 9588,
          overview:
            'O atirador americano Matthew Quigley é contratato por um fazendeiro australiano para matar aborígenes que estão vivendo nas terras de um rico barão de gado. Mas ele só percebe isso ao chegar à Austrália acompanhado de seu rifle, já que acha que foi contratado para matar cães selvagens. Quigley recusa o trabalho e se torna jurado de morte, sendo caçado por seu antigo empregador.',
          posterPath:
            'https://image.tmdb.org/t/p/w500https://image.tmdb.org/t/p/w500/oChjCfaBYn8xluWpqkSgEHleMqT.jpg',
          releaseDate: '1990-10-17',
          title: 'Contratado para Matar',
          voteAverage: 6.66,
        },
        {
          backdropPath:
            'https://image.tmdb.org/t/p/w500https://image.tmdb.org/t/p/w500/s3HMQkcWOBnP1OHIikpbhRCtKea.jpg',
          generos: {
            '80': {
              id: 80,
              name: 'Crime',
            },
            '18': {
              id: 18,
              name: 'Drama',
            },
            '35': {
              id: 35,
              name: 'Comédia',
            },
            '14': {
              id: 14,
              name: 'Fantasia',
            },
          },
          id: 20123,
          overview:
            'Perhan é um cigano que mora com sua avó na periferia de Sarajevo. Apaixonado por Azra, seu sonho é ganhar dinheiro suficiente para poder casar-se com ela. O vagabundo Ahmed propõe a Perhan ir para a Itália, na tentativa de fazer fortuna rápido. O jovem aceita, e quando se dá conta já é prisioneiro de um mundo sem escrúpulos, cheio de mágoa, do qual ele não quer participar.',
          posterPath:
            'https://image.tmdb.org/t/p/w500https://image.tmdb.org/t/p/w500/jz58vplPY3XULYNidK1Mz4QuNpM.jpg',
          releaseDate: '1988-12-21',
          title: 'Vida Cigana',
          voteAverage: 7.7,
        },
        {
          backdropPath:
            'https://image.tmdb.org/t/p/w500https://image.tmdb.org/t/p/w500/sIzZQdXY21sEks9lGkGuXzqdGSA.jpg',
          generos: {
            '35': {
              id: 35,
              name: 'Comédia',
            },
            '14': {
              id: 14,
              name: 'Fantasia',
            },
          },
          id: 4011,
          overview:
            'O casarão de uma dupla de fantasmas super atrapalhados foi invadido por novaiorquinos sofisticados. Para espantá-los, eles contratam um profissional: um fantasma especialista em assustar humanos, que vai tentar de tudo - adotar formas estranhas, armar ciladas e engraçadíssimas armadilhas.',
          posterPath:
            'https://image.tmdb.org/t/p/w500https://image.tmdb.org/t/p/w500/mLSJNejuGDegsMDiWWwIP7VDiyz.jpg',
          releaseDate: '1988-03-30',
          title: 'Os Fantasmas se Divertem',
          voteAverage: 7.382,
        },
        {
          backdropPath:
            'https://image.tmdb.org/t/p/w500https://image.tmdb.org/t/p/w500/kU7ZiyeUwcpTkYj3UcxSqGdZmxY.jpg',
          generos: {
            '16': {
              id: 16,
              name: 'Animação',
            },
            '28': {
              id: 28,
              name: 'Ação',
            },
          },
          id: 618353,
          overview:
            'Baseado na HQ “Batman: Morte em Família”, o longa conta a história da relação do Batman com seu pupilo Jason Todd, o segundo Robin. Após a relação entre os dois ficar abalada por conta do comportamento extremo de Jason em suas rondas, o Coringa o mata, levando o Batman ao limite.',
          posterPath:
            'https://image.tmdb.org/t/p/w500https://image.tmdb.org/t/p/w500/97zKwVhOLyTnFbnuLZHbOboLyrM.jpg',
          releaseDate: '2020-10-13',
          title: 'Batman: Morte em Família',
          voteAverage: 7.1,
        },
        {
          backdropPath:
            'https://image.tmdb.org/t/p/w500https://image.tmdb.org/t/p/w500/eevJuYAitUe6VwFN29aFwzeyeTr.jpg',
          generos: {
            '16': {
              id: 16,
              name: 'Animação',
            },
            '80': {
              id: 80,
              name: 'Crime',
            },
            '9648': {
              id: 9648,
              name: 'Mistério',
            },
            '28': {
              id: 28,
              name: 'Ação',
            },
          },
          id: 537056,
          overview:
            'O passado de Batman começa a se desenrolar, dá-se início a uma corrida para o Cavaleiro das Trevas solucionar os jogos mortais do Silêncio. O misterioso vilão conhecido como Silêncio está determinado a destruir tanto a carreira de combatente ao crime de Batman, quanto a vida pessoal de Bruce Wayne',
          posterPath:
            'https://image.tmdb.org/t/p/w500https://image.tmdb.org/t/p/w500/5fepR3N7FtTaZp5aiLrrYiQUH0A.jpg',
          releaseDate: '2019-07-19',
          title: 'Batman: Silêncio',
          voteAverage: 7.178,
        },
        {
          backdropPath:
            'https://image.tmdb.org/t/p/w500https://image.tmdb.org/t/p/w500/u1YU0pKfdDXD1KNQdOeZnYJ8VbE.jpg',
          generos: {
            '9648': {
              id: 9648,
              name: 'Mistério',
            },
            '18': {
              id: 18,
              name: 'Drama',
            },
            '53': {
              id: 53,
              name: 'Thriller',
            },
            '27': {
              id: 27,
              name: 'Terror',
            },
            '14': {
              id: 14,
              name: 'Fantasia',
            },
          },
          id: 2668,
          overview:
            'Em 1799, uma série de crimes envolvendo inocentes acontece no pequeno vilarejo de Sleepy Hollow. Para investigar o caso é chamado o detetive nova-iorquino Ichabod Crane (Johnny Depp), um excêntrico e determinado oficial de polícia com um jeito avant-garde de solucionar crimes. Os métodos investigativos de Ichabod serão postos à prova neste caso, que envolve um ser sobrenatural que pode ser o causador de todos os crimes.',
          posterPath:
            'https://image.tmdb.org/t/p/w500https://image.tmdb.org/t/p/w500/zxOuNnW2qrOOFtiPVJtx5aRAJoX.jpg',
          releaseDate: '1999-11-19',
          title: 'A Lenda do Cavaleiro Sem Cabeça',
          voteAverage: 7.174,
        },
        {
          backdropPath:
            'https://image.tmdb.org/t/p/w500https://image.tmdb.org/t/p/w500/5PfHGXosySGs0l1JfeREspy3v6G.jpg',
          generos: {
            '28': {
              id: 28,
              name: 'Ação',
            },
            '12': {
              id: 12,
              name: 'Aventura',
            },
            '878': {
              id: 878,
              name: 'Ficção científica',
            },
          },
          id: 1924,
          overview:
            'Jor-El, um renomado cientista, prevê a destruição do seu planeta e alerta o governo, que não lhe dá credito. Assim, decide salvar seu filho, mandando-o ao planeta Terra, onde terá superpoderes. Na Terra, ele usa o nome de Clark Kent e, já adulto, trabalha como repórter em um jornal, não demonstra ter superpoderes. Mas quando uma situação inesperada põe em risco a vida de Lois Lane, uma colega de trabalho, ele é obrigado a se revelar para o público, ficando conhecido popularmente como Superman. Descontente com o surgimento de um super-herói na cidade, Lex Luthor, um gênio do mal, o obriga a se desdobrar para evitar a morte de milhões de pessoas.',
          posterPath:
            'https://image.tmdb.org/t/p/w500https://image.tmdb.org/t/p/w500/sKK8syhz0sEoRVjb6OKULuMLCq3.jpg',
          releaseDate: '1978-12-14',
          title: 'Superman: O Filme',
          voteAverage: 7.137,
        },
        {
          backdropPath:
            'https://image.tmdb.org/t/p/w500https://image.tmdb.org/t/p/w500/a8UAXIEf83pyvP0dBhnUIzvEYmE.jpg',
          generos: {
            '28': {
              id: 28,
              name: 'Ação',
            },
            '12': {
              id: 12,
              name: 'Aventura',
            },
            '878': {
              id: 878,
              name: 'Ficção científica',
            },
          },
          id: 8536,
          overview:
            'Três perigosos prisioneiros do extinto planeta Krypton que estavam confinados na Zona Fantasma, se libertam graças à uma explosão. O trio parte então para a Terra, onde passam a ter os mesmos poderes do Superman, mas o objetivo deles é dominar o planeta.',
          posterPath:
            'https://image.tmdb.org/t/p/w500https://image.tmdb.org/t/p/w500/sU6SFBN2CwHaaP5qecyUVhdtoLQ.jpg',
          releaseDate: '1980-12-12',
          title: 'Superman II: A Aventura Continua',
          voteAverage: 6.733,
        },
        {
          backdropPath:
            'https://image.tmdb.org/t/p/w500https://image.tmdb.org/t/p/w500/A58HGJ5aXf9dKIXmeSv41NSCDPN.jpg',
          generos: {
            '80': {
              id: 80,
              name: 'Crime',
            },
            '53': {
              id: 53,
              name: 'Thriller',
            },
            '10749': {
              id: 10749,
              name: 'Romance',
            },
          },
          id: 10396,
          overview:
            'Dois velhos amigos cresceram em lados opostos da lei. Um é ex-traficante, enquanto o outro, um conhecido policial. Os destinos dos dois voltam a se cruzar quando ambos se apaixonam pela mesma mulher, dando início a um perigoso triângulo amoroso.',
          posterPath:
            'https://image.tmdb.org/t/p/w500https://image.tmdb.org/t/p/w500/r6lrMFTlkadRIzPVsL3ZXvGOh3A.jpg',
          releaseDate: '1988-12-02',
          title: 'Conspiração Tequila',
          voteAverage: 6.0,
        },
        {
          backdropPath:
            'https://image.tmdb.org/t/p/w500https://image.tmdb.org/t/p/w500/tRS6jvPM9qPrrnx2KRp3ew96Yot.jpg',
          generos: {
            '80': {
              id: 80,
              name: 'Crime',
            },
            '9648': {
              id: 9648,
              name: 'Mistério',
            },
            '53': {
              id: 53,
              name: 'Thriller',
            },
          },
          id: 414906,
          overview:
            'Após dois anos espreitando as ruas como Batman, Bruce Wayne se encontra nas profundezas mais sombrias de Gotham City. Com poucos aliados confiáveis, o vigilante solitário se estabelece como a personificação da vingança para a população.',
          posterPath:
            'https://image.tmdb.org/t/p/w500https://image.tmdb.org/t/p/w500/wd7b4Nv9QBHDTIjc2m7sr0IUMoh.jpg',
          releaseDate: '2022-03-01',
          title: 'Batman',
          voteAverage: 7.674,
        },
      ]),
    )
  },
)
