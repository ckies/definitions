import { Definitions } from './definitions'

describe('Definitions', () => {
  it('should return Host information for heft.io', () => {
    const host = Definitions.for('heft.io')

    expect(host.name).toBe('heft.io')
    expect(host.info).toBe('Website Analytics')
  })

  it('should return Cookie list for heft.io', () => {
    const host = Definitions.for('heft.io')
    const cookies = host.cookies
    const cookie = cookies[0]

    expect(cookies.length).toBe(1)
    expect(cookie.name).toBe('__cfduid')
    expect(cookie.type).toBe('necessary')
    expect(cookie.expires).toBe('1d')
    expect(cookie.info).toBe('Some cookie. IDK what purpose.')
  })
})
