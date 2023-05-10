import React from 'react'
import { ResetButton, ResultText, ResultWrapper } from './ResultStyles'

const Result = ({ selected, handleReset, result }) => {


  return (
    <ResultWrapper selected={selected}>
        <ResultText>{result}</ResultText>
        <ResetButton onClick={handleReset}>Reset</ResetButton>
    </ResultWrapper>
  )
}

export default Result