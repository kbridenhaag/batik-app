import { renderHook, act } from "@testing-library/react-hooks"
import { ChangeEvent } from "react"
import { useFilter } from "./useFilter"

describe("useFilter", () => {
  const initialFilters = {
    colour: ["orange", "blue", "green"],
    search: "",
    size: ["large"],
    name: "Pandu",
  }
  it("should expose an object with methods", () => {
    const { result } = renderHook(() => useFilter(initialFilters))
    expect(result.current).toHaveProperty("activeFilters")
    expect(result.current).toHaveProperty("clearFilters")
    expect(result.current).toHaveProperty("setProps")
  })

  it("should return the initial filters before change", () => {
    const { result } = renderHook(() => useFilter(initialFilters))

    expect(result.current.activeFilters).toEqual(initialFilters)
  })

  it("should clear the filters", () => {
    const { result } = renderHook(() => useFilter(initialFilters))

    result.current.clearFilters()

    expect(result.current.activeFilters).toMatchObject({
      colour: [],
      search: "",
      size: [],
      name: "",
    })
  })

  it("should add an array filter", () => {
    const { result } = renderHook(() => useFilter(initialFilters))

    const { onChange } = result.current.setProps("colour", "red")

    onChange({ target: { name: "colour", value: "pink" } } as ChangeEvent<HTMLInputElement>)

    expect(result.current.activeFilters.colour).toContain("pink")
  })

  it("should remove an array filter", () => {
    const { result } = renderHook(() => useFilter(initialFilters))

    expect(result.current.activeFilters.colour).toContain("orange")

    const { onChange } = result.current.setProps("colour", "orange")

    onChange({ target: { name: "colour", value: "orange" } } as ChangeEvent<HTMLInputElement>)

    expect(result.current.activeFilters.colour).not.toContain("orange")
  })

  it("should change a string filter", () => {
    const { result } = renderHook(() => useFilter(initialFilters))

    expect(result.current.activeFilters.name).toEqual("Pandu")

    const { onChange } = result.current.setProps("name")

    onChange({ target: { name: "name", value: "Paula" } } as ChangeEvent<HTMLInputElement>)

    expect(result.current.activeFilters.name).toEqual("Paula")
  })

  it("should register props for string values", () => {
    const { result } = renderHook(() => useFilter(initialFilters))

    const props = result.current.setProps("name")

    expect(props.id).toEqual("name")
    expect(props.name).toEqual("name")
    expect(props.value).toEqual("Pandu")
  })
  it("should register props for array values", () => {
    const { result } = renderHook(() => useFilter(initialFilters))

    const props = result.current.setProps("colour", "orange")

    expect(props.id).toEqual("colour-orange")
    expect(props.name).toEqual("colour")
    expect(props.value).toEqual("orange")
  })

  it("should return whether or not an item should be checked", () => {
    const { result } = renderHook(() => useFilter(initialFilters))

    expect(result.current.setProps("colour", "orange").checked).toBeTruthy()

    act(() => {
      result.current
        .setProps("colour", "orange")
        .onChange({ target: { name: "colour", value: "orange" } } as ChangeEvent<HTMLInputElement>)
    })

    expect(result.current.setProps("colour", "orange").checked).toBeFalsy()
  })
})