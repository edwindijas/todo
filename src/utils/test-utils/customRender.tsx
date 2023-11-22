import { type RenderResult, render as reactRender } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';



const render = (element: React.ReactElement): RenderResult => reactRender(<MemoryRouter >
    {element}
  </MemoryRouter>)

export default render