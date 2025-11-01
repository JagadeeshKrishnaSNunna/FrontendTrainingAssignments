import { setupServer } from 'msw/node'
import { handlers } from './handlers'

// Setup requests interception
export const server = setupServer(...handlers)
