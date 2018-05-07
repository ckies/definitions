import { Service } from '../src/Service'

describe('Service', () => {
  describe('Resolver', () => {
    it('should resolve known service', () => {
      expect(
        () => new Service('example-working', `${__dirname}/fixtures`)
      ).not.toThrowError()
    })
  
    it('should fail for unknown service', () => {
      expect(
        () => new Service('example-unknown', `${__dirname}/fixtures`)
      ).toThrowError()
    })
  })

  describe('Parser', () => {
    it('should work for valid service configuration', () => {
      expect(
        () => new Service('example-working', `${__dirname}/fixtures`)
      ).not.toThrowError()
    })

    it('should not work for invalid service configuration', () => {
      expect(
        () => new Service('example-invalid-syntax', `${__dirname}/fixtures`)
      ).toThrowError()
    })
  })
})
