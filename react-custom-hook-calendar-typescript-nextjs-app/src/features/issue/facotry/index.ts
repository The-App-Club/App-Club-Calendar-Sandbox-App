import { issueRepository } from '@/features/issue/repository'
import { IssueData } from '@/features/issue/types'

export interface issueFactory {
  listUp({ page, size }: { page: number; size?: number }): Promise<IssueData[]>
}

export const factory = {
  issueFactory: (): issueFactory => {
    return new issueRepository()
  },
}
