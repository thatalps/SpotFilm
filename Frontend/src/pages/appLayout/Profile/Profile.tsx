import { UserInfo } from '@/pages/appLayout/Profile/UserInfo.tsx'
import { UserMovies } from '@/pages/appLayout/Profile/UserMovies.tsx'

export function Profile() {
  return (
    <div
      className={
        'text-gray-200 bg-darkBlue body-spacing mt-10 grid grid-cols-4 gap-20'
      }
    >
      <UserInfo />

      <UserMovies />
    </div>
  )
}
