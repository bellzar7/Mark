'use client'

import { useDisclosure } from '@nextui-org/react'
import { WebHeader } from './WebHeader'
import { MobHeader } from './MobHeader'
import { PopUp } from '../PopUp'

export function Header() {
  const modalState = useDisclosure()

  return (
    <>
      <WebHeader modalState={modalState} />
      <MobHeader modalState={modalState} />
      <PopUp modalState={modalState} />
    </>
  )
}
