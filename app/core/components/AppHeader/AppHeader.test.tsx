import React, { ReactNode } from "react"
import { render, fireEvent, cleanup, within } from "test/utils"
import AppHeader from "./AppHeader"
import "@testing-library/jest-dom"

describe("AppHeader", () => {
  afterEach(() => {
    cleanup()
  })
  it("renders a hidden logo for screen readers", () => {
    const { getByText } = render(<AppHeader />)
    const hiddenText = getByText(/Batik/)
    expect(hiddenText.textContent).toEqual("Batik: Basis data dan informasi KBRI")
    expect(hiddenText.classList.contains("govuk-visually-hidden")).toBe(true)
  })
})
