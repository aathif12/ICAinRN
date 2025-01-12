import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
export default function AddStudents() {
  const [addStudents, setADDstudnts] = useState("");
  return (
    <View style={styles.container}>
      <TextInput
        value={addStudents}
        mode="outlined"
        onChangeText={setADDstudnts}
        label="Name"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
