import React from 'react'
import WebHeader from './WebHeader/WebHeader'
import MobHeader from './MobHeader/MobHeader'

const Header = ({ modalState }) => {
  return (
    <>
      <WebHeader modalState={modalState} />
      <MobHeader modalState={modalState} />
    </>
  )
}

export { Header }
