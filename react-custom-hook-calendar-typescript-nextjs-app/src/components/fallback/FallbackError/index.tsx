/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Box, Button, Divider, Typography } from '@mui/joy'

import Warning from '@/components/icon/Warning'
import { Spacer } from '@/components/ui/Spacer'

const FallbackError = ({
  status = 500,
  iconSize = 150,
  message = `Something went wrong...`,
  refetch,
}: {
  status?: number
  iconSize?: number
  message?: string
  refetch?: any
}) => {
  return (
    <Box
      css={css`
        width: 100%;
        max-width: 500px;
        margin: 0 auto;
      `}
    >
      <Box
        css={css`
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        `}
      >
        <Warning width={iconSize} height={iconSize} />
        <Typography
          component={'strong'}
          css={css`
            font-weight: 700;
            font-size: 1.25rem; /* 20px */
            line-height: 1.75rem; /* 28px */
            color: #6b7280; // https://tailwindcss.com/docs/customizing-colors
          `}
        >
          {status}
        </Typography>
        <Typography
          css={css`
            font-weight: 700;
            font-size: 1.125rem; /* 18px */
            line-height: 1.75rem; /* 28px */
            color: #6b7280; // https://tailwindcss.com/docs/customizing-colors
          `}
        >
          {message}
        </Typography>
        <Spacer />
        <Typography
          css={css`
            font-weight: 700;
            font-size: 0.875rem; /* 14px */
            line-height: 1.25rem; /* 20px */
            color: #6b7280; // https://tailwindcss.com/docs/customizing-colors
          `}
        >
          A system error has occurred. Please contact the administrator.
          [090-1234-5678]
        </Typography>
        <Typography
          css={css`
            font-weight: 700;
            font-size: 0.875rem; /* 14px */
            line-height: 1.25rem; /* 20px */
            color: #6b7280; // https://tailwindcss.com/docs/customizing-colors
          `}
        >
          If you are still unable to view the data after several attempts at
          self-recovery, we apologize for the inconvenience, but please contact
          us!
        </Typography>
      </Box>
      <Spacer />
      <Divider />
      <Spacer />
      <Box
        css={css`
          display: flex;
          align-items: center;
          justify-content: center;
        `}
      >
        <Button
          variant='solid'
          onClick={() => {
            if (refetch) {
              refetch()
            }
          }}
        >
          Self Recovery
        </Button>
      </Box>
    </Box>
  )
}

export { FallbackError }
