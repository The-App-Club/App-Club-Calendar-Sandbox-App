import { z } from 'zod'

import { IssueSchema } from '@/features/issue/domains/issue'

const IssueData = IssueSchema.nullish()

export type IssueData = z.infer<typeof IssueData>
export const ISSUE_KEY = 'issue'
