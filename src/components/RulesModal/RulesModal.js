import React from 'react'
import { ModalContent, ModalWrapper } from './RulesModalStyles'

const RulesModal = ({ modal }) => {
  return (
    <ModalWrapper modal={modal}>
        <ModalContent>Modal</ModalContent>
    </ModalWrapper>
  )
}

export default RulesModal