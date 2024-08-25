import {
  WEBSITE_ROUTE,
  ERROR_ROUTE,
  POLICY_ROUTE,
  COOKIES_ROUTE,
} from './Constants'
import { CookiesPage, ErrorPage, MainPage, PolicyPage } from './Pages'

export const allRoutes = [
  { path: WEBSITE_ROUTE, Component: MainPage },
  { path: ERROR_ROUTE, Component: ErrorPage },
  { path: POLICY_ROUTE, Component: PolicyPage },
  { path: COOKIES_ROUTE, Component: CookiesPage },
]
