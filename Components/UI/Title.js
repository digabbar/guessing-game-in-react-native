import { View, Text, StyleSheet } from "react-native";
const Title = (props) => {
  return (
    <View style={[styles.title, props.style]}>
      <Text style={styles.titleText}>{props.children}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    width: "90%",
    padding: 10,
    backgroundColor: "black",
  },
  titleText: {
    textAlign: "center",
    fontSize: 32,
    color: "yellow",
  },
});

export default Title;
