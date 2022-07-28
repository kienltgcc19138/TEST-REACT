import react from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";

const UserInput = ({ name }) => {
  return (
    <View>
      <Text style={{ width: "100%", fontWeight: "600" }}>{name}</Text>
      <TextInput style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 45,
    width: 300,
    borderBottomWidth: 0.5,
    borderBottomColor: "#8393a1",
    marginBottom: 20,
  },
});

export default UserInput;
