/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Box, Button } from '@mui/joy'

import Warning from '@/components/icon/Warning'

const FallbackErrorMini = ({
  status = 500,
  iconSize = 40,
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
        display: flex;
        align-items: center;
        gap: 0.5rem;
      `}
    >
      <Warning width={iconSize} height={iconSize} />
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
  )
}

export { FallbackErrorMini }
