/** @jsxImportSource @emotion/react */

import NextLink from 'next/link'
import { useRouter } from 'next/router'

import { css } from '@emotion/react'
import { Box, Divider, Link, Typography } from '@mui/joy'
import { ArrowLeft } from 'phosphor-react'

import { FallbackError } from '@/components/fallback/FallbackError'
import { FallbackLoading } from '@/components/fallback/FallbackLoading'
import Spacer from '@/components/ui/Spacer'
import useFindFilmByIdHook from '@/features/film/hooks/id.hook'
import { FILM_KEY } from '@/features/film/types'
import { queryClient } from '@/libs/queryClient'

const Film = () => {
  const router = useRouter()
  const { filmId } = router.query
  const { data, error, refetch } = useFindFilmByIdHook({
    filmId: filmId as string,
  })

  if (error) {
    return (
      <FallbackError
        message={error.message}
        iconSize={40}
        refetch={() => {
          queryClient.removeQueries([FILM_KEY, filmId])
          refetch()
        }}
      />
    )
  }

  if (!data) {
    return <FallbackLoading />
  }

  return (
    <Box component={'section'} className={'mx-auto mt-24 w-full max-w-lg'}>
      <Box
        css={css`
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        `}
      >
        <NextLink href={'/films'} passHref>
          <Link
            underline='none'
            css={css`
              display: flex;
              align-items: center;
              justify-content: flex-start;
            `}
          >
            <ArrowLeft size={32} />
          </Link>
        </NextLink>
        <Typography
          component={'h1'}
          level='h1'
          css={css`
            display: flex;
            justify-content: center;
            align-items: center;
          `}
        >
          Focused Film
        </Typography>
      </Box>
      <Spacer />
      <Divider />
      <Spacer />
      <Typography component={'h2'} level={'h2'}>
        {data.title}
      </Typography>
      <Typography
        component={'span'}
        color={'neutral'}
        css={css`
          font-weight: 700;
          font-size: 1.25rem; /* 20px */
          line-height: 1.75rem; /* 28px */
        `}
      >
        {data.watched ? '視聴済み' : '未視聴'}
      </Typography>
      <Typography component={'p'}>{`ID: ${data.id}`}</Typography>
    </Box>
  )
}

export default Film
