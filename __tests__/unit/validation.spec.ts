import { validateInput } from '../../src/utils/validation'
import { describe, it, expect } from 'vitest'

describe('should validate input', () => {
  it('should return true for empty input', () => {
    expect(validateInput('')).toBe(true)
  })
  it('should return false for valid input', () => {
    expect(validateInput('123456')).toBe(false)
  })
})
