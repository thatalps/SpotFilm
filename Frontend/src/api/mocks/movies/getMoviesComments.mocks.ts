import { http, HttpResponse } from 'msw'
import { IComment } from '@/types/interfaces.tsx'

export const commentsMock: IComment[] = [
  {
    id: 1,
    created_at: new Date(),
    text: 'Frozen 2 é uma obra-prima visual e emocionalmente cativante que continua a história mágica de Arendelle com maestria. A animação é deslumbrante, com cenários e efeitos que parecem saltar da tela. As canções são poderosas e tocantes, especialmente "Into the Unknown", que se tornou um hino de coragem e auto-descoberta. Além disso, o desenvolvimento dos personagens é profundo e inspirador, mostrando crescimento e novas dimensões de Elsa e Anna. No geral, "Frozen 2" é uma sequência brilhante que encanta tanto crianças quanto adultos, consolidando seu lugar como um clássico moderno.',
    rating: 5,
    name: 'Elsinha',
  },
  {
    id: 2,
    created_at: new Date(),
    text: 'The Boys é uma série eletrizante que redefine o gênero de super-heróis com seu humor negro e crítica social mordaz. Com personagens complexos e tramas imprevisíveis, a série cativa do início ao fim',
    rating: 4,
    name: 'Home Handler',
  },
  {
    id: 3,
    created_at: new Date(),
    text: 'Muito Maneiro',
    rating: 4,
    name: 'Manu',
  },
  {
    id: 4,
    created_at: new Date(),
    text: 'Muito Maneiro',
    rating: 4,
    name: 'Manu',
  },
  {
    id: 5,
    created_at: new Date(),
    text: 'Muito Maneiro',
    rating: 4,
    name: 'Manu',
  },
  {
    id: 6,
    created_at: new Date(),
    text: 'Muito Maneiro',
    rating: 4,
    name: 'Manu',
  },
  {
    id: 7,
    created_at: new Date(),
    text: 'Muito Maneiro',
    rating: 4,
    name: 'Manu',
  },
  {
    id: 8,
    created_at: new Date(),
    text: 'Muito Maneiro',
    rating: 4,
    name: 'Manu',
  },
  {
    id: 9,
    created_at: new Date(),
    text: 'Muito Maneiro',
    rating: 4,
    name: 'Manu',
  },
  {
    id: 12,
    created_at: new Date(),
    text: 'Muito Maneiro',
    rating: 4,
    name: 'Manu',
  },
]

export const GetMoviesCommentsMocks = http.get(
  '/comentario/buscarPorFilme/*',
  () => {
    return new HttpResponse(JSON.stringify(commentsMock))
  },
)
