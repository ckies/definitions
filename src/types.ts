import { CookieType } from '@ckies/library'

export { CookieType }

export interface Cookie {
  name: string
  info: string
  host?: string
  type: CookieType
  expires: string
}

export interface Host {
  name: string
  info: string
  cookies: Cookie[]
}
