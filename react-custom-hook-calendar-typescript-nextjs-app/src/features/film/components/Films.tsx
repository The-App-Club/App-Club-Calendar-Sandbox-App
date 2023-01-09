/** @jsxImportSource @emotion/react */

import NextLink from 'next/link'

import { css } from '@emotion/react'
import { Box, Button, Divider, Link, Typography } from '@mui/joy'

import { FallbackDataEmpty } from '@/components/fallback/FallbackDataEmpty'
import { FallbackError } from '@/components/fallback/FallbackError'
import { FallbackLoading } from '@/components/fallback/FallbackLoading'
import Spacer from '@/components/ui/Spacer'
import useListUpFilmHook from '@/features/film/hooks/listUp.hook'
import useSearchBar from '@/features/film/hooks/useSearchBar'
import { FILM_KEY, FilmsData } from '@/features/film/types'
import { queryClient } from '@/libs/queryClient'
import { ErrorData } from '@/types/error'

const Films = () => {
  const { data, error, refetch } = useListUpFilmHook()
  const { activeIndex } = useSearchBar(data)

  const handleRefresh = async (e: React.MouseEvent) => {
    queryClient.removeQueries([FILM_KEY])
    await refetch()
  }

  const renderContent = ({
    data,
    error,
    refetch,
  }: {
    data: FilmsData
    error: ErrorData
    refetch: any
  }) => {
    if (error) {
      return (
        <FallbackError
          message={error.message}
          iconSize={40}
          refetch={() => {
            queryClient.removeQueries([FILM_KEY])
            refetch()
          }}
        />
      )
    }

    if (!data) {
      return <FallbackLoading />
    }

    if (data.length === 0) {
      return <FallbackDataEmpty />
    }

    return (
      <Box
        css={css`
          display: flex;
          justify-content: center;
          flex-direction: column;
          gap: 1rem;
        `}
      >
        {data.map((item, index) => {
          return (
            <NextLink key={index} href={`/films/${item?.id}`} passHref>
              <Link underline='none'>
                <Box
                  css={css`
                    padding: 1rem 2rem;
                    box-shadow: ${index === activeIndex
                      ? 'rgba(3, 102, 214, 0.3) 0px 0px 0px 3px'
                      : 'rgba(0, 0, 0, 0.18) 0px 2px 4px'};
                  `}
                >
                  <Typography>{item?.title}</Typography>
                </Box>
              </Link>
            </NextLink>
          )
        })}
      </Box>
    )
  }

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
        Films
      </Typography>
      <Spacer />
      <Typography>{activeIndex}</Typography>
      <Spacer />
      <Divider />
      <Spacer />
      <Button fullWidth variant='solid' color='primary' onClick={handleRefresh}>
        Refresh
      </Button>
      <Spacer />
      {renderContent({ data, error, refetch })}
      <Spacer />
    </Box>
  )
}

export default Films
