/** @jsxImportSource @emotion/react */

import { useMemo } from 'react'

import { css } from '@emotion/react'
import { Box, Button, Divider, Typography } from '@mui/joy'
import { ArrowLeft, ArrowRight } from 'phosphor-react'

import Spacer from '@/components/ui/Spacer'
import NeatFetch from '@/features/issue/components/NeatFetch'
import useNeatPagination from '@/features/issue/hooks/useNeatPagination'

const NeatPagination = () => {
  const { prevPage, nextPage, pageNumber } = useNeatPagination()

  const isDisabledPrev = useMemo(() => {
    return pageNumber === 1
  }, [pageNumber])

  return (
    <Box component={'section'} className={'mx-auto mt-24 w-full max-w-lg'}>
      <Box
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
        `}
      >
        <Typography
          component={'h1'}
          level='h1'
          css={css`
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.5rem;
          `}
        >
          Issues
        </Typography>
      </Box>
      <Spacer />
      <Box
        css={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 3rem;
        `}
      >
        <Button
          disabled={isDisabledPrev}
          fullWidth
          variant='solid'
          color='neutral'
          onClick={prevPage}
          css={css`
            display: flex;
            align-items: center;
            gap: 0.5rem;
          `}
        >
          <ArrowLeft size={32} />
          Prev Page
        </Button>
        <Button
          fullWidth
          variant='solid'
          color='neutral'
          onClick={nextPage}
          css={css`
            display: flex;
            align-items: center;
            gap: 0.5rem;
          `}
        >
          Next Page
          <ArrowRight size={32} />
        </Button>
      </Box>
      <Spacer />
      <Divider />
      <Spacer />
      <NeatFetch />
    </Box>
  )
}

export default NeatPagination
