import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Front from "./components/Front";
import Back from "./components/Back";
import { useState } from "react";
import FlipCard from "react-native-flip-card";

export default function App() {
  const [change, setChange] = useState(true);

  return (
    <>
      <StatusBar style="light" />
      {/* <View style={styles.container}>
        {change ? <Front /> : <Back />}
        <Pressable onPress={() => setChange(!change)}>
          <Text style={styles.button}>
            Go to {!change ? "Front" : "Back"} &#10140;
          </Text>
        </Pressable>
      </View> */}

      <View style={styles.container}>
        <FlipCard
          style={{ marginTop: 100 }}
          flipHorizontal={false}
          flipVertical={true}
          friction={10}
        >
          <Front />
          <Back />
        </FlipCard>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2e5090",
    justifyContent: "center",
  },

  button: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "black",
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 30,
    marginTop: 30,
    alignSelf: "flex-end",
    alignSelf: "center",
  },
});
