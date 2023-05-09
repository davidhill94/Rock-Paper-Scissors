import React from 'react'
import { FaHandPaper, FaHandRock, FaHandScissors } from 'react-icons/fa'
import { CompPickWrapper, CompSelectionWrapper, H1Text, SelectedIcon, SelectedText } from './CompSelectionStyles'

const CompSelection = ({ selected, compPick }) => {
  return (
    <CompSelectionWrapper selected={selected}>
       <H1Text>COMP CHOSE</H1Text>
      {compPick === "Rock" ?
        <CompPickWrapper>
          <SelectedIcon><FaHandRock /></SelectedIcon>
          <SelectedText>ROCK</SelectedText>
        </CompPickWrapper>
        :
        null}
      {compPick === "Paper" ?
        <CompPickWrapper>
          <SelectedIcon><FaHandPaper /></SelectedIcon>
          <SelectedText>PAPER</SelectedText>
        </CompPickWrapper>
        :
        null}
      {compPick === "Scissors" ?
        <CompPickWrapper>
          <SelectedIcon><FaHandScissors /></SelectedIcon>
          <SelectedText>SCISSORS</SelectedText>
        </CompPickWrapper>
        :
        null}
    </CompSelectionWrapper>
  )
}

export default CompSelection