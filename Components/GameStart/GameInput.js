import { useState } from "react";
import { StyleSheet, TextInput, View, Alert } from "react-native";
import Button from "../UI/Button";
const GameInput = (props) => {
  const [enteredText, setEnteredText] = useState("");
  const inputChangeHandler = (enteredText) => {
    setEnteredText(enteredText);
  };
  const resetHandler = () => {
    setEnteredText("");
  };
  const startHandler = () => {
    const number = parseInt(enteredText);
    if (isNaN(number) || number < 0 || number > 100) {
      Alert.alert("Invalid Input!", "Please enter number btw 0 to 100", [
        {
          text: "Okay",
          style: "destructive",
          onPress: resetHandler(),
        },
      ]);
      return;
    }
    props.onStart(number);
  };
  return (
    <>
      <TextInput
        onChangeText={inputChangeHandler}
        keyboardType="number-pad"
        spellCheck="false"
        autoCapitalize="none"
        maxLength={2}
        style={styles.keybordInput}
        value={enteredText}
      />
      <View style={styles.gameStartAction}>
        <Button onPress={resetHandler}>Reset</Button>
        <Button onPress={startHandler}>Start</Button>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  keybordInput: {
    width: 50,
    height: 50,
    fontSize: 32,
    textAlign: "center",
    color: "black",
    borderBottomColor: "yellow",
    borderBottomWidth: 4,
    color: "yellow",
  },
  gameStartAction: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 20,
  },
});
export default GameInput;
