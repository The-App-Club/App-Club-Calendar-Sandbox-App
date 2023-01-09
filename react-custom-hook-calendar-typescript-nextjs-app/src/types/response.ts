import { z } from 'zod'

const VanillaBackendResponseSchema = z.object({
  message: z.string(),
})

export type BackendResponse = z.infer<typeof VanillaBackendResponseSchema>
