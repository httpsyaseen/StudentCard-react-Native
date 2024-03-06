import { StyleSheet, Text, View } from "react-native";

export default function Front() {
  return (
    <View style={styles.back}>
      <View style={styles.upper}>
        <View>
          <Text style={styles.title}>Validity</Text>
          <Text style={styles.simple}>Feb 2022-Feb 2026 </Text>
        </View>
        <View>
          <Text style={styles.title}>Emergency</Text>
          <Text style={styles.simple}>(042) 111 001 007</Text>
        </View>
        <View>
          <Text style={styles.simple}>www.cuilahore.edu.pk</Text>
        </View>
      </View>
      <View style={styles.lower}>
        <Text style={styles.text}>This card is {"\n"} non transferable</Text>
        <Text style={styles.text}>
          This card is property of {"\n"} COMSATS UNIVERSITY ISLAMABAD {"\n"}
          Lahore, Campus
        </Text>
        <Text style={styles.text}>
          In case of Issue report to{"\n"} CUI, Lahore {"\n"} Immediatly.
        </Text>
        <Text style={styles.text}>
          Defence Road{"\n"} Off Raiwind Road,{"\n"}Lahore.
        </Text>
        <Text style={styles.authority}>Issuing Authority: _____________</Text>
        <Text style={styles.rollno}>SP22-BSE-111</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  back: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },

  upper: {
    alignItems: "center",
    justifyContent: "center",
    height: 270,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: "#1e1f4a",
    // width: "140%",
    width: 285,
    gap: 20,
  },
  title: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },

  simple: { color: "white", textAlign: "center", marginTop: 3, fontSize: 15 },

  lower: {
    backgroundColor: "white",
    alignItems: "center",
    height: 270,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    width: "140%",
    width: 285,
    gap: 8,
  },

  text: {
    color: "gray",
    textAlign: "center",
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 4,
  },
  authority: {
    color: "black",
    textAlign: "center",
    fontSize: 13,
    fontWeight: "bold",
  },

  rollno: {
    color: "black",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
});
