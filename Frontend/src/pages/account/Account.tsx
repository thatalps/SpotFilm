import { Outlet } from 'react-router-dom'

function Account() {
  return (
    <div
      className={
        'flex justify-between max-w-screen max-h-screen overflow-hidden'
      }
    >
      <picture>
        <img src={'/src/assets/backgroundAccount.png'} />
      </picture>

      <Outlet />
    </div>
  )
}

export default Account
