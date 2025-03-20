import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ThemeProvider, useTheme } from '../theme-context'

describe('ThemeProvider', () => {
    it('provides theme context', () => {
        const TestComponent = () => {
            const { theme } = useTheme()
            return <div data-testid="theme-value">{theme}</div>
        }

        render(
            <ThemeProvider>
                <TestComponent />
            </ThemeProvider>
        )

        expect(screen.getByTestId('theme-value')).toHaveTextContent('light')
    })
})