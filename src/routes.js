import { WEBSITE_ROUTE, ERROR_ROUTE } from './Constants'
import { ErrorPage, MainPage } from './Pages'

export const allRoutes = [
  { path: WEBSITE_ROUTE, Component: MainPage },
  { path: ERROR_ROUTE, Component: ErrorPage },
]
