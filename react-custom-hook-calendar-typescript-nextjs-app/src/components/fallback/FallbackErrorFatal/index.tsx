/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Box, Typography } from '@mui/joy'

import Error from '@/components/icon/Error'
import { Spacer } from '@/components/ui/Spacer'

const FallbackErrorFatal = ({
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
        <Error width={iconSize} height={iconSize} />
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
      </Box>
    </Box>
  )
}

export { FallbackErrorFatal }
