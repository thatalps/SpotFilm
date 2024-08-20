import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
} from '@/components/ui/menubar.tsx'
import { MenubarTrigger } from '@radix-ui/react-menubar'
import { NavLink } from '@/components/NavLink.tsx'
import { Button } from '@/components/ui/button.tsx'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { GlobalContext } from '@/context/GlobalContext.tsx'
import { getMoviesByGenre } from '@/api/movies/getMoviesByGenre.ts'
import { toast } from 'sonner'

export function Navbar() {
  const { user, logout } = useContext(GlobalContext)
  const navigate = useNavigate()
  const { genres } = useContext(GlobalContext)

  function getMovies(id: number, label: string) {
    try {
      getMoviesByGenre(id).then((res) => {
        navigate('./movies', { state: { label, movies: res } })
      })
    } catch (e) {
      toast.error('Falha ao carregar os filmes')
    }
  }

  return (
    <div className={'bg-darkBlue '}>
      <div
        className={
          'flex justify-between py-2 items-center text-xl body-spacing'
        }
      >
        <Link to={'./'}>
          <h1 className={'font-josefin-sans'}>SpotFilm</h1>
        </Link>

        <div className={'flex gap-3  items-center'}>
          <Menubar className={'bg-transparent border-0'}>
            <MenubarMenu>
              <MenubarTrigger asChild>
                <Button className={'text-base'} variant={'ghost'}>
                  Categorias
                </Button>
              </MenubarTrigger>
              <MenubarContent className={'flex flex-col'}>
                {genres &&
                  genres.map((genre) => {
                    return (
                      <MenubarItem key={genre.id} className={'justify-center'}>
                        <Button
                          key={genre.id}
                          variant={'ghost'}
                          onClick={() => getMovies(genre.id, genre.name)}
                        >
                          {genre.name}
                        </Button>
                      </MenubarItem>
                    )
                  })}
              </MenubarContent>
            </MenubarMenu>
          </Menubar>

          {user?.name.length !== undefined ? (
            <>
              <NavLink to={'./'}>Para você</NavLink>
              <NavLink to={'./profile'}>Perfil</NavLink>
              <Button
                className={'text-base'}
                variant={'ghost'}
                onClick={() => logout()}
              >
                Sair
              </Button>
            </>
          ) : (
            <>
              <NavLink to={'./account/login'}>Logar</NavLink>
              <NavLink to={'./account/signup'}>Cadastrar</NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
