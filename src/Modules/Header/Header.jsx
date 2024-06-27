import React from 'react'
import WebHeader from './WebHeader/WebHeader'
import MobHeader from './MobHeader/MobHeader'
import { PopUp } from '../PopUp'
import { useDisclosure } from '@nextui-org/react'

const Header = () => {
  const modalState = useDisclosure()
  return (
    <>
      <WebHeader modalState={modalState} />
      <MobHeader modalState={modalState} />
      <PopUp modalState={modalState} />
    </>
  )
}

export { Header }
