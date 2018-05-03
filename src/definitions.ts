import * as fs from 'fs'

import { Host } from './types'

export const Definitions = {
  for: (key: string): Host => {
    const file = __dirname + '/../dist/' + key + '.json'
    const data = JSON.parse(fs.readFileSync(file).toString())

    return data as Host
  }
}
