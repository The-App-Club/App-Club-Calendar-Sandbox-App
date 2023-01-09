import { useEffect, useMemo } from 'react'

import { useRouter } from 'next/router'

import { useKeyPress } from 'react-use'
import { useRecoilValue, useSetRecoilState } from 'recoil'

import { searchBarState } from '@/features/film/stores/searchBar'
import { FilmsData } from '@/features/film/types'

const useSearchBar = (data: FilmsData) => {
  const router = useRouter()
  const setSearchBar = useSetRecoilState(searchBarState)
  const activeSearchBar = useRecoilValue(searchBarState)

  // https://github.com/streamich/react-use/blob/master/docs/useKeyPress.md
  const [isPressedArrowDown] = useKeyPress('ArrowDown')
  const [isPressedArrowUp] = useKeyPress('ArrowUp')
  const [isPressedEnter] = useKeyPress('Enter')
  const [isPressedEscape] = useKeyPress('Escape')

  const maxSize = useMemo(() => {
    if (!data) {
      return 0
    }
    return data.length
  }, [data])

  const { activeIndex } = useMemo(() => {
    return { ...activeSearchBar }
  }, [activeSearchBar])

  useEffect(() => {
    if (isPressedEnter) {
      if (activeIndex !== null && activeIndex !== undefined && data) {
        router.push({
          pathname: `/films/${data[activeIndex]?.id}`,
        })
      }
    }
  }, [isPressedEnter, activeIndex, data, router])

  useEffect(() => {
    if (!isPressedArrowUp) {
      return
    }
    setSearchBar((prevState) => {
      return {
        activeIndex:
          prevState.activeIndex !== 0 ? prevState.activeIndex - 1 : maxSize - 1,
      }
    })
  }, [isPressedArrowUp, setSearchBar, maxSize])

  useEffect(() => {
    if (!isPressedArrowDown) {
      return
    }
    setSearchBar((prevState) => {
      return {
        activeIndex:
          prevState.activeIndex !== maxSize - 1 ? prevState.activeIndex + 1 : 0,
      }
    })
  }, [isPressedArrowDown, maxSize, setSearchBar])

  return useMemo(() => {
    return {
      activeIndex,
      isPressedArrowDown,
      isPressedArrowUp,
      isPressedEnter,
      isPressedEscape,
    }
  }, [
    activeIndex,
    isPressedArrowDown,
    isPressedArrowUp,
    isPressedEnter,
    isPressedEscape,
  ])
}

export default useSearchBar
