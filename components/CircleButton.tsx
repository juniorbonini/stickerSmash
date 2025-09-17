import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Pressable, StyleSheet, View } from "react-native";

type Props = {
  onPress: () => void;
};

export default function CircleButton({ onPress }: Props) {
  return (
    <View style={styles.CircleButtonContainer}>
      <Pressable style={styles.CircleButton}>
        <MaterialIcons name="add" size={38} color="#25292E" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  CircleButtonContainer: {
    width: 84,
    height: 84,
    marginHorizontal: 60,
    borderWidth: 4,
    borderColor: "#FFD33D",
    borderRadius: "50%",
    padding: 3,
  },
  CircleButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 42,
    backgroundColor: "#FFF",
  },
});
