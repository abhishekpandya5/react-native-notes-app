import { View, Text, StyleSheet } from "react-native";

const NotesScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Notes</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    backgroundColor: "#fff"
  }
});

export default NotesScreen;
