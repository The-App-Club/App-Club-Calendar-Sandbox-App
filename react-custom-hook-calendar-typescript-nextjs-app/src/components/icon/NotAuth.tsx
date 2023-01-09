/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const NotAuth = ({
  width = 100,
  height = 100,
}: {
  width?: number
  height?: number
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 100 100'
      width={`${width}px`}
      height={`${height}px`}
    >
      <path fill='none' d='M0 0h256v256H0z' />
      <circle
        cx='128'
        cy='140'
        r='20'
        fill='none'
        stroke='#000'
        strokeLinecap='round'
        strokeLinejoin='round'
        css={css`
          stroke-width: 13.6594px;
        `}
        transform='matrix(.42314 0 0 .3999 -3.925 3.624)'
      />
      <path
        fill='none'
        stroke='#000'
        strokeLinecap='round'
        strokeLinejoin='round'
        css={css`
          stroke-width: 6px;
        `}
        d='M50.236 68.73v9.597'
      />
      <rect
        x='13'
        y='38.813'
        width='74.473'
        height='51.187'
        rx='8'
        fill='none'
        stroke='#000'
        strokeLinecap='round'
        strokeLinejoin='round'
        css={css`
          stroke-width: 6px;
        `}
      />
      <path
        d='M35.003 38.813V24.416c0-11.081 12.695-18.007 22.85-12.466 4.713 2.572 7.617 7.325 7.617 12.466v14.397'
        fill='none'
        stroke='#000'
        strokeLinecap='round'
        strokeLinejoin='round'
        css={css`
          stroke-width: 6px;
        `}
      />
    </svg>
  )
}

export default NotAuth
