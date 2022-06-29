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
        value: value,
        name: key,
        id: value ? `${String(key)}-${value}` : key,
        ...(Array.isArray(activeFilters[key]) && !!value
          ? { checked: activeFilters[key].includes(value) }
          : {}),
      }
    },
    [activeFilters, onChange]
  )

  return { clearFilters, setProps, activeFilters } as const
}
