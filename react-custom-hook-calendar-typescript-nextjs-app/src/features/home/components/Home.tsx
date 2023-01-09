/** @jsxImportSource @emotion/react */

import NextLink from 'next/link'

import { css } from '@emotion/react'
import { Box, Divider, Typography } from '@mui/joy'
import { Link } from '@mui/joy'

import Spacer from '@/components/ui/Spacer'

const Home = () => {
  return (
    <Box component={'section'} className={'mx-auto mt-24 w-full max-w-lg'}>
      <Typography
        component={'h1'}
        level='h1'
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        ホーム
      </Typography>
      <Spacer />
      <Divider />
      <Spacer />
      <NextLink href={`/issues`} passHref>
        <Link underline='none'>issues</Link>
      </NextLink>
      <NextLink href={`/films`} passHref>
        <Link underline='none'>films</Link>
      </NextLink>
    </Box>
  )
}

export default Home
