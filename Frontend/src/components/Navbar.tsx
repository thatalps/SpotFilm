import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
} from '@/components/ui/menubar.tsx'
import { MenubarTrigger } from '@radix-ui/react-menubar'
import { NavLink } from '@/components/NavLink.tsx'
import { Button } from '@/components/ui/button.tsx'

export function Navbar() {
  return (
    <div className={'bg-darkBlue '}>
      <div
        className={
          'flex justify-between py-2 items-center text-xl body-spacing'
        }
      >
        <h1 className={'font-josefin-sans '}>SpotFilm</h1>

        <div className={'flex gap-10  items-center'}>
          <NavLink to={'./profile'}>Perfil</NavLink>
          <NavLink to={'./profile'}>Todos</NavLink>
          <NavLink to={'./profile'}>Para você</NavLink>

          <Menubar className={'bg-transparent border-0'}>
            <MenubarMenu>
              <MenubarTrigger>
                <Button variant={'ghost'}>Categorias</Button>
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  <NavLink to={''}>Comédia</NavLink>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      </div>
    </div>
  )
}
