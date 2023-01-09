export type HeaderMenu = {
  id: number
  name: string
  url: string
  canonicalURL: string | null
}

const headerMenus: HeaderMenu[] = [
  {
    id: 1,
    name: 'Issue',
    url: '/issues',
    canonicalURL: null,
  },
  {
    id: 2,
    name: 'Calendar',
    url: '/calendar',
    canonicalURL: null,
  },
]

export { headerMenus }
