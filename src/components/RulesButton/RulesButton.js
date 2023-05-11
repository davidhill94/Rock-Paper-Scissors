import React, { useState } from 'react'
import { ArrowSpan, RulesBtn } from './RulesButtonStyles'
import { TiArrowUpThick, TiArrowDownThick } from 'react-icons/ti';

const RulesButton = ({ modal, setModal, selected }) => {

const [hover, setHover] = useState(false);

const handleModal = () => {
    setModal(!modal);
}

const handleHover = (boolean) => {
  setHover(boolean)
}

  return (
    <RulesBtn selected={selected} onMouseEnter={() => handleHover(true)} onMouseLeave={() => handleHover(false)} onClick={handleModal}>Rules <ArrowSpan modal={modal} hover={hover}>{modal ? <TiArrowDownThick style={{verticalAlign: "middle"}}/> : <TiArrowUpThick style={{verticalAlign: "middle"}}/>}</ArrowSpan></RulesBtn>
  )
}

export default RulesButton