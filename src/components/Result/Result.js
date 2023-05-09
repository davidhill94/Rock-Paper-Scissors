import React from 'react'
import { ResetButton, ResultText, ResultWrapper } from './ResultStyles'

const Result = ({ selected, handleReset }) => {
  return (
    <ResultWrapper selected={selected}>
        <ResultText>YOU WIN!</ResultText>
        <ResetButton onClick={handleReset}>Reset</ResetButton>
    </ResultWrapper>
  )
}

export default Result