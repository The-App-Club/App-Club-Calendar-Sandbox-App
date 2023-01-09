/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import { Box, Divider, Typography } from '@mui/joy'
import { ArrowLeft, ArrowRight } from 'phosphor-react'

import Spacer from '@/components/ui/Spacer'
import theme from '@/config/theme'
import useCalendar, { WeekType } from '@/features/calendar/hooks/useCalendar'
import { dd } from '@/utils/dateUtil'

const Row = ({
  weekNumber,
  weeks,
}: {
  weekNumber: number
  weeks: WeekType[]
}) => {
  return (
    <Box
      css={css`
        display: grid;
        grid-template-rows: repeat(1, auto);
        grid-template-columns: repeat(8, auto);
      `}
    >
      <Typography
        css={css`
          display: flex;
          align-items: center;
          justify-content: center;
        `}
      >{`${weekNumber}week`}</Typography>
      {weeks.map((week, index) => {
        return (
          <Box
            key={index}
            css={css`
              display: flex;
              align-items: center;
              justify-content: center;
              min-height: 3rem;
              font-weight: 700;
              background: ${week.isToday
                ? theme.colorSchemes.light.palette.neutral[400]
                : 'inherit'};
            `}
          >
            <Typography
              css={css`
                color: ${!week.isCurrentMonth
                  ? theme.colorSchemes.light.palette.neutral[300]
                  : 'inherit'};
              `}
            >
              {dd(week.day)}
            </Typography>
          </Box>
        )
      })}
    </Box>
  )
}

const Calendar = () => {
  const {
    data: { weeks, legend },
    nextMonth,
    prevMonth,
  } = useCalendar()

  const handlePrev = () => {
    prevMonth()
  }

  const handleNext = () => {
    nextMonth()
  }

  return (
    <Box component={'section'} className={'mx-auto mt-24 w-full max-w-lg'}>
      <Box
        css={css`
          display: flex;
          justify-content: space-between;
        `}
      >
        <ArrowLeft
          size={32}
          css={css`
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
          `}
          onClick={handlePrev}
        />
        <Typography
          component={'h1'}
          level='h1'
          css={css`
            display: flex;
            justify-content: center;
            align-items: center;
          `}
        >
          Calendar
        </Typography>
        <ArrowRight
          size={32}
          css={css`
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
          `}
          onClick={handleNext}
        />
      </Box>
      <Spacer />
      <Divider />
      <Spacer />
      <Typography
        css={css`
          font-size: 1.5rem; /* 24px */
          line-height: 2rem; /* 32px */
          font-weight: 700;
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        {legend}
      </Typography>
      <Spacer />
      <Box
        css={css`
          display: grid;
          grid-template-rows: repeat(1, auto);
          grid-template-columns: repeat(8, auto);
        `}
      >
        <Typography
          css={css`
            display: flex;
            align-items: center;
            justify-content: center;
            border-bottom: 2px solid
              ${theme.colorSchemes.light.palette.neutral[300]};
          `}
        >{`#week`}</Typography>
        {weeks[0].values.map((week: WeekType, index: number) => {
          return (
            <Box
              key={index}
              css={css`
                display: flex;
                align-items: center;
                justify-content: center;
                border-bottom: 2px solid
                  ${theme.colorSchemes.light.palette.neutral[300]};
                min-height: 3rem;
              `}
            >
              <Typography>{`${week.weekDay}`}</Typography>
            </Box>
          )
        })}
      </Box>

      {weeks.map((week, index) => {
        const { key, values } = week
        return <Row key={index} weekNumber={key as number} weeks={values} />
      })}
    </Box>
  )
}

export default Calendar
