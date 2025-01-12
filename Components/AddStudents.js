import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Button, StyleSheet, TextInput, View, Alert } from "react-native";
import { v4 as uuidv4 } from "uuid"; // Use this for unique IDs if available

export default function AddStudents() {
  const [name, setName] = useState("");
  const navigation = useNavigation();

  const handleAddStudent = () => {
    if (!name.trim()) {
      Alert.alert("Invalid Input", "Please enter a valid name.");
      return;
    }

    const newStudent = {
      name,
      id: uuidv4(), // Generate a unique ID
      age: 14,
    };

    // Navigate back and pass data (example method)
    navigation.popTo("StudentsList", { newStudent });
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Enter Student Name"
        style={styles.input}
      />
      <Button title="ADD" onPress={handleAddStudent} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
});
