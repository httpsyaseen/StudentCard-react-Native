// import { StatusBar } from "expo-status-bar";
// import { Pressable, StyleSheet, Text, View } from "react-native";
// import Front from "./components/Front";
// import Back from "./components/Back";
// import { useState } from "react";

// export default function App() {
//   const [change, setChange] = useState(true);

//   return (
//     <>
//       <StatusBar style="auto" />
//       <View style={styles.container}>
//         {change ? <Front /> : <Back />}
//         <Pressable onPress={() => setChange(!change)}>
//           <Text style={styles.button}>
//             Go to {!change ? "Front" : "Back"} &#10140;
//           </Text>
//         </Pressable>
//       </View>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#2e5090",
//     alignItems: "center",
//     justifyContent: "center",
//   },

//   button: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "white",
//     backgroundColor: "black",
//     borderRadius: 10,
//     padding: 10,
//     paddingHorizontal: 30,
//     marginTop: 30,
//     alignSelf: "flex-end",
//   },
// });

import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";

const FlipContainers = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const animatedValue = new Animated.Value(0);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    Animated.timing(animatedValue, {
      toValue: isFlipped ? 0 : 180,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const interpolatedValue = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ["0deg", "180deg"],
  });

  const frontAnimatedStyle = {
    transform: [{ rotateY: interpolatedValue }],
  };

  const backAnimatedStyle = {
    transform: [
      {
        rotateY: interpolatedValue.interpolate({
          inputRange: [0, 180],
          outputRange: ["180deg", "360deg"],
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleFlip} style={styles.flipButton}>
        <Text>Flip</Text>
      </TouchableOpacity>
      <Animated.View style={[styles.flipCard, frontAnimatedStyle]}>
        <Text>Front Container</Text>
      </Animated.View>
      <Animated.View
        style={[styles.flipCard, styles.flipCardBack, backAnimatedStyle]}
      >
        <Text>Back Container</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  flipCard: {
    width: 200,
    height: 200,
    backgroundColor: "lightblue",
    justifyContent: "center",
    alignItems: "center",
    backfaceVisibility: "hidden",
  },
  flipCardBack: {
    backgroundColor: "lightgreen",
    position: "absolute",
    top: 0,
  },
  flipButton: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: "lightgrey",
    borderRadius: 5,
  },
});

export default FlipContainers;
