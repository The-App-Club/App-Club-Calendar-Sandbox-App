import { useCallback, useMemo } from 'react'

import { groupBy, tidy } from '@tidyjs/tidy'
import { useRecoilValue, useSetRecoilState } from 'recoil'

import { calendarState } from '@/features/calendar/stores/calendar'
import { Dayjs } from '@/utils/dateUtil'

export type WeekType = {
  grp: number
  day: Dayjs
  weekDay: string
  isCurrentMonth: boolean
  isToday: boolean
}

export type NeatType = {
  legend: string
  start: Dayjs
  end: Dayjs
  weeks: WeekType[]
}

const makeIt = (start: Dayjs, end: Dayjs, base: Dayjs): NeatType => {
  const days = end.diff(start, 'days')
  const startDay = start.add(0, 'days')
  return [...Array(days)].reduce(
    (acc, cur, idx) => {
      const nextDay = start.add(idx + 1, 'days')
      acc = {
        ...acc,
        weeks: [...acc.weeks].concat({
          day: nextDay,
          weekDay: nextDay.format('ddd'),
          isCurrentMonth: nextDay.format('M') === base.format('M'),
          isToday: nextDay.isToday(),
        }),
      }
      return acc
    },
    {
      start,
      end,
      weeks: [
        {
          day: startDay,
          weekDay: startDay.format('ddd'),
          isCurrentMonth: startDay.format('M') === base.format('M'),
          isToday: startDay.isToday(),
        },
      ],
    }
  )
}

const niceGroup = (data: Record<string, unknown>[]) => {
  let grp = 0
  return (chunk: number = 7) => {
    return data.map((item, n) => {
      if (n % chunk === 0) {
        grp = grp + 1
      }
      return {
        ...item,
        grp,
      }
    })
  }
}

const useCalendar = () => {
  const setCalendar = useSetRecoilState(calendarState)
  const activeCalendar = useRecoilValue(calendarState)

  const prevMonth = useCallback(() => {
    setCalendar((prevState) => {
      return {
        ...prevState,
        defaultDay: prevState.defaultDay.subtract(1, 'months'),
      }
    })
  }, [setCalendar])

  const nextMonth = useCallback(() => {
    setCalendar((prevState) => {
      return {
        ...prevState,
        defaultDay: prevState.defaultDay.add(1, 'months'),
      }
    })
  }, [setCalendar])

  const { defaultDay } = useMemo(() => {
    return { ...activeCalendar }
  }, [activeCalendar])

  const base = useMemo(() => {
    return defaultDay.startOf('month')
  }, [defaultDay])

  const start = useMemo(() => {
    return defaultDay.startOf('month').startOf('week')
  }, [defaultDay])

  const end = useMemo(() => {
    return defaultDay.endOf('month').endOf('week')
  }, [defaultDay])

  const data = useMemo(() => {
    return makeIt(start, end, base)
  }, [start, end, base])

  const niceData = useMemo(() => {
    return {
      ...data,
      legend: base.format('MMMM YYYY'),
      weeks: tidy(
        niceGroup(data.weeks)(7),
        groupBy(['grp'], groupBy.entriesObject())
      ),
    }
  }, [base, data])
  return useMemo(() => {
    return {
      data: niceData,
      prevMonth,
      nextMonth,
    }
  }, [niceData, prevMonth, nextMonth])
}

export default useCalendar
