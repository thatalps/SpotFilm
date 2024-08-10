import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from '@/pages/account/Login.tsx'
import Account from '@/pages/account/Account.tsx'
import { Signup } from '@/pages/account/Signup.tsx'
import Home from '@/pages/appLayout/Home.tsx'
import { Profile } from '@/pages/appLayout/Profile/Profile.tsx'
import { AppLayout } from '@/pages/appLayout/AppLayout.tsx'
import { AllMovies } from '@/pages/AllMovies.tsx'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'account'} element={<Account />}>
          <Route path={'login'} element={<Login />} />
          <Route path={'signup'} element={<Signup />} />
        </Route>

        <Route element={<AppLayout />}>
          <Route path={''} element={<Home />} />
          <Route path={'profile'} element={<Profile />} />
          <Route path={'movies'} element={<AllMovies />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
