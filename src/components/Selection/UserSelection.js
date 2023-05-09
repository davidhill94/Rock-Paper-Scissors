import React from 'react'
import { FaHandPaper, FaHandRock, FaHandScissors } from 'react-icons/fa'
import { H1Text, SelectedIcon, SelectedText, UserPickWrapper, UserSelectionWrapper } from './UserSelectionStyles'

const UserSelection = ({ selected, userPick }) => {
  return (
    <UserSelectionWrapper selected={selected}>
      <H1Text>YOU CHOSE</H1Text>
      {userPick === "Rock" ?
        <UserPickWrapper>
          <SelectedIcon><FaHandRock /></SelectedIcon>
          <SelectedText>ROCK</SelectedText>
        </UserPickWrapper>
        :
        null}
      {userPick === "Paper" ?
        <UserPickWrapper>
          <SelectedIcon><FaHandPaper /></SelectedIcon>
          <SelectedText>PAPER</SelectedText>
        </UserPickWrapper>
        :
        null}
      {userPick === "Scissors" ?
        <UserPickWrapper>
          <SelectedIcon><FaHandScissors /></SelectedIcon>
          <SelectedText>SCISSORS</SelectedText>
        </UserPickWrapper>
        :
        null}
    </UserSelectionWrapper>
  )
}

export default UserSelection