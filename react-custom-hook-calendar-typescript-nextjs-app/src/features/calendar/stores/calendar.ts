import { atom } from 'recoil'
import { z } from 'zod'

import { Dayjs, dayjs } from '@/utils/dateUtil'

export const CalendarSchema = z.object({
  defaultDay: z.custom<Dayjs>(),
})

export type Calendar = z.infer<typeof CalendarSchema>

const calendarState = atom<Calendar>({
  key: 'calendar',
  default: {
    defaultDay: dayjs(),
  },
})

export { calendarState }
