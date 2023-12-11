import { type RenderResult, render as reactRender } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import {IntlProvider} from 'react-intl'

const render = (element: React.ReactElement): RenderResult => reactRender(
  <IntlProvider messages={{}} locale='en-gb' >
    <MemoryRouter >
      {element}
    </MemoryRouter>
  </IntlProvider>
  )

export default render