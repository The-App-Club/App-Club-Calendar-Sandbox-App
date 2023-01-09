/** @jsxImportSource @emotion/react */

import NextLink from 'next/link'

import { css } from '@emotion/react'
import { Avatar, Box, Button, Link, Typography } from '@mui/joy'
import { ArrowsClockwise } from 'phosphor-react'

import { FallbackDataEmpty } from '@/components/fallback/FallbackDataEmpty'
import { FallbackError } from '@/components/fallback/FallbackError'
import { FallbackLoading } from '@/components/fallback/FallbackLoading'
import Spacer from '@/components/ui/Spacer'
import useNeatFetch from '@/features/issue/hooks/useNeatFetch'
import useNeatPagination from '@/features/issue/hooks/useNeatPagination'
import { ISSUE_KEY, IssueData } from '@/features/issue/types'
import { queryClient } from '@/libs/queryClient'
import { ErrorData } from '@/types/error'
import { formatRelativeTime } from '@/utils/dateUtil'

const NeatFetch = () => {
  const { pageNumber } = useNeatPagination()

  const { data, error, refetch } = useNeatFetch({ page: pageNumber })

  const handleRefresh = async (e: React.MouseEvent) => {
    queryClient.removeQueries([
      ISSUE_KEY,
      {
        size: 10,
        page: pageNumber,
      },
    ])
    await refetch()
  }

  const renderContent = ({
    data,
    error,
    refetch,
  }: {
    data: IssueData[] | null | undefined
    error: ErrorData | null | undefined
    refetch: any
  }) => {
    if (error) {
      return (
        <FallbackError
          message={error.message}
          iconSize={40}
          refetch={() => {
            queryClient.removeQueries([
              ISSUE_KEY,
              {
                size: 10,
                page: pageNumber,
              },
            ])
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
      <Box className={`flex flex-col gap-2`}>
        {data.map((item, index) => {
          // https://getcssscan.com/css-box-shadow-examples
          return (
            <Box
              key={index}
              css={css`
                padding: 1rem 2rem;
                box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
              `}
            >
              <Box
                css={css`
                  display: flex;
                  align-items: center;
                  justify-content: flex-start;
                  gap: 0.5rem;
                `}
              >
                <Avatar alt={`${item?.user.id}`} src={item?.user.avatar_url} />
                <Typography
                  component={'span'}
                >{`#${item?.user.id}`}</Typography>
              </Box>
              <NextLink href={`${item?.html_url}`} passHref target={'_blank'}>
                <Link
                  underline='hover'
                  color='neutral'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Typography
                    component={'h3'}
                    level={'h3'}
                    className={`line-clamp-1`}
                  >
                    {item?.title}
                  </Typography>
                </Link>
              </NextLink>
              <Typography
                color='neutral'
                component={'time'}
                css={css`
                  display: flex;
                  align-items: center;
                  justify-content: flex-end;
                  gap: 0.5rem;
                `}
              >
                <ArrowsClockwise size={24} />
                {formatRelativeTime(item?.updated_at)}
              </Typography>
            </Box>
          )
        })}
      </Box>
    )
  }

  return (
    <Box>
      <Button fullWidth variant='solid' color='primary' onClick={handleRefresh}>
        Refresh
      </Button>
      <Spacer />
      {renderContent({ data, error, refetch })}
      <Spacer />
    </Box>
  )
}

export default NeatFetch
