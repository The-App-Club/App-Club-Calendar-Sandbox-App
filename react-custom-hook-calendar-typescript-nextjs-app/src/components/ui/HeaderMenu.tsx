/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react'

import NextLink from 'next/link'

import { css } from '@emotion/react'
import { Link } from '@mui/joy'

import theme from '@/config/theme'
import useHeaderMenu from '@/libs/useHeaderMenu'

import type { HeaderMenu as Menu } from '@/config/headerMenu'

const HeaderMenu = ({ menu }: { menu: Menu }) => {
  // https://nextjs.org/docs/messages/react-hydration-error
  const {
    activeHeaderMenu: { activeName },
  } = useHeaderMenu()
  const [borderBottom, setBorderBottom] = useState<string>(`transparent`)

  useEffect(() => {
    setBorderBottom(
      `${
        menu.name === activeName
          ? theme.colorSchemes.light.palette.primary[600]
          : 'transparent'
      }`
    )
  }, [activeName, menu])

  return (
    <NextLink key={menu.id} href={menu.canonicalURL || menu.url} passHref>
      <Link
        underline='none'
        css={css`
          display: block;
          margin: 0 0.5rem;
          ::after {
            display: block;
            content: ' ';
            width: 100%;
            height: 2px;
            border-bottom: 2px solid ${borderBottom};
          }
        `}
      >
        {menu.name}
      </Link>
    </NextLink>
  )
}

export default HeaderMenu
