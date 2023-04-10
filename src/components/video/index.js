import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { WebView } from "react-native-webview";
import { Feather } from "@expo/vector-icons";

export function VideoView({ handleClose, videoUrl }) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleClose}>
        <Feather name="arrow-left" size={24} color="#fff" />
        <Text style={styles.backText}>Voltar</Text>
      </TouchableOpacity>

      <WebView 
        style={styles.contentView}
        source={{uri: videoUrl}}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  backButton: {
    width: "100%",
    backgroundColor: "#FD4028",
    height: 48,
    flexDirection: "row",
    alignItems: "center",
    paddingStart: 14,
  },
  backText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: 500,
    marginLeft: 8,
  },
  contentView: {
    flex: 1,
    width: "100%",
  }
});
