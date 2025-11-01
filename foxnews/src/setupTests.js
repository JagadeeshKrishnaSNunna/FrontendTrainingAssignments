import '@testing-library/jest-dom'
import { beforeAll, afterAll, afterEach } from 'vitest'
import { server } from './mocks/server'

// Start the MSW server before all tests
beforeAll(() => server.listen())

// Reset handlers after each test (to clean up overrides)
afterEach(() => server.resetHandlers())

// Close the server when all tests are done
afterAll(() => server.close())
