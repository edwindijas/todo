import fs from 'fs'
import path from 'path'
import startCase from 'lodash/startCase.js'
import camelCase from 'lodash/camelCase.js'

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const name = process.argv[2]
const namePascal = startCase(camelCase(name)).replace(/ /g, '')

const svgPath = path.join(__dirname, `../../node_modules/@material-design-icons/svg/svg/${name}/round.svg`)
const componentPath = path.join(__dirname, `../../src/components/atoms/Icon/${namePascal}.tsx`)
const componentOutlinePath = path.join(__dirname, `../../src/components/atoms/Icon/${namePascal}Outline.tsx`)

const getSVG = (outline = false) => `import React from 'react'
import Icon from '.'
import { ReactComponent } from '@material-design-icons/svg/svg/${name}/${outline ? 'outline' : 'round'}.svg'

const ${namePascal}${outline ? 'Outline': ''}Icon = (props: React.SVGAttributes<SVGElement>): JSX.Element => (
  <Icon {...props} component={ReactComponent} />
)

export default ${namePascal}${outline ? 'Outline': ''}Icon
`

if (fs.existsSync(svgPath)) {
  fs.writeFileSync(componentPath, getSVG())
  fs.writeFileSync(componentOutlinePath, getSVG(true))
  console.error('x1b[31m%s\x1b[0m', `Svg file created: ${componentPath}`)
} else {
  console.error('x1b[31m%s\x1b[0m', `Svg file not found: ${svgPath}`)
}
