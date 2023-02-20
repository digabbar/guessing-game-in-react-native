import { StyleSheet, View, Text } from "react-native";
const Item = (props) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardNumber}>
        <Text style={styles.text}># {props.id}</Text>
      </View>
      <View style={styles.cardItem}>
        <Text style={styles.text}>Opponent's Guess: {props.number}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    width: "100%",
    padding: 10,
    backgroundColor: "white",
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardNumber: {
    width: "50%",
  },
  cardItem: {
    width: "50%",
    alignItems: "flex-end",
  },

  text: {
    fontWeight: "500",
  },
});

export default Item;
