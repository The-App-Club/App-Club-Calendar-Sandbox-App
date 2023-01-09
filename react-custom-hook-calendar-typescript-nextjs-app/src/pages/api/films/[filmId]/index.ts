import { Chance } from 'chance'
import nextConnect from 'next-connect'

import { env } from '@/config/env'
import { FilmsData } from '@/features/film/types'
// import { axios } from '@/libs/axios'
import { BackendResponse } from '@/types/response'

import type { NextApiRequest, NextApiResponse } from 'next'

const handler = nextConnect<NextApiRequest, NextApiResponse>().get(
  async (req, res) => {
    const { filmId } = req.query
    console.log(`filmId`, filmId)
    try {
      if (
        env.NODE_ENV === 'development' &&
        env.NEXT_PUBLIC_ENABLE_RANDOM_ERROR
      ) {
        const isError = Chance().integer({ min: 0, max: 1 })
        if (isError) {
          throw new Error('Cowboy Bebop')
        }
      }
      const response = await fetch(
        `${env.NEXT_PUBLIC_BACKEND_ENDPOINT_BASE_URL}/data/films.json`
      )
      if (response.status === 200) {
        const items: FilmsData = await response.json()
        res.status(response.status).json({
          data: items?.find((item) => {
            return item?.id === filmId
          }),
        })
      } else {
        const item: BackendResponse = await response.json()
        res.status(response.status).json({
          data: item,
        })
      }
      // if (env.NODE_ENV === 'development') {
      //   const response = await fetch(
      //     `${env.NEXT_PUBLIC_BACKEND_ENDPOINT_BASE_URL}/data/films.json`
      //   )
      //   if (response.status === 200) {
      //     const items: FilmsData = await response.json()
      //     res.status(response.status).json({
      //       data: items?.find((item) => {
      //         return item?.id === filmId
      //       }),
      //     })
      //   } else {
      //     const item: BackendResponse = await response.json()
      //     res.status(response.status).json({
      //       data: item,
      //     })
      //   }
      // } else {
      //   const response = await axios.get(
      //     `${env.NEXT_PUBLIC_BACKEND_ENDPOINT_BASE_URL}/films`,
      //     {
      //       method: 'get',
      //       headers: {
      //         'Content-Type': 'application/json',
      //       },
      //     }
      //   )
      //   if (response.status === 200) {
      //     const items: FilmsData = response.data
      //     res.status(response.status).json({
      //       data: items?.find((item) => {
      //         return item?.id === filmId
      //       }),
      //     })
      //   } else {
      //     const item: BackendResponse = response.data
      //     res.status(response.status).json({
      //       data: item,
      //     })
      //   }
      // }
    } catch (error: any) {
      res.status(500).json({
        data: {
          message: error?.message,
        } as BackendResponse,
      })
    }
  }
)

export default handler
