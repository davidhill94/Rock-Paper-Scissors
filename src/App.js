import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import RulesButton from './components/RulesButton/RulesButton';
import RulesModal from './components/RulesModal/RulesModal';
import Selection from './components/Selection/Selection';
import { Wrapper } from './components/WrapperStyles';

function App() {

  const [modal, setModal] = useState(false);
  const [userPick, setUserPick] = useState(null);
  const [compPick, setCompPick] = useState(null);
  const [selected, setSelected] = useState(false);
  const [scores, setScores] = useState({ userScore: 0, compScore: 0 });
  const [result, setResult] = useState(null);

  const selections = ["Rock", "Paper", "Scissors"];

  const handleCompPick = (min, max) => {
    let random = Math.floor(Math.random() * (max - min + 1)) + min
    setCompPick(selections[random]);
  }

  const handleUserPick = (choice) => {
    setUserPick(choice)
  }

  const handleReset = () => {
    setCompPick(null);
    setUserPick(null);
    setSelected(false);
  }

 useEffect(() => {
  const picks = [userPick, compPick];
  if(picks[0] === picks[1] && picks[0] !== null){
    setResult("DRAW!")
  } else if (picks[0] === "Rock" && picks[1] !== "Paper") {
    setResult("YOU WIN!")
    let {userScore} = scores;
    userScore += 1;
    setTimeout(() => {
      setScores({...scores, userScore})
      }, 6000);
  } else if (picks[0] === "Paper" && picks[1] !== "Scissors") {
    setResult("YOU WIN!")
    let {userScore} = scores;
    userScore += 1;
    setTimeout(() => {
      setScores({...scores, userScore})
      }, 6000);
  } else if (picks[0] === "Scissors" && picks[1] !== "Rock") {
    setResult("YOU WIN!")
    let {userScore} = scores;
    userScore += 1;
    setTimeout(() => {
      setScores({...scores, userScore})
      }, 6000);
  } else if (picks[0] === null && picks[1] === null) {
    setResult("")
  } else {
    setResult("COMP WINS!")
    let {compScore} = scores;
    compScore += 1;
    setTimeout(() => {
      setScores({...scores, compScore})
      }, 6000);
  }
 // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [userPick, compPick])
  

    return (
      <div className="App">
        <Wrapper>
          <Header scores={scores}/>
          <Selection handleUserPick={handleUserPick} userPick={userPick} handleCompPick={handleCompPick} compPick={compPick} selected={selected} setSelected={setSelected} handleReset={handleReset} scores={scores} result={result}/>
          <RulesButton modal={modal} setModal={setModal} selected={selected}/>
        </Wrapper>
        <RulesModal modal={modal} />
      </div>

    );
  }

  export default App;
