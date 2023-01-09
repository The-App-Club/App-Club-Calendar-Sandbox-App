/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react'

import { css } from '@emotion/react'
import { Box, Button, Typography } from '@mui/joy'
import { ErrorBoundary } from 'react-error-boundary'

import type { FallbackProps } from 'react-error-boundary'

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <Box
      css={css`
        width: 100%;
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
      `}
    >
      <Typography
        component={'strong'}
        css={css`
          font-weight: 700;
          font-size: 1.25rem; /* 20px */
          line-height: 1.75rem; /* 28px */
          color: #6b7280; // https://tailwindcss.com/docs/customizing-colors
          word-break: break-word;
        `}
      >
        {error.name}
      </Typography>
      <Typography
        css={css`
          font-weight: 700;
          font-size: 1.125rem; /* 18px */
          line-height: 1.75rem; /* 28px */
          color: #6b7280; // https://tailwindcss.com/docs/customizing-colors
          word-break: break-word;
        `}
      >
        {error.message}
      </Typography>
      <Typography
        css={css`
          font-weight: 700;
          font-size: 0.875rem; /* 14px */
          line-height: 1.25rem; /* 20px */
          color: #6b7280; // https://tailwindcss.com/docs/customizing-colors
          word-break: break-word;
        `}
      >
        {error.stack}
      </Typography>
      <Button
        variant='solid'
        onClick={resetErrorBoundary}
        css={css`
          padding: 10px 20px;
        `}
      >
        Try Again
      </Button>
    </Box>
  )
}

const ComponentWithErrorBoundary = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [isClient, setIsClinet] = useState<boolean>(false)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsClinet(true)
    }
  }, [])
  return (
    <ErrorBoundary
      FallbackComponent={({ error, resetErrorBoundary }: FallbackProps) => {
        return (
          <ErrorFallback
            error={error}
            resetErrorBoundary={resetErrorBoundary}
          />
        )
      }}
      onReset={(e) => {
        console.log(e)
        console.log('Do Reset')
        // reset the state of your app so the error doesn't happen again
      }}
    >
      {isClient && children}
    </ErrorBoundary>
  )
}

export default ComponentWithErrorBoundary
