import { useQuery } from '@tanstack/react-query'

import { factory } from '@/features/film/factory'
import { FILM_KEY, FilmsData } from '@/features/film/types'
import { ErrorData } from '@/types/error'

const filmRepository = factory.filmFactory()
const useListUpFilmHook = () => {
  const { data, error, refetch } = useQuery<FilmsData, ErrorData>([FILM_KEY], {
    queryFn: async () => {
      return await filmRepository.listUp()
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
  })
  return { data, error, refetch }
}

export default useListUpFilmHook
