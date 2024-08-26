import { http, HttpResponse } from 'msw'

export const GetMoviesByNameMock = http.get('/api/filme/titulo/*', async () => {
  // return new HttpResponse(JSON.stringify([]))

  return new HttpResponse(
    JSON.stringify([
      {
        backdropPath:
          'https://image.tmdb.org/t/p/w500https://image.tmdb.org/t/p/w500/frDS8A5vIP927KYAxTVVKRIbqZw.jpg',
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
        id: 268,
        overview:
          'Em Gotham City o milionário Bruce Wayne, que quando jovem teve os pais assassinados por bandidos, resolve combater o crime como Batman, o Homem-Morcego. Mas chega o dia em que o vilão Coringa decide dominar a cidade e se torna um grande desafio para o super-herói.',
        posterPath:
          'https://image.tmdb.org/t/p/w500https://image.tmdb.org/t/p/w500/cij4dd21v2Rk2YtUQbV5kW69WB2.jpg',
        releaseDate: '1989-06-21',
        title: 'Batman',
        voteAverage: 7.2,
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
        voteAverage: 7.7,
      },
      {
        backdropPath:
          'https://image.tmdb.org/t/p/w500https://image.tmdb.org/t/p/w500/5fX1oSGuYdKgwWmUTAN5MNSQGzr.jpg',
        generos: {
          '28': {
            id: 28,
            name: 'Ação',
          },
          '12': {
            id: 12,
            name: 'Aventura',
          },
          '14': {
            id: 14,
            name: 'Fantasia',
          },
        },
        id: 209112,
        overview:
          'Temendo que as ações de um super-herói divino não tenham sido controladas, o formidável e vigoroso vigilante de Gotham City enfrenta o salvador mais reverenciado e moderno de Metrópolis, enquanto o mundo luta com o tipo de herói que realmente precisa. E com Batman e Superman em guerra um contra o outro, uma nova ameaça rapidamente surge, colocando a humanidade em maior perigo do que nunca antes.',
        posterPath:
          'https://image.tmdb.org/t/p/w500https://image.tmdb.org/t/p/w500/vh6pjeGH0GQupLepPCZn5PylcRg.jpg',
        releaseDate: '2016-03-23',
        title: 'Batman vs Superman: A Origem da Justiça',
        voteAverage: 5.97,
      },
      {
        backdropPath:
          'https://image.tmdb.org/t/p/w500https://image.tmdb.org/t/p/w500/dqK9Hag1054tghRQSqLSfrkvQnA.jpg',
        generos: {
          '80': {
            id: 80,
            name: 'Crime',
          },
          '18': {
            id: 18,
            name: 'Drama',
          },
          '53': {
            id: 53,
            name: 'Thriller',
          },
          '28': {
            id: 28,
            name: 'Ação',
          },
        },
        id: 155,
        overview:
          'Após dois anos desde o surgimento do Batman, os criminosos de Gotham City têm muito o que temer. Com a ajuda do tenente James Gordon e do promotor público Harvey Dent, Batman luta contra o crime organizado. Acuados com o combate, os chefes do crime aceitam a proposta feita pelo Coringa e o contratam para combater o Homem-Morcego.',
        posterPath:
          'https://image.tmdb.org/t/p/w500https://image.tmdb.org/t/p/w500/4lj1ikfsSmMZNyfdi8R8Tv5tsgb.jpg',
        releaseDate: '2008-07-16',
        title: 'Batman: O Cavaleiro das Trevas',
        voteAverage: 8.516,
      },
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
          'https://image.tmdb.org/t/p/w500https://image.tmdb.org/t/p/w500/cMUuAgVsMWOCawXonZ4D1dSMd6h.jpg',
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
          '18': {
            id: 18,
            name: 'Drama',
          },
          '28': {
            id: 28,
            name: 'Ação',
          },
        },
        id: 14919,
        overview:
          'Sob a identidade secreta de Batman, o multimilionário Bruce Wayne combate perigosos criminosos que ameaçam Gotham City. Desta vez, além de enfrentar seu arqui-inimigo Coringa, o incansável homem-morcego encara outro terrível vilão: o Fantasma.',
        posterPath:
          'https://image.tmdb.org/t/p/w500https://image.tmdb.org/t/p/w500/opeo3R9l1AgbiIgPqpp1rtPXBwb.jpg',
        releaseDate: '1993-12-25',
        title: 'Batman: A Máscara do Fantasma',
        voteAverage: 7.463,
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
          'https://image.tmdb.org/t/p/w500https://image.tmdb.org/t/p/w500/c3OHQncTAnKFhdOTX7D3LTW6son.jpg',
        generos: {
          '80': {
            id: 80,
            name: 'Crime',
          },
          '18': {
            id: 18,
            name: 'Drama',
          },
          '53': {
            id: 53,
            name: 'Thriller',
          },
          '28': {
            id: 28,
            name: 'Ação',
          },
        },
        id: 49026,
        overview:
          'Após ser culpado pela morte de Harvey Dent e passar de herói a vilão, Batman desaparece. As coisas mudam com a chegada de uma ladra misteriosa, a Mulher-Gato, e Bane, um terrorista mascarado, que fazem Batman abandonar seu exílio forçado.',
        posterPath:
          'https://image.tmdb.org/t/p/w500https://image.tmdb.org/t/p/w500/j4z01cnbTCaVX69bik1612pSuH6.jpg',
        releaseDate: '2012-07-17',
        title: 'Batman: O Cavaleiro das Trevas Ressurge',
        voteAverage: 7.782,
      },
      {
        backdropPath:
          'https://image.tmdb.org/t/p/w500https://image.tmdb.org/t/p/w500/iQJ1gC2p6yn5wnBEklhPaEFJ3n1.jpg',
        generos: {
          '16': {
            id: 16,
            name: 'Animação',
          },
          '28': {
            id: 28,
            name: 'Ação',
          },
          '878': {
            id: 878,
            name: 'Ficção científica',
          },
        },
        id: 886396,
        overview:
          'Jonathan Kent e o jovem companheiro relutante Damian Wayne estão encarregados de salvar o mundo da destruição iminente. Os dois devem unir forças para resgatar seus pais e salvar o planeta, tornando-se os super-heróis que deveriam ser.',
        posterPath:
          'https://image.tmdb.org/t/p/w500https://image.tmdb.org/t/p/w500/vKUiO82S3r2OkgpTtuTTL6mnpjk.jpg',
        releaseDate: '2022-10-17',
        title: 'Batman e Superman: Batalha dos Super Filhos',
        voteAverage: 7.665,
      },
      {
        backdropPath:
          'https://image.tmdb.org/t/p/w500https://image.tmdb.org/t/p/w500/bNMw3onveTYU7PpLQRK0HQK8JRb.jpg',
        generos: {
          '16': {
            id: 16,
            name: 'Animação',
          },
          '80': {
            id: 80,
            name: 'Crime',
          },
          '28': {
            id: 28,
            name: 'Ação',
          },
        },
        id: 69735,
        overview:
          'Bruce Wayne retorna para casa depois de anos de treinamento para se tornar um combatente do crime, enquanto o Tenente James Gordon se muda para Gotham e encontra a corrupção em todas as esferas da administração. Assim tem início a batalha de Wayne contra as famílias mafiosas e bandidos de Gotham, sem contar a polícia, que nos primórdios de Batman, atacam o morcego freneticamente.',
        posterPath:
          'https://image.tmdb.org/t/p/w500https://image.tmdb.org/t/p/w500/9e0Yftt4svEI268iogQQdMXvng6.jpg',
        releaseDate: '2011-09-27',
        title: 'Batman: Ano Um',
        voteAverage: 7.247,
      },
      {
        backdropPath:
          'https://image.tmdb.org/t/p/w500https://image.tmdb.org/t/p/w500/oSogG5fpITtg11UGz8tfRNfuMeA.jpg',
        generos: {
          '16': {
            id: 16,
            name: 'Animação',
          },
          '9648': {
            id: 9648,
            name: 'Mistério',
          },
          '80': {
            id: 80,
            name: 'Crime',
          },
          '28': {
            id: 28,
            name: 'Ação',
          },
        },
        id: 736074,
        overview:
          'O assassino conhecido como Holiday continua a perseguir a família do crime Falcone, enquanto uma nova classe de criminosos fantasiados sobe em Gotham City. Batman suspeita que um ex-aliado pode ser o assassino em série.',
        posterPath:
          'https://image.tmdb.org/t/p/w500https://image.tmdb.org/t/p/w500/9aU7b0dBctae0aLRYy6joj467zV.jpg',
        releaseDate: '2021-07-26',
        title: 'Batman: O Longo Dia das Bruxas - Parte 2',
        voteAverage: 7.421,
      },
      {
        backdropPath:
          'https://image.tmdb.org/t/p/w500https://image.tmdb.org/t/p/w500/eoMushgujydxFplE9yPZ54lwOvo.jpg',
        generos: {
          '16': {
            id: 16,
            name: 'Animação',
          },
          '35': {
            id: 35,
            name: 'Comédia',
          },
          '28': {
            id: 28,
            name: 'Ação',
          },
          '10751': {
            id: 10751,
            name: 'Família',
          },
        },
        id: 324849,
        overview:
          'No spin-off de Uma Aventura Lego, Batman (Will Arnett) descobre que adotou acidentalmente um garoto órfão. Ele se torna ninguém menos que seu ajudante Robin (Michael Cera). A dupla formada pelo arrogante Homem-Morcego e o seu empolgado ajudante deve combater o crime e prender o Coringa (Zach Galifianakis).',
        posterPath:
          'https://image.tmdb.org/t/p/w500https://image.tmdb.org/t/p/w500/qVf6lTFzDsBZUbYbk8m9dk9SipX.jpg',
        releaseDate: '2017-02-08',
        title: 'Lego Batman: O Filme',
        voteAverage: 7.224,
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
          'https://image.tmdb.org/t/p/w500https://image.tmdb.org/t/p/w500/7eccX0xay9pDj6ZQvU4cu3whw18.jpg',
        generos: {
          '16': {
            id: 16,
            name: 'Animação',
          },
          '9648': {
            id: 9648,
            name: 'Mistério',
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
        id: 1003579,
        overview:
          'Durante uma longa viagem de descoberta, na qual adotou três órfãos pelo mundo, Bruce Wayne encontra o Pinguim no ártico e descobre que um culto planeja a destruição de Gotham City. Agora, ele precisa voltar para casa e vestir o manto do Batman para proteger a cidade onde seus pais foram assassinados por um louco vinte anos antes. Mas será que o herói que acredita na ciência conseguirá manter sua sanidade quando descobrir que não está enfrentando criminosos ou loucos, mas magia antiga, demônios de fogo e deuses antigos interdimensionais?',
        posterPath:
          'https://image.tmdb.org/t/p/w500https://image.tmdb.org/t/p/w500/hTQMObXnPjV8Yo90hiC7quSz0U7.jpg',
        releaseDate: '2023-03-10',
        title: 'Batman: A Perdição Chegou a Gotham',
        voteAverage: 6.615,
      },
      {
        backdropPath:
          'https://image.tmdb.org/t/p/w500https://image.tmdb.org/t/p/w500/8UHbmR3WP86BspfwZZPgsVxxCFJ.jpg',
        generos: {
          '16': {
            id: 16,
            name: 'Animação',
          },
          '35': {
            id: 35,
            name: 'Comédia',
          },
          '28': {
            id: 28,
            name: 'Ação',
          },
          '878': {
            id: 878,
            name: 'Ficção científica',
          },
          '10751': {
            id: 10751,
            name: 'Família',
          },
        },
        id: 484862,
        overview:
          'Quando Scooby-Doo e seu grupo se deparam com criminosos demasiado perigosos para eles, Batman aparece para salvar o dia! Quando um caso não resolvido do passado de Batman volta para o assombrar e o misterioso Crimson Cloak ameaça tomar posse de Gotham, Batman recruta a Mystery Inc. para ajudar a solucionar o caso. Será que o trabalho de equipe será suficiente para resolver o mistério e destruir os planos dos vilões mais perigosos que o mundo já viu? Prepare seu cinto de utilidade com instrumentos e os biscoitos Scooby para descobrir à medida que você se prepara para uma aventura altamente emocionante!',
        posterPath:
          'https://image.tmdb.org/t/p/w500https://image.tmdb.org/t/p/w500/7S9uKgx9s147R0873GZ5h4W0HWY.jpg',
        releaseDate: '2018-01-31',
        title: 'Scooby-Doo! & Batman: Os Bravos e Destemidos',
        voteAverage: 7.3,
      },
      {
        backdropPath:
          'https://image.tmdb.org/t/p/w500https://image.tmdb.org/t/p/w500/jvRewPpawHAfBW38EzHoFdTVEez.jpg',
        generos: {
          '16': {
            id: 16,
            name: 'Animação',
          },
          '80': {
            id: 80,
            name: 'Crime',
          },
          '28': {
            id: 28,
            name: 'Ação',
          },
          '12': {
            id: 12,
            name: 'Aventura',
          },
          '14': {
            id: 14,
            name: 'Fantasia',
          },
        },
        id: 732450,
        overview:
          'Na década de 1970, Bruce Wayne enfrenta uma ameaça mortal de seu passado com a ajuda de três ex-colegas das artes marciais: Richard Dragon, Ben Turner e Lady Shiva.',
        posterPath:
          'https://image.tmdb.org/t/p/w500https://image.tmdb.org/t/p/w500/ydnDIq7NLIzBb2dThiFaR5MAdKb.jpg',
        releaseDate: '2021-01-12',
        title: 'Batman: Alma do Dragão',
        voteAverage: 6.742,
      },
      {
        backdropPath:
          'https://image.tmdb.org/t/p/w500https://image.tmdb.org/t/p/w500/sA50fD5aLbYPRU0fMCHIZ88gc5g.jpg',
        generos: {
          '16': {
            id: 16,
            name: 'Animação',
          },
          '80': {
            id: 80,
            name: 'Crime',
          },
          '28': {
            id: 28,
            name: 'Ação',
          },
          '878': {
            id: 878,
            name: 'Ficção científica',
          },
        },
        id: 581997,
        overview:
          'Quando uma nova ameaça começa a roubar tecnologia experimental da cidade de Gotham, Batman se coloca em estado de alerta. Mas uma equipe de guerreiros, que espreita por debaixo das ruas, também investiga o caso: as Tartarugas Ninja! Liderados por Leonardo, esses irmãos – o esperto Donatello, o destemido Raphael e o brincalhão Michelangelo – são artistas marciais misteriosos que acabarão cruzando caminhos com o Cavaleiro Negro. Warner Bros Home Entertainment, DC e Nickelodeon apresentam Batman vs. Tartarugas Ninja, uma aventura estonteante de acelerar o coração, numa proporção que Gotham jamais viu!',
        posterPath:
          'https://image.tmdb.org/t/p/w500https://image.tmdb.org/t/p/w500/wzRkYSd8nHwnMn2Tk3vzqHCL6mH.jpg',
        releaseDate: '2019-03-31',
        title: 'Batman vs. As Tartarugas Ninjas',
        voteAverage: 7.136,
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
    ]),
  )
})
