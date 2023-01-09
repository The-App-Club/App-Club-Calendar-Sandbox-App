import { atom } from 'recoil'
import { z } from 'zod'

export const NeatPaginationSchema = z.object({
  pageNumber: z.number(),
})

export type NeatPagination = z.infer<typeof NeatPaginationSchema>

const neatPaginationState = atom<NeatPagination>({
  key: 'neatPagination',
  default: {
    pageNumber: 1,
  },
})

export { neatPaginationState }
