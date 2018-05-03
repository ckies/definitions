export enum CookieType {
  NECESSARY = 'necessary',
  FUNCTIONAL = 'functioncal',
  PERFORMANCE = 'performance',
  MARKETING = 'marketing'
}

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
