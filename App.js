import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header'
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOver from './screens/GameOver';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);

  }

  const startGameHandler = selectedNumber => {
    setUserNumber(selectedNumber);
  };

  const gameOverHandler = numOfRounds =>{
    setGuessRounds(numOfRounds);

  };

  let content = <StartGameScreen onStartGame={startGameHandler}/>;

  if(userNumber && guessRounds <= 0){
    content = (
        <GameScreen userChoice ={userNumber} onGameOver={gameOverHandler}/>
      );
  }
  else if(guessRounds > 0){
    console.log(guessRounds, userNumber);
    content = ( 
      <GameOver roundsNumber={guessRounds} userNumber={userNumber} onRestart={configureNewGameHandler}/>
      
    );
    
  }

  return (
    <View style={styles.container}>
      <Header title='Guess a number' /> 
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
