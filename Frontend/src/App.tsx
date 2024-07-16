import { Button } from '@/components/ui/button.tsx'
import './styles/global.css'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog.tsx'

export function App() {
  return (
    <div className={'bg-blue-400'}>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant={'outline'} className={''}>
            clique em mim uiuiuiui
          </Button>
        </DialogTrigger>

        <DialogContent className={'bg-blue-400'}>
          <div className={'grid grid-cols-2'}>
            <h1>a imagem vem aqui</h1>
            <DialogHeader>
              <DialogTitle>Meu titulo gostosao</DialogTitle>
              <DialogDescription>Esse eh um motal gostosao</DialogDescription>
            </DialogHeader>
          </div>

          <div className={'bg-blue-400'}>
            <span>oioioioi</span>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
