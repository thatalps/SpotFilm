import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs.tsx'
import { MoviePopupRatingSection } from '@/components/moviePopup/MoviePopupRatingSection.tsx'
import { MoviePopupCommentSection } from '@/components/moviePopup/MoviePopupCommentSection.tsx'
import { MoviePopupHandleLists } from '@/components/moviePopup/MoviePopupHandleLists.tsx'

export function MoviePopupTabs({ id, name }: { id: number; name: string }) {
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
        <MoviePopupRatingSection movieId={id} />
      </TabsContent>
      <TabsContent value="comment">
        <MoviePopupCommentSection id={id} />
      </TabsContent>
      <TabsContent value="list">
        <MoviePopupHandleLists movie={{ id, name }} />
      </TabsContent>
    </Tabs>
  )
}
