import render from "@/utils/test-utils/customRender";
import SearchInput from "..";

it('renders test input correctly', () => {
  const {container} = render(<><SearchInput label='Hello World' /><SearchInput /></>)
  expect(container).toMatchSnapshot()
})