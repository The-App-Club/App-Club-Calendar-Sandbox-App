import { z } from 'zod'

import { FilmSchema } from '@/features/film/domains/film'

const FilmDataSchema = FilmSchema.nullish()
const FilmsDataSchema = FilmSchema.nullish().array().nullish()

export type FilmData = z.infer<typeof FilmDataSchema>
export type FilmsData = z.infer<typeof FilmsDataSchema>
export const FILM_KEY = 'film'
