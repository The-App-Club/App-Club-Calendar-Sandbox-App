/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

export const Spacer = ({ height = `1rem` }: { height?: string }) => {
  return (
    <div
      css={css`
        width: 100%;
        height: ${height};
      `}
    />
  )
}
export default Spacer
