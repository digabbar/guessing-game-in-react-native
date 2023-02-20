import { useState, useEffect } from "react";
import { View, StyleSheet, Alert, FlatList } from "react-native";
import Title from "../Components/UI/Title";
import GuessBox from "../Components/GameRunning/GuessBox";
import Button from "../Components/UI/Button";
import Item from "../Components/GameRunning/Item";
let minGuessValue = 0;
let maxGuessValue = 100;
const generateRandomNumber = (min, max) => {
  const randomNumber = Math.floor(Math.random() * (max - min - 1)) + min + 1;
  return randomNumber;
};

const GameRunning = ({ userInput, onGameOver }) => {
  const initialValue = generateRandomNumber(1, 100);
  const [guessValue, setGuessValue] = useState(initialValue);
  const [log, setlog] = useState([
    {
      id: initialValue,
      data: initialValue,
    },
  ]);
  const newRandomNumberHandler = (direction) => {
    if (
      (direction === "high" && userInput < guessValue) ||
      (direction === "low" && userInput > guessValue)
    ) {
      Alert.alert("Lier", "You know this is incorrect", [
        {
          text: "Sorry",
          style: "destructive",
        },
      ]);
      return;
    } else if (direction === "high") {
      minGuessValue = guessValue;
    } else if (direction === "low") {
      maxGuessValue = guessValue;
    }
    const number = generateRandomNumber(minGuessValue, maxGuessValue);

    setGuessValue(number);
    setlog((prev) => {
      return [
        ...prev,
        {
          id: number,
          data: number,
        },
      ];
    });
  };

  useEffect(() => {
    if (guessValue === userInput) {
      minGuessValue = 0;
      maxGuessValue = 100;

      onGameOver(log.length);
    }
  }, [guessValue, onGameOver, userInput]);
  return (
    <>
      <Title>My Guess</Title>
      <GuessBox guessValue={guessValue} />
      <View style={styles.actionBtn}>
        <Button onPress={newRandomNumberHandler.bind(null, "high")}>
          High
        </Button>
        <Button onPress={newRandomNumberHandler.bind(null, "low")}>Low</Button>
      </View>
      <View style={styles.log}>
        <FlatList
          data={log}
          renderItem={(item) => (
            <Item number={item.item.data} id={item.index + 1} />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  actionBtn: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  log: {
    marginTop: 20,
    flex: 1,
  },
});

export default GameRunning;
