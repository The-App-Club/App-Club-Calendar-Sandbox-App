import { Film } from '@/features/film/domains/film'
import { FilmRepository } from '@/features/film/repository'
import { FilmData, FilmsData } from '@/features/film/types'

export interface FilmFactory {
  find({ id }: Pick<Film, 'id'>): Promise<FilmData>
  listUp(): Promise<FilmsData>
}

export const factory = {
  filmFactory: (): FilmFactory => {
    return new FilmRepository()
  },
}
