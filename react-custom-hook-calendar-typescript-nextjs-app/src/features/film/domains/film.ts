import { z } from 'zod'

export const FilmSchema = z.object({
  id: z.string(),
  title: z.string(),
  watched: z.boolean(),
})

export type Film = z.infer<typeof FilmSchema>
