import store from '../store'

it('internalization matches snapshot', () => {
  expect(store.getState()).toEqual({})
})