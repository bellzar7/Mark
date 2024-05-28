import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

import { allRoutes } from '../../routes'
import { WEBSITE_ROUTE } from '../../Constants'

const AppRouter = () => {
  return (
    <Routes>
      {allRoutes.map(({ path, Component }) => {
        return <Route key={path} path={path} Component={Component} exact />
      })}
      <Route path="*" element={<Navigate to={WEBSITE_ROUTE} />} />
    </Routes>
  )
}

export { AppRouter }
