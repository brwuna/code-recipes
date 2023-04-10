import { Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { View } from "moti";

export function Logo() {
  return (
    <View
      style={styles.logoArea}
      from={{
        opacity: 0,
        translateX: -50,
      }}
      animate={{
        opacity: 1,
        translateX: 0,
      }}
      transition={{
        type: "timing",
        duration: 700,
      }}
    >
      <Text style={styles.logoTitle}>Code Recipes</Text>
      <Feather name="code" size={24} color="#fff" />
    </View>
  );
}

const styles = StyleSheet.create({
  logoArea: {
    backgroundColor: "#FD4028",
    alignSelf: "flex-start",
    padding: 8,
    paddingLeft: 16,
    paddingRight: 24,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
    borderBottomRightRadius: 32,
    marginBottom: 8,
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
  },
  logoTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginRight: 8,
    alignItems: "center",
  },
});
