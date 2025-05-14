import { Text, View, StyleSheet } from "react-native";
import FirstPage from "./FirstPage";

export default function Index() {
  return (
    <View style={styles.container}>
      <FirstPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center'
  }
})
