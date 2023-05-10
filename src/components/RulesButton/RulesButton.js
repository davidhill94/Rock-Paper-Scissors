import React, { useState } from 'react'
import { ArrowSpan, RulesBtn } from './RulesButtonStyles'
import { TiArrowUpThick, TiArrowDownThick } from 'react-icons/ti';

const RulesButton = ({ modal, setModal }) => {

const [hover, setHover] = useState(false);

const handleModal = () => {
    setModal(!modal);
}

const handleHover = () => {
  setHover(!hover)
  console.log(hover)
}

  return (
    <RulesBtn onMouseEnter={() => handleHover()} onMouseLeave={() => handleHover()} onClick={handleModal}>Rules <ArrowSpan modal={modal} hover={hover}>{modal ? <TiArrowDownThick style={{verticalAlign: "middle"}}/> : <TiArrowUpThick style={{verticalAlign: "middle"}}/>}</ArrowSpan></RulesBtn>
  )
}

export default RulesButton