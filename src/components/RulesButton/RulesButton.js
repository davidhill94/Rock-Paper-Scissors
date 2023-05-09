import React from 'react'
import { RulesBtn } from './RulesButtonStyles'
import { TiArrowUpThick, TiArrowDownThick } from 'react-icons/ti';

const RulesButton = ({ modal, setModal }) => {

const handleModal = () => {
    setModal(!modal);
}

  return (
    <RulesBtn onClick={handleModal}>Rules <span>{modal ? <TiArrowDownThick style={{verticalAlign: "middle"}}/> : <TiArrowUpThick style={{verticalAlign: "middle"}}/>}</span></RulesBtn>
  )
}

export default RulesButton