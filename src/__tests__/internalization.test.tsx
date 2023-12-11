import { render } from "@testing-library/react";
import Internalization from "@/Internalization";

it('internalization matches snapshot', () => {
  const {container} = render(<Internalization ><div >Hello World</div></Internalization>)
  expect(container).toMatchSnapshot()
} )