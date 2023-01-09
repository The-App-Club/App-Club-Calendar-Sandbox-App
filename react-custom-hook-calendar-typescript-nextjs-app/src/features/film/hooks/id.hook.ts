import { useQuery } from '@tanstack/react-query'

import { factory } from '@/features/film/factory'
import { FILM_KEY, FilmData } from '@/features/film/types'
import { ErrorData } from '@/types/error'

const filmRepository = factory.filmFactory()
const useFindFilmByIdHook = ({ filmId }: { filmId: string }) => {
  const { data, error, refetch } = useQuery<FilmData, ErrorData>(
    [FILM_KEY, filmId],
    {
      queryFn: async () => {
        return await filmRepository.find({ id: filmId })
      },
      onSuccess: function (data) {
        console.log(`onSuccess`)
      },
      onError: function (error) {
        console.log(`onError`)
      },
      onSettled: function (data, error) {
        console.log(`onSettled`)
      },
    }
  )
  return { data, error, refetch }
}

export default useFindFilmByIdHook
