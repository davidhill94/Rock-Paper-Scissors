import React from 'react'
import { ScoreboardWrapper } from './ScoreboardStyles'

const Scoreboard = ({ scores }) => {
  const {userScore, compScore} = scores;
  return (
    <ScoreboardWrapper>
      {userScore > compScore ?
      `You are Winning ${userScore} - ${compScore}`
      :
      userScore < compScore ?
      `You are Losing ${userScore} - ${compScore}`
      :
      `You are Drawing ${userScore} - ${compScore}`
      }
    </ScoreboardWrapper>
  )
}

export default Scoreboard