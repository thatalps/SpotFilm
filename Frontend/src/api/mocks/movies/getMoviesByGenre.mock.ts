import { http, HttpResponse } from 'msw'

export const getMoviesByGenreMock = http.get(
  'filme/genero/*',
  async ({ request }) => {
    const url = new URL(request.url)
    const productId = url.searchParams.get('id')

    console.log(productId)

    // return new HttpResponse(null, { status: 500 })

    // eslint-disable-next-line new-cap
    return new HttpResponse(
      JSON.stringify({
        results: [
          {
            release_date: null,
            poster_path: null,
            vote_average: null,
            id: 1231,
            title: null,
            overview: null,
            genres: null,
            backdrop_path: null,
          },
          {
            release_date: '2007-03-23',
            poster_path:
              'https://image.tmdb.org/t/p/w500/uzmiicRYXYO4sb0pdQp6jS37ZX5.jpg',
            vote_average: 6.906,
            id: 11111,
            title: 'A Família do Futuro',
            overview:
              'Lewis (Daniel Hansen) é um jovem responsável por invenções brilhantes e surpreendentes. Seu mais recente trabalho é o escâner de memória, uma máquina que o ajudará a encontrar sua mãe biológica, o que permitirá que ele enfim tenha uma família. Porém antes mesmo de utilizá-la a máquina é roubada pelo Bandido do Chapéu Coco (Stephen J. Anderson). Lewis recebe então a visita de Wilbur Robinson (Wesley Singerman), um jovem misterioso que o leva em uma viagem no tempo. Já no futuro Lewis conhece os Robinsons, a família de Wilbur, que o ajudará a recuperar o escâner de memória.',
            genres: [
              {
                id: 16,
                name: 'Animação',
              },
              {
                id: 35,
                name: 'Comédia',
              },
              {
                id: 10751,
                name: 'Família',
              },
            ],
            backdrop_path:
              'https://image.tmdb.org/t/p/w500/yOGELMEm6DPkdrBoJ7JbsyByCbn.jpg',
          },
          {
            release_date: '2007-03-23',
            poster_path:
              'https://image.tmdb.org/t/p/w500/uzmiicRYXYO4sb0pdQp6jS37ZX5.jpg',
            vote_average: 6,
            id: 222222,
            title: 'A Família do Futuro',
            overview:
              'Lewis (Daniel Hansen) é um jovem responsável por invenções brilhantes e surpreendentes. Seu mais recente trabalho é o escâner de memória, uma máquina que o ajudará a encontrar sua mãe biológica, o que permitirá que ele enfim tenha uma família. Porém antes mesmo de utilizá-la a máquina é roubada pelo Bandido do Chapéu Coco (Stephen J. Anderson). Lewis recebe então a visita de Wilbur Robinson (Wesley Singerman), um jovem misterioso que o leva em uma viagem no tempo. Já no futuro Lewis conhece os Robinsons, a família de Wilbur, que o ajudará a recuperar o escâner de memória.',
            genres: [
              {
                id: 16,
                name: 'Animação',
              },
              {
                id: 35,
                name: 'Comédia',
              },
              {
                id: 10751,
                name: 'Família',
              },
            ],
            backdrop_path:
              'https://image.tmdb.org/t/p/w500/yOGELMEm6DPkdrBoJ7JbsyByCbn.jpg',
          },
          {
            release_date: '2007-03-23',
            poster_path:
              'https://image.tmdb.org/t/p/w500/hOZKUJGN0m717LRSQDxhgABqWrf.jpg',
            vote_average: 10,
            id: 33333,
            title: 'Frozen',
            overview:
              'A destemida e otimista Anna sai em uma jornada épica, ao lado de Kristoff e sua leal rena Sven, para encontrar sua irmã Elsa, cujos poderes congelantes aprisionaram o reino de Arendelle em um inverno eterno. Encontrando condições de Everest, trolls místicos e um hilário boneco de neve chamado Olaf, Anna e Kristoff enfrentam obstáculos em uma corrida para salvar o reino.',
            genres: [
              {
                id: 16,
                name: 'Animação',
              },
              {
                id: 35,
                name: 'Comédia',
              },
              {
                id: 10751,
                name: 'Família',
              },
            ],
            backdrop_path:
              'https://image.tmdb.org/t/p/w500/rj58WQ9ImI0mYDptXdM7euX1Wjt.jpg',
          },
          {
            release_date: '2007-03-23',
            poster_path:
              'https://image.tmdb.org/t/p/w500/pxy5Nso7Yf34q0Vr4SttI6KY1NM.jpg',
            vote_average: 3,
            id: 44444,
            title: 'I Am: Celine Dion',
            overview:
              'Com uma abordagem íntima, o filme leva os espectadores a uma jornada pelo passado e pelo presente de Celine, que expõe sua batalha contra a Síndrome da Pessoa Rígida (SPR) e os esforços que a artista fez para continuar se apresentando para seus fãs. Uma visita ao seu figurino de alta costura para turnês, seus pertences pessoais e até uma passagem pelo estúdio de gravação, o documentário captura a vida privada de uma mega estrela global como nunca antes vista. Uma carta de amor emocionante, Eu Sou: Celine Dion envolve mais de um ano de filmagens enquanto a lendária cantora percorre sua jornada para ter uma vida aberta e autêntica convivendo com a doença.',
            genres: [
              {
                id: 16,
                name: 'Animação',
              },
              {
                id: 35,
                name: 'Comédia',
              },
              {
                id: 10751,
                name: 'Família',
              },
            ],
            backdrop_path:
              'https://image.tmdb.org/t/p/w500/1iroQlJdPccnoUi4PGsIRFWPLBV.jpg',
          },
          {
            release_date: '2007-03-23',
            poster_path:
              'https://image.tmdb.org/t/p/w500/gKTT5efOXFWBvVWfbtArjzCA5Jq.jpg',
            vote_average: 4,
            id: 5555,
            title: 'Skywalkers: A Love Story',
            overview:
              'Colocando à prova os limites do amor e da confiança, um casal decide escalar um dos prédios mais altos do mundo para fazer uma acrobacia.',
            genres: [
              {
                id: 16,
                name: 'Animação',
              },
              {
                id: 35,
                name: 'Comédia',
              },
              {
                id: 10751,
                name: 'Família',
              },
            ],
            backdrop_path:
              'https://image.tmdb.org/t/p/w500/60qVuzQOKgyD57tsgBceT5ScCSX.jpg',
          },
          {
            release_date: '2007-03-23',
            poster_path:
              'https://image.tmdb.org/t/p/w500/uzmiicRYXYO4sb0pdQp6jS37ZX5.jpg',
            vote_average: 6.906,
            id: 3424555,
            title: 'A Família do Futuro',
            overview:
              'Lewis (Daniel Hansen) é um jovem responsável por invenções brilhantes e surpreendentes. Seu mais recente trabalho é o escâner de memória, uma máquina que o ajudará a encontrar sua mãe biológica, o que permitirá que ele enfim tenha uma família. Porém antes mesmo de utilizá-la a máquina é roubada pelo Bandido do Chapéu Coco (Stephen J. Anderson). Lewis recebe então a visita de Wilbur Robinson (Wesley Singerman), um jovem misterioso que o leva em uma viagem no tempo. Já no futuro Lewis conhece os Robinsons, a família de Wilbur, que o ajudará a recuperar o escâner de memória.',
            genres: [
              {
                id: 16,
                name: 'Animação',
              },
              {
                id: 35,
                name: 'Comédia',
              },
              {
                id: 10751,
                name: 'Família',
              },
            ],
            backdrop_path:
              'https://image.tmdb.org/t/p/w500/yOGELMEm6DPkdrBoJ7JbsyByCbn.jpg',
          },
          {
            release_date: '2007-03-23',
            poster_path:
              'https://image.tmdb.org/t/p/w500/hOZKUJGN0m717LRSQDxhgABqWrf.jpg',
            vote_average: 2,
            id: 66454,
            title: 'Frozen',
            overview:
              'A destemida e otimista Anna sai em uma jornada épica, ao lado de Kristoff e sua leal rena Sven, para encontrar sua irmã Elsa, cujos poderes congelantes aprisionaram o reino de Arendelle em um inverno eterno. Encontrando condições de Everest, trolls místicos e um hilário boneco de neve chamado Olaf, Anna e Kristoff enfrentam obstáculos em uma corrida para salvar o reino.',
            genres: [
              {
                id: 16,
                name: 'Animação',
              },
              {
                id: 35,
                name: 'Comédia',
              },
              {
                id: 10751,
                name: 'Família',
              },
            ],
            backdrop_path:
              'https://image.tmdb.org/t/p/w500/rj58WQ9ImI0mYDptXdM7euX1Wjt.jpg',
          },
          {
            release_date: '2007-03-23',
            poster_path:
              'https://image.tmdb.org/t/p/w500/pxy5Nso7Yf34q0Vr4SttI6KY1NM.jpg',
            vote_average: 3,
            id: 345353426,
            title: 'I Am: Celine Dion',
            overview:
              'Com uma abordagem íntima, o filme leva os espectadores a uma jornada pelo passado e pelo presente de Celine, que expõe sua batalha contra a Síndrome da Pessoa Rígida (SPR) e os esforços que a artista fez para continuar se apresentando para seus fãs. Uma visita ao seu figurino de alta costura para turnês, seus pertences pessoais e até uma passagem pelo estúdio de gravação, o documentário captura a vida privada de uma mega estrela global como nunca antes vista. Uma carta de amor emocionante, Eu Sou: Celine Dion envolve mais de um ano de filmagens enquanto a lendária cantora percorre sua jornada para ter uma vida aberta e autêntica convivendo com a doença.',
            genres: [
              {
                id: 16,
                name: 'Animação',
              },
              {
                id: 35,
                name: 'Comédia',
              },
              {
                id: 10751,
                name: 'Família',
              },
            ],
            backdrop_path:
              'https://image.tmdb.org/t/p/w500/1iroQlJdPccnoUi4PGsIRFWPLBV.jpg',
          },
          {
            release_date: '2007-03-23',
            poster_path:
              'https://image.tmdb.org/t/p/w500/gKTT5efOXFWBvVWfbtArjzCA5Jq.jpg',
            vote_average: 4,
            id: 3125266,
            title: 'Skywalkers: A Love Story',
            overview:
              'Colocando à prova os limites do amor e da confiança, um casal decide escalar um dos prédios mais altos do mundo para fazer uma acrobacia.',
            genres: [
              {
                id: 16,
                name: 'Animação',
              },
              {
                id: 35,
                name: 'Comédia',
              },
              {
                id: 10751,
                name: 'Família',
              },
            ],
            backdrop_path:
              'https://image.tmdb.org/t/p/w500/60qVuzQOKgyD57tsgBceT5ScCSX.jpg',
          },
        ],
      }),
    )
  },
)
