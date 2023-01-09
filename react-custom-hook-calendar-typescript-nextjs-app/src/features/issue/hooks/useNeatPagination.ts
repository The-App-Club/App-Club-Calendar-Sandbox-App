import { useCallback, useMemo } from 'react'

import { max } from 'ramda'
import { useRecoilValue, useSetRecoilState } from 'recoil'

import { neatPaginationState } from '@/features/issue/stores/neatPagination'

const useNeatPagination = () => {
  const setNeatPagination = useSetRecoilState(neatPaginationState)

  const activeNeatPagination = useRecoilValue(neatPaginationState)

  const { pageNumber } = useMemo(() => {
    return { ...activeNeatPagination }
  }, [activeNeatPagination])

  const nextPage = useCallback(() => {
    setNeatPagination((prevState) => {
      return {
        pageNumber: prevState.pageNumber + 1,
      }
    })
  }, [setNeatPagination])

  const prevPage = useCallback(() => {
    setNeatPagination((prevState) => {
      return {
        pageNumber: max(prevState.pageNumber - 1, 1),
      }
    })
  }, [setNeatPagination])

  return useMemo(() => {
    return {
      nextPage,
      prevPage,
      activeNeatPagination,
      pageNumber,
    }
  }, [nextPage, prevPage, activeNeatPagination, pageNumber])
}

export default useNeatPagination
