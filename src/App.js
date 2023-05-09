import { useState } from 'react';
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

  return (
    <div className="App">
      <Wrapper>
        <Header />
        <Selection handleUserPick={handleUserPick} userPick={userPick} handleCompPick={handleCompPick} compPick={compPick} selected={selected} setSelected={setSelected} handleReset={handleReset}/>
        <RulesButton modal={modal} setModal={setModal} />
      </Wrapper>
      <RulesModal modal={modal}/>
    </div>
      
  );
}

export default App;
