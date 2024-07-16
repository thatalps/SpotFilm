import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from '@/pages/account/Login.tsx'
import Account from '@/pages/account/Account.tsx'
import { Signup } from '@/pages/account/Signup.tsx'
import Home from '@/pages/home/Home.tsx'
import { Profile } from '@/pages/profile/Profile.tsx'
import { AppLayout } from '@/pages/appLayout/AppLayout.tsx'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'account'} element={<Account />}>
          <Route path={'login'} element={<Login />} />
          <Route path={'signup'} element={<Signup />} />
        </Route>

        <Route element={<AppLayout />}>
          <Route path={'home'} element={<Home />} />
          <Route path={'profile'} element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
