import { StyleSheet, View } from "react-native";
import VictoryImage from "../Components/GameOver/VictoryImage";
import Title from "../Components/UI/Title";
import GameSummary from "../Components/GameOver/GameSummary";
import Button from "../Components/UI/Button";
const GameOver = (props) => {
  return (
    <>
      <View style={styles.gameOver}>
        <Title>Congratulation</Title>
        <VictoryImage />
        <GameSummary round={props.round} userInput={props.userInput} />
        <Button style={styles.button} onPress={props.onRestart}>
          Start New Game
        </Button>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  gameOver: {
    width: "100%",
    flex: 1,
    alignItems: "center",
  },
  button: {
    marginTop: 20,
    width: "auto",
    height: 50,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameOver;
