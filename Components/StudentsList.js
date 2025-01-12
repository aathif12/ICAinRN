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

export default function StudentList() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <FlatList
        data={students}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Profile", { student: item })}
          >
            <Text style={styles.item}> {item.name}</Text>
          </TouchableOpacity>
        )}
      />
      <Button style={styles.button} onPress={navigation.navigate("Add")}>
        Add Student
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: { padding: 10, fontSize: 24, height: 44 },
  button: { width: "50px", height: "50px" },
});
