import React from 'react'
import Logo from '../Logo/Logo'
import Scoreboard from '../Scoreboard/Scoreboard'
import { AreaOne, AreaTwo, HeaderWrapper } from './HeaderStyling'

const Header = ({scores}) => {
    return (
        <HeaderWrapper>
            <AreaOne>
                <Logo />
            </AreaOne>
            <AreaTwo>
                <Scoreboard scores={scores}/>
            </AreaTwo>
        </HeaderWrapper>
    )
}

export default Header