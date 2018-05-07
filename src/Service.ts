import * as fs from 'fs'
import * as yaml from 'js-yaml'
import * as path from 'path'

export enum CookieType {
  NECESSARY = 'necessary',
  FUNCTIONAL = 'functional',
  PERFORMANCE = 'performance',
  MARKETING = 'marketing'
}

export interface CookieData {
  name: string
  info: string
  type: CookieType
  host?: string
  expires: string
}

export interface ServiceData {
  name: string
  info?: string
  website?: string
  cookies?: CookieData[]
}

export class Service {
  public data: ServiceData

  constructor(public key: string, private basePath?: string) {
    if (!fs.existsSync(this.file)) {
      throw new Error(`Unable to find service: ${this.key}`)
    }

    try {
      this.data = yaml.safeLoad(
        fs.readFileSync(this.file, 'utf8')
      ) as ServiceData
    } catch (e) {
      throw new Error(`Unable to parse file: ${e.message}`)
    }
  }

  get file(): string {
    if (this.basePath) {
      return path.resolve(this.basePath, `${this.key}.yaml`)
    } else {
      return path.resolve(__dirname, `../data/${this.key}.yaml`)
    }
  }

  get cookies() {
    return this.data.cookies || []
  }

  get name() {
    return this.data.name
  }
}
