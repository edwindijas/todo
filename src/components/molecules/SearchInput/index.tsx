import SearchIcon from '@/components/atoms/Icon/Search'
import TextInput, { type InputProps } from '@/components/atoms/TextInput'

const SearchInput = ({
  label = 'Search',
  intent = 'secondary',
  ...props}: SearchInputProps):
  JSX.Element =>
<TextInput label={label} {...props} intent={intent} startIcon={<SearchIcon />} />

interface SearchInputProps extends Omit<InputProps, 'label'> {
  label?: string
}

export default SearchInput