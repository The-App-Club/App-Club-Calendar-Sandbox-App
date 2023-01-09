/** @jsxImportSource @emotion/react */

import NextLink from 'next/link'

import { css } from '@emotion/react'
import { Box, Button, Link } from '@mui/joy'

import Logo from '@/components/icon/Logo'
import HeaderMenu from '@/components/ui/HeaderMenu'
import { env } from '@/config/env'
import { headerMenus as menus } from '@/config/headerMenu'

import type { HeaderMenu as Menu } from '@/config/headerMenu'

const Header = () => {
  const handleHappyNewYear = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    window.alert('Happy New Year!')
  }

  return (
    <header className='fixed top-0 z-10 flex min-h-[60px] w-full items-center justify-between bg-white px-4 py-2 shadow-xl'>
      <NextLink href={'/'} passHref>
        <Link
          css={css`
            margin-right: 1rem;
            display: flex;
            align-items: center;
            @media (max-width: 920px) {
              display: none;
            }
          `}
        >
          <Logo width={40} height={40} />
        </Link>
      </NextLink>
      {!!env.NEXT_PUBLIC_DEBUG_FLG && (
        <Box
          css={css`
            display: flex;
            align-items: center;
            gap: 0.5rem;
          `}
        >
          <Button variant='solid' color='neutral' onClick={handleHappyNewYear}>
            Happy New Year
          </Button>
        </Box>
      )}
      <Box
        css={css`
          display: flex;
          align-items: center;
          flex: 1;
          @media (max-width: 920px) {
            display: none;
          }
        `}
      >
        {menus.map((menu: Menu, index: number) => {
          return <HeaderMenu key={index} menu={menu} />
        })}
      </Box>
    </header>
  )
}

export default Header
