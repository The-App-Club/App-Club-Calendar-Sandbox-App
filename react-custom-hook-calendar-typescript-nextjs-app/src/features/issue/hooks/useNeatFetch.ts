import { useQuery } from '@tanstack/react-query'

import { factory } from '@/features/issue/facotry'
import { ISSUE_KEY, IssueData } from '@/features/issue/types'
import { createAvator } from '@/libs/avator'
import { ErrorData } from '@/types/error'

const issueFactory = factory.issueFactory()

const useNeatFetch = ({ page, size = 10 }: { page: number; size?: number }) => {
  const { data, error, refetch } = useQuery<IssueData[], ErrorData>({
    queryKey: [
      ISSUE_KEY,
      {
        size,
        page,
      },
    ],
    queryFn: async () => {
      return await issueFactory.listUp({ page, size })
    },
    select(data) {
      return data.map((item) => {
        if (item) {
          return {
            ...item,
            user: {
              ...item.user,
              avatar_url: createAvator(`${item.user.id}`),
            },
          }
        } else {
          return item
        }
      })
    },
  })
  return { data, error, refetch }
}

export default useNeatFetch
