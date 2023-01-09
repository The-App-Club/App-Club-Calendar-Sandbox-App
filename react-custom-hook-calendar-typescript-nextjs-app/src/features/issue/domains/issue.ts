import { z } from 'zod'

export const IssueSchema = z.object({
  id: z.number(),
  title: z.string(),
  html_url: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
  user: z.object({
    id: z.number(),
    avatar_url: z.string(),
  }),
})

export type Issue = z.infer<typeof IssueSchema>
