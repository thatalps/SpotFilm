import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs.tsx'
import { MoviePopupRatingSection } from '@/components/moviePopup/MoviePopupRatingSection.tsx'
import { MoviePopupCommentSection } from '@/components/moviePopup/MoviePopupCommentSection.tsx'
import { MoviePopupHandleLists } from '@/components/moviePopup/MoviePopupHandleLists.tsx'
import { IMovie } from '@/types/interfaces.tsx'

export function MoviePopupTabs({ movie }: { movie: IMovie }) {
  return (
    <Tabs defaultValue="comment" className="w-full">
      <TabsList className={'flex justify-center bg-transparent'}>
        <div className={'max-w-fit '}>
          <TabsTrigger value="rating">Avalie</TabsTrigger>
          <TabsTrigger value="comment">Comente</TabsTrigger>
          <TabsTrigger value="list">Listas</TabsTrigger>
        </div>
      </TabsList>
      <TabsContent value="rating">
        <MoviePopupRatingSection movieId={movie.id} />
      </TabsContent>
      <TabsContent value="comment">
        <MoviePopupCommentSection id={movie.id} />
      </TabsContent>
      <TabsContent value="list">
        <MoviePopupHandleLists movie={movie} />
      </TabsContent>
    </Tabs>
  )
}
