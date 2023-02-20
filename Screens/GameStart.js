import { StyleSheet, View } from "react-native";
import GameInput from "../Components/GameStart/GameInput";
import Title from "../Components/UI/Title";
const GameStart = (props) => {
  const startGameHandler = (enteredText) => {
    props.userInput(enteredText);
  };
  return (
    <>
      <Title style={styles.heading}>Guess My Number</Title>
      <View style={styles.container}>
        <GameInput onStart={startGameHandler} />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  heading: {
    marginBottom: 50,
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "white",
  },
  container: {
    backgroundColor: "black",
    width: "90%",
    borderRadius: 25,
    padding: 25,
  },
});

export default GameStart;
