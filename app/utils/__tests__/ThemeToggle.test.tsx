import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import ThemeToggle from '../../components/ThemeToggle'
import { ThemeProvider } from '~/utils/theme-context'

describe('ThemeToggle', () => {
    it('renders with initial light theme', () => {
        render(
            <ThemeProvider>
                <ThemeToggle />
            </ThemeProvider>
        )

        const button = screen.getByRole('button')
        expect(button).toHaveAttribute('aria-label', 'Switch to dark mode')
    })

    it('toggles theme when clicked', () => {
        render(
            <ThemeProvider>
                <ThemeToggle />
            </ThemeProvider>
        )

        const button = screen.getByRole('button')

        // Initial state (light theme)
        expect(button).toHaveAttribute('aria-label', 'Switch to dark mode')

        // Click to toggle to dark theme
        fireEvent.click(button)
        expect(button).toHaveAttribute('aria-label', 'Switch to light mode')

        // Click to toggle back to light theme
        fireEvent.click(button)
        expect(button).toHaveAttribute('aria-label', 'Switch to dark mode')
    })
})