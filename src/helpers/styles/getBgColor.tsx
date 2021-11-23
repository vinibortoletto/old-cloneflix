import { vars } from './variables'

export function getBgColor(pathname: string): string {
  let bgColor = ''

  if (pathname === '/' || pathname === '/login' || pathname === '/signup') {
    bgColor = `${vars.color.black}`
  }
  if (pathname === '/browse') bgColor = `${vars.color.darkGrey}`
  if (pathname === '/your-account') bgColor = `${vars.color.white}`

  return bgColor
}
