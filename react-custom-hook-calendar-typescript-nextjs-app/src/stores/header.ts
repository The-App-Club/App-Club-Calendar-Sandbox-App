import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

type Header = {
  activeName: string | null
}

const headerState = atom<Header>({
  key: 'header',
  default: {
    activeName: null,
  },
  effects_UNSTABLE: [persistAtom],
})

export { headerState }
