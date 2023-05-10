import React from 'react';
import { FaHandRock, FaHandPaper, FaHandScissors } from 'react-icons/fa';
import Result from '../Result/Result';
import CompSelection from './CompSelection';
import { ItemText, Paper, Rock, Scissors, SelectionButton, SelectionWrapper, SelectText } from './SelectionStyles'
import UserSelection from './UserSelection';

const Selection = ({ handleUserPick, userPick, handleCompPick, compPick, selected, setSelected, handleReset, result }) => {

    const handleSelection = (choice) => {
        handleCompPick(0, 2)
        handleUserPick(choice)
        setSelected(!selected)
        console.log(`User: ${userPick} and Comp: ${compPick}`)
    }

    return (
        <SelectionWrapper>
            <SelectText>CHOOSE....</SelectText>
            <Rock>
                <SelectionButton onClick={() => handleSelection("Rock")}>
                    <FaHandRock />
                </SelectionButton>
                <ItemText>ROCK</ItemText>
            </Rock>
            <Paper>
                <SelectionButton onClick={() => handleSelection("Paper")}>
                    <FaHandPaper />
                </SelectionButton>
                <ItemText>PAPER</ItemText>
            </Paper>
            <Scissors>
                <SelectionButton onClick={() => handleSelection("Scissors")}>
                    <FaHandScissors />
                </SelectionButton>
                <ItemText>SCISSORS</ItemText>
            </Scissors>
                <UserSelection selected={selected} userPick={userPick}/>
                <CompSelection selected={selected} compPick={compPick}/>
                <Result selected={selected} handleReset={handleReset} userPick={userPick} compPick={compPick} result={result}/>
        </SelectionWrapper>
    )
}

export default Selection