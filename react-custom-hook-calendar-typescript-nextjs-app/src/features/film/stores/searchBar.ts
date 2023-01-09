import { atom } from 'recoil'
import { z } from 'zod'

const SearchBarSchema = z.object({
  activeIndex: z.number(),
})

export type SearchBar = z.infer<typeof SearchBarSchema>

const searchBarState = atom<SearchBar>({
  key: 'searchBar',
  default: {
    activeIndex: 0,
  },
})

export { searchBarState }
