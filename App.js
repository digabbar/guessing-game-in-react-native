import { StyleSheet, SafeAreaView, ImageBackground } from "react-native";
import GameStart from "./Screens/GameStart";
import GameRunning from "./Screens/GameRunning";
import GameOver from "./Screens/GameOver";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
const App = () => {
  const [userInput, setUserInput] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [round, setRound] = useState(0);
  const userInputHandler = (enteredText) => {
    setUserInput(enteredText);
    setGameIsOver(false);
  };
  const gameOverHandler = (round) => {
    setRound(round);
    setGameIsOver(true);
  };
  const restartHandler = () => {
    setUserInput();
  };
  let screen;
  if (!userInput) {
    screen = (
      <GameStart userInput={userInputHandler} style={styles.container} />
    );
  }
  if (userInput && !gameIsOver) {
    screen = <GameRunning userInput={userInput} onGameOver={gameOverHandler} />;
  }
  if (userInput && gameIsOver) {
    screen = (
      <GameOver
        onRestart={restartHandler}
        round={round}
        userInput={userInput}
      />
    );
  }

  return (
    <LinearGradient
      colors={["#4c669f", "#3b5998", "#192f6a"]}
      style={styles.container}
    >
      <ImageBackground
        style={[styles.container, styles.backgroundImage]}
        source={require("./assets/dice.jpg")}
      >
        <SafeAreaView style={styles.container}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    alignItems: "center",
  },
  backgroundImage: {
    opacity: 0.8,
  },
});

export default App;
