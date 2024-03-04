import { Text, StyleSheet, View, Image } from "react-native";

export default function Front() {
  return (
    <View style={styles.front}>
      <View style={styles.upper}>
        <Image
          source={require("../assets/images/me.jpg")}
          style={styles.image}
        />
        <Text style={styles.rollno}>CIIT/SP22-BSE-111/LHR</Text>
      </View>
      <View style={styles.lower}>
        <Text style={styles.student}>STUDENT</Text>
        <Text style={styles.degree}>Software Engineering</Text>
        <Text style={styles.name}>Yaseen Nazir</Text>
        <Image
          source={require("../assets/images/logo.jpeg")}
          style={styles.logo}
        />
        <Text style={styles.campus}>CUI Lahore Campus</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  front: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },

  upper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    height: 270,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: "#1e1f4a",
    width: "80%",
    gap: -15,
  },

  image: {
    width: 200,
    height: 200,
    marginLeft: 93,
    borderRadius: 10,
  },

  rollno: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    writingDirection: "rtl",
    transform: [{ rotate: "270deg" }],
    marginRight: -10,
  },

  lower: {
    backgroundColor: "white",
    alignItems: "center",
    height: 270,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    width: "80%",
    gap: 10,
  },

  student: {
    letterSpacing: 3,
    fontSize: 40,
    fontWeight: "bold",
    color: "black",
    marginTop: 10,
  },
  degree: {
    color: "gray",
    fontWeight: "bold",
    fontSize: 17,
  },

  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
  },

  logo: {
    height: 70,
    width: 70,
  },
  campus: {
    color: "gray",
    fontWeight: "bold",
    fontSize: 15,
  },
});
