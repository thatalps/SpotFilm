import { createContext, useEffect, useState } from 'react'
import { IGenre, IList, IUserProfile } from '@/types/interfaces.tsx'
import { getUserProfile } from '@/api/user/getUserProfile.ts'
import { getAllGenres } from '@/api/movies/getAllGenres.ts'
import { getAllLists } from '@/api/list/getAllLists.ts'

interface IGlobalContext {
  setUserData: (data: IUserProfile) => void
  user: IUserProfile | undefined
  logout: () => void
  genres: IGenre[] | undefined
  userLists: IList[] | undefined
  addDataToUserLists: (data: IList) => void
}

export const GlobalContext = createContext({} as IGlobalContext)

export function ContextProvider({ children }) {
  const [user, setUser] = useState<IUserProfile>()
  const [userLists, setUserLists] = useState<IList[]>()
  const [genres, setGenres] = useState<IGenre[]>()

  useEffect(() => {
    getLocalStorage()

    if (!userLists) getAllUserList()

    try {
      getAllGenres().then((res) => setGenres(res.genres))
    } catch (e) {
      console.log(e.message())
    }
  }, [])

  async function getLocalStorage() {
    try {
      const id = localStorage.getItem('userId')
      if (id) {
        const user = await getUserProfile({ id: Number(id) })
        setUser({
          id: Number(id),
          name: user.name,
          genre2: user.genre2,
          genre1: user.genre1,
        })
      }
    } catch (e) {
      console.log(e.message)
    }
  }

  function logout() {
    localStorage.clear()
    setUser(undefined)
  }

  async function getAllUserList() {
    const response = await getAllLists()
    setUserLists(response)
  }

  function setUserData(data: IUserProfile) {
    setUser(data)
  }

  function addDataToUserLists(data: IList) {
    if (!userLists || userLists.length === 0) setUserLists([data])
    else setUserLists((prevState) => [data, ...prevState])
  }

  return (
    <GlobalContext.Provider
      value={{
        setUserData,
        user,
        logout,
        genres,
        userLists,
        addDataToUserLists,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
