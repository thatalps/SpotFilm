import { MovieSection } from '@/components/MovieSection.tsx'
import { Header } from '@/components/header/Header.tsx'

function Home() {
  return (
    <>
      <Header />
      <div className={'body-spacing mt-[-40px] flex flex-col gap-10'}>
        <MovieSection name={'Animação'} />
        <MovieSection name={'Comédia'} />
      </div>
    </>
  )
}

export default Home
