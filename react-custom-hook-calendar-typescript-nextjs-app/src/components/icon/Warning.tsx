/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const Warning = ({
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
      width={`${width}`}
      height={`${height}`}
      css={css`
        shape-rendering: geometricprecision;
      `}
    >
      <path fill='none' d='M0 0h256v256H0z' />
      <path
        fill='none'
        stroke='#ec4f3a'
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M50.271 42.598v15.674'
        css={css`
          stroke-width: 6px;
        `}
      />
      <path
        d='M44.62 17.521 11.246 77.078c-2.331 4.172.571 9.388 5.233 9.405h66.749c4.662-.017 7.564-5.233 5.234-9.405L55.087 17.521a5.935 5.935 0 0 0-10.444-.041l-.023.041Z'
        fill='none'
        stroke='#000'
        strokeLinecap='round'
        strokeLinejoin='round'
        css={css`
          stroke-width: 6px;
        `}
      />
      <circle
        cx='120.76'
        cy='171.891'
        fill='#ec4f3a'
        r='12'
        transform='matrix(.25103 0 0 .23966 19.685 30.225)'
        css={css`
          stroke-width: 2.45347px;
        `}
      />
    </svg>
  )
}

export default Warning
