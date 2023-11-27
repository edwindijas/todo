import { useCallback, useState, type MutableRefObject } from 'react'

const useExpandable = <T extends HTMLElement = HTMLDivElement >({
  wrapper
}: UseExpandableProps<T>): UseExpandable => {
  const [active, setActive] = useState<boolean>(false)

  const deactivator = useCallback(({target}: MouseEvent) => {
    if (Boolean(wrapper) && wrapper?.current !== null
      && (wrapper?.current.contains(target as HTMLElement) || wrapper?.current === target)) {
      return
    }
    setActive(false)
  }, [wrapper])

  const toggleActive = useCallback(():void => {
    setActive(state => {
      if (!state) {
        document.addEventListener('click', deactivator)
      } else {
        document.removeEventListener('click', deactivator)
      }
      return !state
    })
  }, [setActive])

  return [active, toggleActive]
}

export interface UseExpandableProps<T> {
  wrapper: MutableRefObject<T | null>
}

export type UseExpandable  = [
  boolean,
  () => void
]

export default useExpandable