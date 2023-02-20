import { View, StyleSheet, Image } from "react-native";
const VictoryImage = () => {
  return (
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={require("../../assets/goal.jpeg")} />
    </View>
  );
};
const styles = StyleSheet.create({
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    overflow: "hidden",
    marginTop: 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default VictoryImage;
