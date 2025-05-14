import { Text, View, StyleSheet } from "react-native";
import FirstPage from "./FirstPage";
import ExerciseHistory from "./ExerciseHistory"
export default function Index() {
  return (
    <View>
      <FirstPage />
      <ExerciseHistory/>
    </View>
  );
}

