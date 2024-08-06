import { MovieSection } from '@/components/MovieSection.tsx'
import { Header } from '@/components/header/Header.tsx'

function Home() {
  return (
    <>
      <Header />
      <div className={'body-spacing mt-[-40px] flex flex-col gap-10'}>
        <MovieSection name={'Ação'} id={28} />
        <MovieSection name={'Aventura'} id={12} />
      </div>
    </>
  )
}

export default Home
