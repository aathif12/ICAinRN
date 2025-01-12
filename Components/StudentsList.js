import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { students } from "./StudentsDb";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";

export default function StudentList({ route }) {
  const navigation = useNavigation();
  const [myStudents, setMyStudents] = useState(students);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    if (route.params?.newStudent) {
      setMyStudents((prev) => [...prev, route.params.newStudent]);
      setRerender(!rerender);
    }
  }, [route.params?.newStudent]);

  return (
    <View style={styles.container}>
      <FlatList
        data={myStudents}
        keyExtractor={(item) => item.id}
        extraData={rerender}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Profile", { student: item })}
          >
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate("Add")}
      >
        <Text style={styles.addButtonText}>Add Student</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 24,
    height: 44,
  },
  addButton: {
    backgroundColor: "#008CBA",
    padding: 10,
    margin: 20,
    alignItems: "center",
    borderRadius: 5,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 18,
  },
});
