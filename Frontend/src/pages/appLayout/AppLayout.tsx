import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <>
      <div>App Layout</div>
      <head>Header</head>
      <Outlet />
      <footer>Footer</footer>
    </>
  )
}
