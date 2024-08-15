import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs.tsx'
import { MoviePopupRatingSection } from '@/components/moviePopup/MoviePopupRatingSection.tsx'
import { MoviePopupCommentSection } from '@/components/moviePopup/MoviePopupCommentSection.tsx'

export function MoviePopupTabs({ id }: { id: number }) {
  return (
    <Tabs defaultValue="comment" className="w-full">
      <TabsList className={'flex justify-center bg-transparent'}>
        <div className={'max-w-fit '}>
          <TabsTrigger value="rating">Avalie</TabsTrigger>
          <TabsTrigger value="comment">Comente</TabsTrigger>
        </div>
      </TabsList>
      <TabsContent value="rating">
        <MoviePopupRatingSection />
      </TabsContent>
      <TabsContent value="comment">
        <MoviePopupCommentSection id={id} />
      </TabsContent>
    </Tabs>
  )
}
