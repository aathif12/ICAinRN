import { View, Text, Image, StyleSheet } from "react-native";

export default function Profile({ route }) {
  const { student } = route.params;
  return (
    <View style={styles.contanier}>
      <Text>Name:{student.name}</Text>
      <Text>gender:{student.name}</Text>
      <Text>age:{student.name}</Text>
      <Image
        style={styles.image}
        source={student.profile_pic}
        resizeMode="contain"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  contanier: {
    flex: 1,
  },
  image: {
    width: "40%",
  },
});
