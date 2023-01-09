import { useRecoilValue, useSetRecoilState } from 'recoil'

import { headerState } from '@/stores/header'

const useHeaderMenu = () => {
  const setHeaderMenu = useSetRecoilState(headerState)

  const activeHeaderMenu = useRecoilValue(headerState)

  return {
    setHeaderMenu,
    activeHeaderMenu,
  }
}

export default useHeaderMenu
