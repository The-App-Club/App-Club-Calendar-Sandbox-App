import { AxiosResponse } from 'axios'

import { issueFactory } from '@/features/issue/facotry'
import { IssueData } from '@/features/issue/types'
import { axios } from '@/libs/axios'
import { ErrorData } from '@/types/error'

export class issueRepository implements issueFactory {
  async listUp({
    page,
    size,
  }: {
    page: number
    size?: number
  }): Promise<IssueData[]> {
    try {
      const response: AxiosResponse<IssueData[], ErrorData> = await axios.get(
        `https://api.github.com/repos/facebook/react/issues?per_page=${size}&state=all&page=${page}`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'get',
        }
      )
      const { data } = response
      return data
    } catch (error) {
      throw error
    }
  }
}
