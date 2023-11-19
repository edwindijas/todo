declare module '*.svg' {
  // eslint-disable-next-line @typescript-eslint/consistent-type-imports
  import * as React from 'react'

  export const ReactComponent: React.FunctionComponent<
    React.ComponentProps<'svg'> & { title?: string }
  >
  export default ReactComponent
}