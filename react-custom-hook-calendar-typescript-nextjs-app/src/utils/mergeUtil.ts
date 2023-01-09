import { flatten, unflatten } from 'flat'
import { mergeDeepWith } from 'ramda'

// https://github.com/jhildenbiddle/mergician/issues/1
export type ObjectLiteral = Record<any, any>

const merge = (...objects: ObjectLiteral[]): ObjectLiteral => {
  const result = objects.reduce((acc: ObjectLiteral, cur: ObjectLiteral) => {
    return mergeDeepWith(
      (x, y) => {
        if (x) return x
        if (y) return y
        return null
      },
      flatten(acc),
      flatten(cur)
    )
  }, {})
  return unflatten(result)
}

export { merge }
