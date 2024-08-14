import { createContext, useReducer } from 'react'
import { ICardMovieDetails, IComment, IMovie } from '@/types/interfaces.tsx'

enum EnumActionType {
  ADD_MOVIE = 'ADD_MOVIE',
}
interface IAction {
  type: EnumActionType
  payload?: ICardMovieDetails | null | IMovie | IComment[]
}
interface IState {
  movie: IMovie
  comments: IComment[]
}

interface IMovieContextProps {
  setMovie: (movie: IMovie) => void
}
export const MovieContext = createContext({} as IMovieContextProps)

function reducer(state: IState | null, action: IAction) {}

export function MovieContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, null)

  function setMovie(movie: IMovie) {
    dispatch({
      type: EnumActionType.ADD_MOVIE,
      payload: movie,
    })
  }

  return (
    <MovieContext.Provider value={{ setMovie }}>
      {children}
    </MovieContext.Provider>
  )
}
