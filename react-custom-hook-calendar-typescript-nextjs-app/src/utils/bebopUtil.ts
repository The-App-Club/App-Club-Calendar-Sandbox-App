import { default as cuid } from 'cuid'

const createId = () => {
  return cuid()
}

export { createId }
