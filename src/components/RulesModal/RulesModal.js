import React from 'react'
import { FaHandPaper, FaHandRock, FaHandScissors } from 'react-icons/fa'
import { ModalContent, ModalWrapper, Rule } from './RulesModalStyles'

const RulesModal = ({ modal }) => {
  return (
    <ModalWrapper modal={modal}>
      <ModalContent>
        <Rule>
          <FaHandRock style={{ verticalAlign: "middle" }} />
          {" ROCK BEATS SCISSORS "}
          <FaHandScissors style={{ verticalAlign: "middle" }} />
        </Rule>
        <Rule>
          <FaHandScissors style={{ verticalAlign: "middle" }} />
          {" SCISSORS BEATS PAPERS "}
          <FaHandPaper style={{ verticalAlign: "middle" }} />
        </Rule>
        <Rule>
          <FaHandPaper style={{ verticalAlign: "middle" }} />
          {" PAPER BEATS ROCK "}
          <FaHandRock style={{ verticalAlign: "middle" }} />
        </Rule>
      </ModalContent>
    </ModalWrapper>
  )
}

export default RulesModal