import { ChangeEvent, useCallback, useState } from "react"

type ActiveFilters<T> = {
  [Property in keyof T]: string[] | string
}

export const useFilter = <T>(initial: ActiveFilters<T>) => {
  const [activeFilters, setActiveFilters] = useState<ActiveFilters<T>>(initial)

  const toggleFilter = useCallback(
    (key: string, value: string) => {
      const exists = activeFilters[key].includes(value)

      if (exists) {
        return setActiveFilters((prev) => {
          const current = prev[key]

          return {
            ...prev,
            [key]: Array.isArray(current) ? current.filter((v) => v !== value) : value,
          }
        })
      }

      return setActiveFilters((prev) => {
        const current = prev[key]

        return {
          ...prev,
          [key]: Array.isArray(current) ? [...current, value] : value,
        }
      })
    },
    [activeFilters]
  )

  const clearFilters = useCallback(() => {
    setActiveFilters((prev) => {
      const keys = Object.keys(prev) as Array<keyof typeof prev>

      return keys.reduce(
        (acc, key) => ({ ...acc, [key]: Array.isArray(prev[key]) ? [] : "" }),
        initial
      )
    })
  }, [initial])

  const removeFilter = (key: keyof T, value?: string) => {
    return setActiveFilters((prev) => {
      const current = prev[key]
      const isArray = Array.isArray(current)

      if (isArray) {
        return {
          ...prev,
          [key]: current.filter((v) => v !== value),
        }
      }

      return {
        ...prev,
        [key]: "",
      }

      return prev
    })
  }

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target

      const correspondingValue: string[] | string | undefined = activeFilters[name]

      if (!correspondingValue) return

      if (Array.isArray(correspondingValue) || typeof correspondingValue === "string") {
        return toggleFilter(name, value)
      }
    },
    [activeFilters, toggleFilter]
  )

  const setProps = useCallback(
    (key: keyof T, value?: string) => {
      return {
        onChange,
        value: value ? value : activeFilters[key],
        name: key,
        id: value ? `${String(key)}-${value}` : key,
        ...(Array.isArray(activeFilters[key]) && !!value
          ? { checked: activeFilters[key].includes(value) }
          : {}),
      }
    },
    [activeFilters, onChange]
  )

  const count = Object.keys(activeFilters).reduce((acc, curr) => {
    if (Array.isArray(activeFilters[curr])) {
      return acc + activeFilters[curr].length
    }

    if (typeof activeFilters[curr] === "string" && activeFilters[curr].length > 0) {
      return acc + 1
    }

    return acc
  }, 0)

  return { clearFilters, setProps, activeFilters, removeFilter, count } as const
}
